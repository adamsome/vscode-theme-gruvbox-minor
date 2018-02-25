import { Color } from '../models'
import { opacity } from '../util'

export const makeWorkbenchColors = (
  c: (color: Color, lightness?: number) => string,
) => {
  // Background
  const bg = c(Color.BG)
  const bgSoft = c(Color.BG, 1)
  const transparent = opacity(0, c(Color.BG))
  const border = c(Color.BG, 1)
  // Foreground
  const fg = c(Color.Gray)
  const fgHint = c(Color.BG, 2)
  const fgSubtle = c(Color.BG, 3)
  // General UI
  const primary = c(Color.Yellow, 1)
  const highlight = c(Color.Yellow)
  const highlightHard = c(Color.Yellow, 1)
  const selection = opacity(25, c(Color.Aqua))
  const findMatch = c(Color.Purple, 1)
  const word = c(Color.Blue, 1)
  const cursor = primary
  // Notifications
  const info = c(Color.Yellow, 1)
  const infoSoft = c(Color.Yellow)
  const error = c(Color.Red, 1)
  const errorSoft = c(Color.Red)
  const warn = c(Color.Orange, 1)
  const warnSoft = c(Color.Orange)
  // Changes
  const added = c(Color.Green, 1)
  const addedSoft = c(Color.Green)
  const deleted = c(Color.Red, 1)
  const deletedSoft = c(Color.Red)
  const modified = c(Color.Yellow, 1)
  // Merge
  const mergeCurrent = c(Color.Blue)
  const mergeIncoming = c(Color.Aqua)
  const mergeCommon = c(Color.Gray)

  return {
    // BASE COLORS
    focusBorder: border,
    foreground: fg,
    'widget.shadow': opacity(18.75, bg),
    'selection.background': selection,
    errorForeground: error,
    // BUTTON
    'button.background': opacity(50, primary),
    'button.foreground': fg,
    'button.hoverBackground': opacity(37.5, primary),
    // DROPDOWN
    'dropdown.background': bg,
    'dropdown.border': border,
    'dropdown.foreground': fg,
    // INPUT
    'input.background': opacity(1.953125, fg),
    'input.border': border,
    'input.foreground': fg,
    'input.placeholderForeground': opacity(37.5, fg),
    'inputValidation.errorBorder': error,
    'inputValidation.errorBackground': opacity(50, errorSoft),
    'inputValidation.infoBorder': info,
    'inputValidation.infoBackground': opacity(50, infoSoft),
    'inputValidation.warningBorder': warn,
    'inputValidation.warningBackground': opacity(50, warnSoft),
    // SCROLL BAR
    'scrollbar.shadow': bg,
    'scrollbarSlider.activeBackground': highlight,
    'scrollbarSlider.hoverBackground': fgSubtle,
    'scrollbarSlider.background': opacity(59.765625, c(Color.BG, 2)),
    // BADGE
    'badge.background': primary,
    'badge.foreground': bg,
    // PROGRESS BAR
    'progressBar.background': highlight,
    // LISTS AND TREES
    'list.activeSelectionBackground': opacity(50, bgSoft),
    'list.activeSelectionForeground': highlightHard,
    'list.hoverBackground': opacity(50, bgSoft),
    'list.hoverForeground': fg,
    'list.focusBackground': bgSoft,
    'list.focusForeground': fg,
    'list.inactiveSelectionForeground': highlight,
    'list.inactiveSelectionBackground': transparent,
    'list.dropBackground': bgSoft,
    'list.highlightForeground': highlight,
    // SIDE BAR
    'sideBar.background': bg,
    'sideBar.foreground': fg,
    'sideBar.border': transparent,
    'sideBarTitle.foreground': fg,
    'sideBarSectionHeader.background': transparent,
    'sideBarSectionHeader.foreground': fg,
    // ACTIVITY BAR
    'activityBar.background': bg,
    'activityBar.dropBackground': bg,
    'activityBar.foreground': fg,
    'activityBar.border': transparent,
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': bg,
    // EDITOR GROUPS
    'editorGroup.background': bgSoft,
    'editorGroup.border': transparent,
    'editorGroup.dropBackground': opacity(37.5, bgSoft),
    'editorGroup.noTabsBackground': bgSoft,
    'editorGroup.tabsbackground': bgSoft,
    'editorGroup.tabsBorder': opacity(0, c(Color.BG, 1)),
    // TABS
    'tab.border': transparent,
    'tab.activeBorder': bg,
    'tab.activeForeground': fg,
    'tab.inactiveForeground': fgSubtle,
    'tab.inactiveBackground': opacity(37.5, bgSoft),
    'tab.unfocusedActiveForeground': fgSubtle,
    'tab.unfocusedActiveBorder': transparent,
    'tab.unfocusedInactiveForeground': fgHint,
    // EDITOR
    'editor.background': bg,
    'editor.foreground': fg,
    'editorLineNumber.foreground': fgHint,
    'editorCursor.foreground': cursor,
    'editorCursor.background': bg,
    'editor.selectionBackground': selection,
    'editor.selectionHighlightBackground': opacity(15, fg),
    'editor.wordHighlightBackground': opacity(20, word),
    'editor.wordHighlightStrongBackground': opacity(50, word),
    'editor.hoverHighlightBackground': opacity(31.25, c(Color.Aqua)),
    'editor.findMatchBackground': opacity(50, findMatch),
    'editor.findMatchHighlightBackground': opacity(30, findMatch),
    'editor.findRangeHighlightBackground': opacity(15, findMatch),
    'editor.lineHighlightBackground': opacity(37.5, bgSoft),
    'editor.lineHighlightBorder': opacity(0, bgSoft),
    'editorWhitespace.foreground': opacity(12.5, fgSubtle),
    'editorIndentGuide.background': opacity(12.5, fgHint),
    'editorRuler.foreground': opacity(12.5, fgHint),
    'editorCodeLens.foreground': opacity(56.25, fgSubtle),
    'editorBracketMatch.border': transparent,
    'editorBracketMatch.background': opacity(50, c(Color.Gray)),
    'editorHoverWidget.background': opacity(80, bgSoft),
    'editorHoverWidget.border': border,
    'editorOverviewRuler.border': transparent,
    'editorOverviewRuler.findMatchForeground': opacity(30, findMatch),
    'editorOverviewRuler.rangeHighlightForeground': opacity(15, findMatch),
    'editorOverviewRuler.selectionHighlightForeground': fgHint,
    'editorOverviewRuler.wordHighlightForeground': opacity(40, word),
    'editorOverviewRuler.wordHighlightStrongForeground': opacity(60, word),
    'editorOverviewRuler.modifiedForeground': modified,
    'editorOverviewRuler.addedForeground': modified,
    'editorOverviewRuler.deletedForeground': modified,
    'editorOverviewRuler.errorForeground': error,
    'editorOverviewRuler.warningForeground': warnSoft,
    'editorOverviewRuler.infoForeground': c(Color.Aqua, 1),
    'editorGutter.background': transparent,
    'editorGutter.modifiedBackground': modified,
    'editorGutter.addedBackground': added,
    'editorGutter.deletedBackground': deleted,
    'editorError.foreground': errorSoft,
    'editorWarning.foreground': warnSoft,
    'editorInfo.foreground': infoSoft,
    'editorLink.activeForeground': fg,
    // DIFF EDITOR
    'diffEditor.insertedTextBackground': opacity(18.75, added),
    'diffEditor.insertedTextBorder': opacity(0, addedSoft),
    'diffEditor.removedTextBackground': opacity(18.75, deleted),
    'diffEditor.removedTextBorder': opacity(0, deletedSoft),
    // WIDGET
    'editorWidget.background': bg,
    'editorWidget.border': border,
    'editorSuggestWidget.background': bg,
    'editorSuggestWidget.foreground': fg,
    'editorSuggestWidget.highlightForeground': highlight,
    'editorSuggestWidget.selectedBackground': opacity(37.5, bgSoft),
    'editorSuggestWidget.border': border,
    // PEEK VIEW
    'peekView.border': border,
    'peekViewEditor.background': opacity(31.25, bgSoft),
    'peekViewEditorGutter.background': opacity(31.25, bgSoft),
    'peekViewResult.background': opacity(31.25, bgSoft),
    'peekViewResult.fileForeground': fg,
    'peekViewResult.matchHighlightBackground': opacity(18.75, highlightHard),
    'peekViewResult.selectionBackground': opacity(18.75, highlightHard),
    'peekViewResult.selectionForeground': opacity(18.75, highlightHard),
    'peekViewTitle.background': opacity(31.25, bgSoft),
    'peekViewTitleDescription.foreground': fgSubtle,
    'peekViewTitleLabel.foreground': fg,
    // MERGE CONFLICTS
    'merge.currentHeaderBackground': opacity(25, mergeCurrent),
    'merge.currentContentBackground': opacity(12.5, mergeCurrent),
    'merge.incomingHeaderBackground': opacity(25, mergeIncoming),
    'merge.incomingContentBackground': opacity(12.5, mergeIncoming),
    'merge.border': transparent,
    'editorOverviewRuler.currentContentForeground': mergeCurrent,
    'editorOverviewRuler.incomingContentForeground': mergeIncoming,
    'editorOverviewRuler.commonContentForeground': mergeCommon,
    // PANELS
    'panel.border': transparent,
    'panelTitle.activeForeground': fg,
    // STATUS BAR
    'statusBar.background': bg,
    'statusBar.foreground': fg,
    'statusBar.debuggingBackground': c(Color.Yellow, 1),
    'statusBar.debuggingForeground': bg,
    'statusBar.debuggingBorder': transparent,
    'statusBar.noFolderBackground': bg,
    'statusBar.noFolderBorder': transparent,
    'statusBar.prominentBackground': highlight,
    'statusBar.prominentHoverBackground': opacity(43.75, highlight),
    // INTEGRATED TERMINAL
    'terminal.ansiBlack': c(Color.BG, 1),
    'terminal.ansiBrightBlack': c(Color.Gray),
    'terminal.ansiRed': c(Color.Red),
    'terminal.ansiBrightRed': c(Color.Red, 1),
    'terminal.ansiGreen': c(Color.Green),
    'terminal.ansiBrightGreen': c(Color.Green, 1),
    'terminal.ansiYellow': c(Color.Yellow),
    'terminal.ansiBrightYellow': c(Color.Yellow, 1),
    'terminal.ansiBlue': c(Color.Blue),
    'terminal.ansiBrightBlue': c(Color.Blue, 1),
    'terminal.ansiMagenta': c(Color.Purple),
    'terminal.ansiBrightMagenta': c(Color.Purple, 1),
    'terminal.ansiCyan': c(Color.Aqua),
    'terminal.ansiBrightCyan': c(Color.Aqua, 1),
    'terminal.ansiWhite': c(Color.FG, 4),
    'terminal.ansiBrightWhite': c(Color.FG, 1),
    'terminal.foreground': fg,
    'terminal.background': bg,
    // TITLE BAR macOS (not tested)
    'titleBar.activeBackground': bg,
    'titleBar.activeForeground': fg,
    'titleBar.inactiveBackground': bg,
    // GIT COLORS
    'gitDecoration.modifiedResourceForeground': c(Color.Blue),
    'gitDecoration.deletedResourceForeground': deletedSoft,
    'gitDecoration.untrackedResourceForeground': addedSoft,
    'gitDecoration.ignoredResourceForeground': fgHint,
    'gitDecoration.conflictingResourceForeground': c(Color.Purple),
    // NOTIFICATION
    'notification.background': bg,
    'notification.foreground': fg,
    'notification.buttonBackground': fgSubtle,
    'notification.buttonHoverBackground': opacity(31.25, fgSubtle),
    'notification.buttonForeground': fg,
    'notification.infoBackground': info,
    'notification.infoForeground': bg,
    'notification.warningBackground': warn,
    'notification.warningForeground': bg,
    'notification.errorBackground': error,
    'notification.errorForeground': bg,
    // EXTENSIONS
    'extensionButton.prominentForeground': bg,
    'extensionButton.prominentBackground': opacity(100, primary),
    'extensionButton.prominentHoverBackground': opacity(75, primary),
    // OTHERS
    'textLink.foreground': c(Color.Blue, 1),
    'textLink.activeForeground': c(Color.Blue),
    'debugToolBar.background': bg,
  }
}
