import { makeColors as makeColor } from './colors'
import { Color, Subtype, Type } from './models'

type ColorMaker = (color: Color, lightness?: number) => string
interface NotifyColors {
  info: Color
  note: Color
  warn: Color
  error: Color
  highlight: Color
}

export const setTransparent = (color: string) => color + '00'
export const opacify = (opacity: string, color: string) => color + opacity

export const makeFunctionalColors = (type: Type, subtype: Subtype) => {
  const c = makeColor(type, subtype)

  // Add backgrouknd and foreground
  const core = {
    fg: c(Color.FG, 1),
    bg: c(Color.BG),
    border: c(Color.BG, 1),
  }

  // Add colors
  const color = makeBasicColors(c)

  // Add notifier colors
  const notifyColors: NotifyColors = {
    info: Color.Purple,
    note: Color.Blue,
    warn: Color.Yellow,
    error: Color.Red,
    highlight: Color.Aqua,
  }
  const notify = Object.keys(notifyColors).reduce(
    (obj, key: keyof NotifyColors) => ({
      ...obj,
      [key]: color.lit[notifyColors[key]],
    }),
    {} as Record<keyof NotifyColors, string>,
  )
  const notifySoft = Object.keys(notifyColors).reduce(
    (obj, key: keyof NotifyColors) => ({
      ...obj,
      [key]: color[notifyColors[key]],
    }),
    {} as Record<keyof NotifyColors, string>,
  )

  // Add modified colors
  const softBG = c(Color.BG, 1)
  const transparent = {
    bg: setTransparent(core.bg),
    soft: { bg: setTransparent(softBG) },
  }
  const translucent = {
    x50: { soft: { bg: opacify('80', softBG) } },
    x62: { soft: { bg: opacify('60', softBG) } },
    x69: { soft: { bg: opacify('80', softBG) } },
  }
  const soft = {
    bg: softBG,
    fg: c(Color.FG, 2),
    notify: notifySoft,
  }
  const softer = {
    bg: c(Color.BG, 2),
    fg: c(Color.FG, 4),
    notify: {
      note: opacify('30', color[notify.note]),
      highlight: opacify('30', color[notify.highlight]),
    },
  }
  const softest = {
    fg: c(Color.Gray),
  }
  const hint = {
    fg: c(Color.BG, 3),
  }
  return {
    ...core,
    color,
    notify,
    transparent,
    translucent,
    soft,
    softer,
    softest,
    hint,
  }
}

const makeBasicColors = (c: ColorMaker) => {
  const basicColors: any = {
    red: c(Color.Red),
    green: c(Color.Green),
    yellow: c(Color.Yellow),
    blue: c(Color.Blue),
    purple: c(Color.Purple),
    aqua: c(Color.Aqua),
    orange: c(Color.Orange),
  }
  return {
    ...basicColors,
    white: c(Color.FG, 4),
    black: c(Color.BG, 1),
    lit: {
      white: c(Color.FG, 1),
      black: c(Color.Gray),
      // Add lit versions of colors
      ...Object.keys(basicColors).reduce(
        (lit: any, name: Color) => ({
          ...lit,
          [name]: c(name, 1),
        }),
        {},
      ),
    },
  }
}
