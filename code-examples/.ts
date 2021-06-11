import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment as ENV } from 'environments'
import { Observable } from 'rxjs/Observable'
import { catchError, map } from 'rxjs/operators'
import { errorPayload } from '../../error/model/error'
import { KVPList } from '../../shared'
import { toExternalDataframeType } from '../dataframe/type-converter'
import { Error, handleError, log } from '../error-handler'
import {
  AddReportRequest,
  AddReportResponse,
  COMPUTE_CONFIG_DEFAULT,
  COMPUTE_SUCCESS_STATUS,
  ComputeConfig,
  ComputeRequest,
  ComputeRequestParameter,
  ComputeResponseBase,
  ComputeResult,
} from './model'

const BASE_COMPUTE_URL = ENV.computeServiceUrls.base
const COMPUTE_SYNC_URL = BASE_COMPUTE_URL + ENV.computeServiceUrls.compute.sync

const BASE_SERVICE_URL = ENV.servicesUrls.base
const ADD_REPORT_URL = BASE_SERVICE_URL + ENV.servicesUrls.report.addReport

const COMPUTE_SERVICE_FAILED = 'Compute Service Failed'

@Injectable()
export class ComputeService {
  constructor(private http: HttpClient) {}

  addReport(config: ComputeConfig): Observable<ComputeResult> {
    const errorRes: ComputeResult = { outputIDs: [] }
    const url = `${ADD_REPORT_URL}/${config.scriptID}`
    const body = ComputeService.toAddReportRequest(config)
    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    }
    log.post(url, body)
    return this.http.post<AddReportResponse>(url, body, opts).pipe(
      map((res) => ComputeService.handleComputeResponse(res.jobInfo)),
      catchError(handleError('Add Report', errorRes))
    )
  }

  compute(config: ComputeConfig): Observable<ComputeResult> {
    const errorRes: ComputeResult = { outputIDs: [] }
    const body = ComputeService.toComputeRequest(config)
    const opts = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    }
    console.log('Api.Compute', JSON.stringify(body, null, 2))
    return this.http
      .post(COMPUTE_SYNC_URL, body, opts)
      .pipe(
        map(ComputeService.handleComputeResponse),
        catchError(handleError('Compute', errorRes))
      )
  }

  static handleComputeResponse(res: ComputeResponseBase): ComputeResult {
    const error = ComputeService.getComputeResponseError(res)
    if (error) {
      return { outputIDs: [], error }
    }
    return { outputIDs: res.dataframes }
  }

  static getComputeResponseError(res: ComputeResponseBase): Error | null {
    // a compute call is considered a success if:
    // - the status is 'Success'
    // - there is no value for stderr
    // - stdout is an empty string OR
    //   stdout does not contain 'Error' or 'Exception
    // - the compute call generated at least 1 dataframe
    if (
      res.status === COMPUTE_SUCCESS_STATUS &&
      !res.stderr &&
      res.stdout !== undefined &&
      (res.stdout.length === 0 ||
        (res.stdout.length > 0 &&
          !res.stdout.toLowerCase().includes('error') &&
          !res.stdout.toLowerCase().includes('exception')))
    ) {
      if (res.dataframes && res.dataframes.length === 0) {
        return errorPayload('Script had zero output dataframes.')
      } else {
        return null
      }
    }
    if (res.stderr !== undefined && res.stderr.length > 0) {
      return errorPayload(COMPUTE_SERVICE_FAILED, [res.stderr])
    } else if (
      res.stdout !== undefined &&
      (res.stdout.toLowerCase().includes('error') ||
        res.stdout.toLowerCase().includes('exception'))
    ) {
      return errorPayload(COMPUTE_SERVICE_FAILED, [res.stdout])
    } else {
      return errorPayload(COMPUTE_SERVICE_FAILED, [res.status])
    }
  }

  static toComputeRequest(config: ComputeConfig): ComputeRequest {
    const cfg = { ...COMPUTE_CONFIG_DEFAULT, ...config }
    return {
      user: cfg.username,
      scriptId: cfg.scriptID,
      parameters: ComputeService.toComputeRequestParams(cfg.options),
      dataframes: cfg.inputIDs,
      dataframeType: toExternalDataframeType(cfg.outputType!),
      computeContainer: cfg.computeContainer!,
      environment: cfg.environment!,
    }
  }

  static toComputeRequestParams(
    options: KVPList = []
  ): ComputeRequestParameter[] {
    return options.map((o) => {
      return {
        key: o.name,
        value: [o.value],
        type: 'string',
      } as ComputeRequestParameter
    })
  }

  static toAddReportRequest(config: ComputeConfig): AddReportRequest {
    return {
      parameters: ComputeService.toComputeRequestParams(config.options),
      dataframeIds: config.inputIDs,
    }
  }
}
