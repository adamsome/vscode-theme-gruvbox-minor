import { makeColors } from './colors'
import { Color, PackageDef, Subtype, Theme, Type, UITheme } from './models'
import { readJson, writeJson } from './util'

import { makeTokenColors } from './theme/tokens'
import { makeWorkbenchColors } from './theme/workbench'

console.log('Reading theme definitions from package.json')

const pkg: PackageDef = readJson('./package.json')
if (pkg && pkg.contributes && pkg.contributes.themes) {
  const themesToMake = pkg.contributes.themes.filter(t => t.make === true)
  if (!themesToMake.length) {
    console.warn('No themes defined to make in package.json.')
  }
  themesToMake.map(t => {
    console.log(`Writing ${t.label} to \`${t.path}\``)
    const type = t.uiTheme === UITheme.Light ? Type.Light : Type.Dark
    const c = makeColors(type, t.subtype || Subtype.Medium)
    const colors = makeWorkbenchColors(c)
    const tokenColors = makeTokenColors(c)
    const theme: Theme = { name: t.label, type, tokenColors, colors }

    // Exceptions to the Light is the inverse of Dark rule
    if (type === Type.Light) {
      // Invert the activity badge text (FG1 to BG1)
      theme.colors['activityBarBadge.foreground'] = c(Color.BG, 1)
      // Remove inactive tab background opacity
      theme.colors['tab.inactiveBackground'] = c(Color.BG, 1)
    }

    writeJson(t.path, theme)
  })
} else {
  console.error('Could not find themes in package.json to make.')
}
