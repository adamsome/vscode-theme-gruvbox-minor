import * as fs from 'fs'
import * as path from 'path'
import { clamp, curry } from 'ramda'

const JSON_EXT = '.json'

export function writeJson(filePath: string, value: any): void
export function writeJson(filePath: string, fileName: string, value: any): void
export function writeJson(filePath: string, valueOrFileName: any, value?: any) {
  let _path = value ? path.join(filePath, valueOrFileName) : filePath
  if (_path.lastIndexOf(JSON_EXT) !== _path.length - JSON_EXT.length) {
    _path += JSON_EXT
  }
  const _value = value ? value : valueOrFileName
  fs.writeFileSync(_path, JSON.stringify(_value, null, 2), 'utf8')
}

export const readJson = (filePath: string): any =>
  JSON.parse(fs.readFileSync(path.resolve(filePath), 'utf8'))

export const opacity: {
  (percent: number, color: string): string
  (percent: number): (color: string) => string
} = curry((percent: number, color: string) => {
  // Convert percent to range from 0 - 255
  const percent256 = clamp(0, 255, Math.round(percent * 256 / 100))
  const opacityHex = percent256.toString(16)
  return color + padZeroes(2, opacityHex)
})

export const padZeroes: {
  (size: number, value: number | string): string
  (size: number): (value: number | string) => string
} = curry((size: number, value: number | string) => {
  let _value = value.toString()
  while (_value.length < size) {
    _value = '0' + _value
  }
  return _value
})
