import { makeColors } from './colors'
import { Color, PackageDef, Subtype, Theme, Type, UITheme } from './models'
import TokensConfig from './tokens'
import { readJson, writeJson } from './util'
import WorkbenchConfig from './workbench'

console.log('Reading theme definitions from package.json')

const pkg: PackageDef = readJson('./package.json')
if (pkg && pkg.contributes && pkg.contributes.themes) {
  const themesToMake = pkg.contributes.themes.filter((t) => t.make === true)
  if (!themesToMake.length) {
    console.warn('No themes defined to make in package.json.')
  }
  themesToMake.map((t) => {
    console.log(`Writing ${t.label} to '${t.path}'`)
    const type = t.uiTheme === UITheme.Light ? Type.Light : Type.Dark
    const colorBuilder = makeColors(type, t.subtype || Subtype.Medium)
    const colors = WorkbenchConfig(colorBuilder)
    const tokenColors = TokensConfig(colorBuilder)
    const theme: Theme = { name: t.label, type, colors, tokenColors }

    // Exceptions to the Light is the inverse of Dark rule
    if (type === Type.Light) {
      // Invert the activity badge text (FG1 to BG1)
      theme.colors['activityBarBadge.foreground'] = colorBuilder(Color.BG, 1)
      // Remove inactive tab background opacity
      theme.colors['tab.inactiveBackground'] = colorBuilder(Color.BG, 1)
    }

    writeJson(t.path, theme)
  })
} else {
  console.error('Could not find themes in package.json to make.')
}
