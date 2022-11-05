/* eslint-disable @typescript-eslint/camelcase */
import { Color, Subtype, Type } from './models'

// prettier-ignore
export const NAMED = {
  dark0_hard     : '#1d2021', // 234, 29-32-33
  dark0          : '#282828', // 235, 40-40-40
  dark0_soft     : '#32302f', // 236, 50-48-47
  dark1          : '#3c3836', // 237, 60-56-54
  dark2          : '#504945', // 239, 80-73-69
  dark3          : '#665c54', // 241, 102-92-84
  dark4          : '#7c6f64', // 243, 124-111-100
  dark4_256      : '#7c6f64', // 243, 124-111-100
  gray_245       : '#928374', // 245, 146-131-116
  gray_244       : '#928374', // 244, 146-131-116
  light0_hard    : '#f9f5d7', // 230, 249-245-215
  light0         : '#fbf1c7', // 229, 253-244-193
  light0_soft    : '#f2e5bc', // 228, 242-229-188
  light1         : '#ebdbb2', // 223, 235-219-178
  light2         : '#d5c4a1', // 250, 213-196-161
  light3         : '#bdae93', // 248, 189-174-147
  light4         : '#a89984', // 246, 168-153-132
  light4_256     : '#a89984', // 246, 168-153-132
  bright_red     : '#fb4934', // 167, 251-73-52
  bright_green   : '#b8bb26', // 142, 184-187-38
  bright_yellow  : '#fabd2f', // 214, 250-189-47
  bright_blue    : '#83a598', // 109, 131-165-152
  bright_purple  : '#d3869b', // 175, 211-134-155
  bright_aqua    : '#8ec07c', // 108, 142-192-124
  bright_orange  : '#fe8019', // 208, 254-128-25
  neutral_red    : '#cc241d', // 124, 204-36-29
  neutral_green  : '#98971a', // 106, 152-151-26
  neutral_yellow : '#d79921', // 172, 215-153-33
  neutral_blue   : '#458588', // 66,  69-133-136
  neutral_purple : '#b16286', // 132, 177-98-134
  neutral_aqua   : '#689d6a', // 72,  104-157-106
  neutral_orange : '#d65d0e', // 166, 214-93-14
  faded_red      : '#9d0006', // 88,  157-0-6
  faded_green    : '#79740e', // 100, 121-116-14
  faded_yellow   : '#b57614', // 136, 181-118-20
  faded_blue     : '#076678', // 24,  7-102-120
  faded_purple   : '#8f3f71', // 96,  143-63-113
  faded_aqua     : '#427b58', // 66,  66-123-88
  faded_orange   : '#af3a03', // 130, 175-58-3
}

const getBG0 = (type: Type, subtype: Subtype): string => {
  switch (type) {
    case Type.Light: {
      switch (subtype) {
        case Subtype.Hard:
          return NAMED.light0_hard
        case Subtype.Soft:
          return NAMED.light0_soft
        case Subtype.Medium:
        default:
          return NAMED.light0
      }
    }
    case Type.Dark:
    default: {
      switch (subtype) {
        case Subtype.Hard:
          return NAMED.dark0_hard
        case Subtype.Soft:
          return NAMED.dark0_soft
        case Subtype.Medium:
        default:
          return NAMED.dark0
      }
    }
  }
}
const getDark = (subtype: Subtype): Record<Color, string[]> => ({
  bg: [
    getBG0(Type.Dark, subtype),
    NAMED.dark1,
    NAMED.dark2,
    NAMED.dark3,
    NAMED.dark4,
  ],
  fg: [NAMED.light0, NAMED.light1, NAMED.light2, NAMED.light3, NAMED.light4],
  gray: [NAMED.gray_244],
  red: [NAMED.neutral_red, NAMED.bright_red],
  green: [NAMED.neutral_green, NAMED.bright_green],
  yellow: [NAMED.neutral_yellow, NAMED.bright_yellow],
  blue: [NAMED.neutral_blue, NAMED.bright_blue],
  purple: [NAMED.neutral_purple, NAMED.bright_purple],
  aqua: [NAMED.neutral_aqua, NAMED.bright_aqua],
  orange: [NAMED.neutral_orange, NAMED.bright_orange],
  bg2:
    subtype === Subtype.Soft
      ? [NAMED.dark1, NAMED.dark2]
      : [NAMED.dark0_soft, NAMED.dark1],
})

const getLight = (subtype: Subtype): Record<Color, string[]> => ({
  bg: [
    getBG0(Type.Light, subtype),
    NAMED.light1,
    NAMED.light2,
    NAMED.light3,
    NAMED.light4,
  ],
  fg: [NAMED.dark0, NAMED.dark1, NAMED.dark2, NAMED.dark3, NAMED.dark4],
  gray: [NAMED.gray_244],
  red: [NAMED.neutral_red, NAMED.faded_red],
  green: [NAMED.neutral_green, NAMED.faded_green],
  yellow: [NAMED.neutral_yellow, NAMED.faded_yellow],
  blue: [NAMED.neutral_blue, NAMED.faded_blue],
  purple: [NAMED.neutral_purple, NAMED.faded_purple],
  aqua: [NAMED.neutral_aqua, NAMED.faded_aqua],
  orange: [NAMED.neutral_orange, NAMED.faded_orange],
  bg2:
    subtype === Subtype.Soft
      ? [NAMED.light1, NAMED.light2]
      : [NAMED.light0_soft, NAMED.light1],
})

export const MAP: Record<Type, Record<Subtype, Record<Color, string[]>>> = {
  dark: {
    hard: getDark(Subtype.Hard),
    medium: getDark(Subtype.Medium),
    soft: getDark(Subtype.Soft),
  },
  light: {
    hard: getLight(Subtype.Hard),
    medium: getLight(Subtype.Medium),
    soft: getLight(Subtype.Soft),
  },
}
export const makeColors = (type: Type, subtype: Subtype) => (
  color: Color,
  lightness?: number
): string => {
  const c = MAP[type][subtype][color]
  return lightness === undefined || lightness < 0
    ? c[0]
    : lightness >= c.length
    ? c[c.length - 1]
    : c[lightness]
}
