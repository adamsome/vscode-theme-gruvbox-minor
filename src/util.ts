import * as fs from 'fs'
import * as path from 'path'

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

export const opacity = (percent: number, color: string) => {
  // Convert percent to range from 0 - 255
  let percent256 = Math.round(percent * 256 / 100)
  percent256 = percent256 < 0 ? 0 : percent256 > 255 ? 255 : percent256
  // Convert to hex string
  const opacityHex = percent256.toString(16)
  // Append, padding left w/ zeroes
  return color + padZeroes(2, opacityHex)
}

export const padZeroes = (size: number, value: number | string) => {
  let _value = value.toString()
  while (_value.length < size) {
    _value = '0' + _value
  }
  return _value
}
