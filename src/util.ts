import * as fs from 'fs'
import * as path from 'path'

const JSON_EXT = '.json'

export function writeJson(filePath: string, value: object): void
export function writeJson(
  filePath: string,
  fileName: string,
  value: object
): void
export function writeJson(
  filePath: string,
  valueOrFileName: object | string,
  value?: object
): void {
  let _path =
    value != null ? path.join(filePath, valueOrFileName as string) : filePath
  if (_path.lastIndexOf(JSON_EXT) !== _path.length - JSON_EXT.length) {
    _path += JSON_EXT
  }
  const _value = value ? value : valueOrFileName
  fs.writeFileSync(_path, JSON.stringify(_value, null, 2), 'utf8')
}

export const readJson = (filePath: string): object =>
  JSON.parse(fs.readFileSync(path.resolve(filePath), 'utf8'))

export const padZeroes = (size: number, value: number | string): string => {
  let _value = value.toString()
  while (_value.length < size) {
    _value = '0' + _value
  }
  return _value
}
export const opacity = (percent: number, color: string): string => {
  // Convert percent to range from 0 - 255
  let percent256 = Math.round((percent * 256) / 100)
  percent256 = percent256 < 0 ? 0 : percent256 > 255 ? 255 : percent256
  // Convert to hex string
  const opacityHex = percent256.toString(16)
  // Append, padding left w/ zeroes
  return color + padZeroes(2, opacityHex)
}
