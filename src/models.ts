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
  // TODO: Sticky Scroll (currently no border available, temp use custom bg)
  BG2 = 'bg2',
}

export interface WorkbenchColors {
  [selector: string]: string
}

export type FontStyle = 'bold' | 'italic' | 'underline'

export interface TokenSettings {
  foreground?: string
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
  semanticHighlighting: boolean
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
