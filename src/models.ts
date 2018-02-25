export enum Type {
  Dark = 'dark',
  Light = 'light',
}
export enum Subtype {
  Hard = 'hard',
  Medium = 'medium',
  Soft = 'soft',
}
export enum Color {
  BG = 'bg',
  FG = 'fg',
  Gray = 'gray',
  Red = 'red',
  Green = 'green',
  Yellow = 'yellow',
  Blue = 'blue',
  Purple = 'purple',
  Aqua = 'aqua',
  Orange = 'orange',
}

export interface WorkbenchColors {
  [selector: string]: string
}

export type FontStyle = 'normal' | 'bold' | 'italic' | 'underline'

export interface TokenSettings {
  foreground?: string
  background?: string
  fontStyle?: FontStyle
}

export interface TokenColor {
  name?: string
  scope?: string | string[]
  settings: TokenSettings
}

export interface Theme {
  name: string
  type: Type
  colors: WorkbenchColors
  tokenColors: TokenColor[]
}

export enum UITheme {
  Dark = 'vs-dark',
  Light = 'vs',
}

export interface ThemeDef {
  label: string
  uiTheme: UITheme
  path: string
  make?: boolean
  subtype?: Subtype
}

export interface PackageDef {
  contributes?: {
    themes?: ThemeDef[]
  }
}
