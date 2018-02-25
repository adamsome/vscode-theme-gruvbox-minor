import { Color } from '../models'
import { opacity } from '../util'

export const makeWorkbenchColors = (
  c: (color: Color, lightness?: number) => string,
) => {
  // Background
  const bg = c(Color.BG)
  const bgSoft = c(Color.BG, 1)
  const bgTransparent = opacity(0, c(Color.BG))
  const border = c(Color.BG, 1)
  // Foreground
  const fg = c(Color.FG, 1)
  const fgHint = c(Color.BG, 3)
  // Highlighting
  const highlight = c(Color.Aqua)
  const highlightHard = c(Color.Aqua, 1)
  // Notifications
  const info = c(Color.Blue, 1)
  const infoSoft = c(Color.Blue)
  const error = c(Color.Red, 1)
  const errorSoft = c(Color.Red)
  const warn = c(Color.Yellow, 1)
  const warnSoft = c(Color.Yellow)
  // Changes
  const added = c(Color.Green, 1)
  const addedSoft = c(Color.Green)
  const deleted = c(Color.Red, 1)
  const deletedSoft = c(Color.Red)
  const modified = c(Color.Blue, 1)
  // General UI
  const primary = c(Color.Blue)
  const accent = c(Color.Purple, 1)
  // Merge
  const mergeCurrent = c(Color.Blue)
  const mergeIncoming = c(Color.Aqua)
  const mergeCommon = c(Color.Gray)

  return {
    // BASE COLORS
    focusBorder: border,
    foreground: fg,
    'widget.shadow': opacity(18.75, bg),
    'selection.background': opacity(50, highlight),
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
    'scrollbarSlider.hoverBackground': fgHint,
    'scrollbarSlider.background': opacity(59.765625, c(Color.BG, 2)),
    // BADGE
    'badge.background': accent,
    'badge.foreground': bg,
    // PROGRESS BAR
    'progressBar.background': highlight,
    // LISTS AND TREES
    'list.activeSelectionBackground': opacity(50, bgSoft),
    'list.activeSelectionForeground': highlightHard,
    'list.hoverBackground': opacity(50, bgSoft),
    'list.hoverForeground': c(Color.FG, 2),
    'list.focusBackground': bgSoft,
    'list.focusForeground': fg,
    'list.inactiveSelectionForeground': highlight,
    'list.inactiveSelectionBackground': bgTransparent,
    'list.dropBackground': bgSoft,
    'list.highlightForeground': highlight,
    // SIDE BAR
    'sideBar.background': bg,
    'sideBar.foreground': c(Color.FG, 2),
    'sideBar.border': border,
    'sideBarTitle.foreground': fg,
    'sideBarSectionHeader.background': bgTransparent,
    'sideBarSectionHeader.foreground': fg,
    // ACTIVITY BAR
    'activityBar.background': bg,
    'activityBar.dropBackground': bg,
    'activityBar.foreground': fg,
    'activityBar.border': border,
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': fg,
    // EDITOR GROUPS
    'editorGroup.background': bgSoft,
    'editorGroup.border': border,
    'editorGroup.dropBackground': opacity(37.5, bgSoft),
    'editorGroup.noTabsBackground': bgSoft,
    'editorGroup.tabsbackground': bgSoft,
    'editorGroup.tabsBorder': opacity(0, c(Color.BG, 1)),
    // TABS
    'tab.border': bgTransparent,
    'tab.activeBorder': bg,
    'tab.activeForeground': fg,
    'tab.inactiveForeground': c(Color.FG, 4),
    'tab.inactiveBackground': opacity(37.5, bgSoft),
    'tab.unfocusedActiveForeground': c(Color.FG, 4),
    'tab.unfocusedActiveBorder': bgTransparent,
    'tab.unfocusedInactiveForeground': c(Color.Gray),
    // EDITOR
    'editor.background': bg,
    'editor.foreground': fg,
    'editorLineNumber.foreground': fgHint,
    'editorCursor.foreground': fg,
    'editor.selectionBackground': opacity(25, highlight),
    'editor.selectionHighlightBackground': opacity(25, c(Color.Yellow, 1)),
    'editor.hoverHighlightBackground': opacity(31.25, highlight),
    'editorLink.activeForeground': fg,
    'editor.findMatchBackground': opacity(43.75, c(Color.Blue, 1)),
    'editor.findMatchHighlightBackground': opacity(18.75, c(Color.Orange, 1)),
    'editor.findRangeHighlightBackground': opacity(43.75, c(Color.Blue, 1)),
    'editor.lineHighlightBackground': opacity(37.5, bgSoft),
    'editor.lineHighlightBorder': opacity(0, bgSoft),
    'editorWhitespace.foreground': opacity(12.5, c(Color.FG, 4)),
    'editorIndentGuide.background': opacity(12.5, c(Color.FG, 4)),
    'editorRuler.foreground': opacity(25, c(Color.FG, 4)),
    'editorCodeLens.foreground': opacity(56.25, c(Color.FG, 4)),
    'editorBracketMatch.border': bgTransparent,
    'editorBracketMatch.background': opacity(50, c(Color.Gray)),
    'editorHoverWidget.background': bg,
    'editorHoverWidget.border': border,
    'editorOverviewRuler.border': bgTransparent,
    'editorOverviewRuler.findMatchForeground': c(Color.FG, 3),
    'editorOverviewRuler.rangeHighlightForeground': c(Color.FG, 3),
    'editorOverviewRuler.selectionHighlightForeground': fgHint,
    'editorOverviewRuler.wordHighlightForeground': fgHint,
    'editorOverviewRuler.wordHighlightStrongForeground': fgHint,
    'editorOverviewRuler.modifiedForeground': modified,
    'editorOverviewRuler.addedForeground': modified,
    'editorOverviewRuler.deletedForeground': modified,
    'editorOverviewRuler.errorForeground': error,
    'editorOverviewRuler.warningForeground': warnSoft,
    'editorOverviewRuler.infoForeground': accent,
    'editorGutter.background': bgTransparent,
    'editorGutter.modifiedBackground': modified,
    'editorGutter.addedBackground': added,
    'editorGutter.deletedBackground': deleted,
    'editorError.foreground': errorSoft,
    'editorWarning.foreground': warnSoft,
    'editorInfo.foreground': infoSoft,
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
    'peekViewEditor.matchHighlightBackground': '',
    'peekViewResult.background': opacity(31.25, bgSoft),
    'peekViewResult.fileForeground': fg,
    'peekViewResult.matchHighlightBackground': opacity(18.75, highlightHard),
    'peekViewResult.selectionBackground': opacity(18.75, highlightHard),
    'peekViewResult.selectionForeground': opacity(18.75, highlightHard),
    'peekViewTitle.background': opacity(31.25, bgSoft),
    'peekViewTitleDescription.foreground': c(Color.FG, 3),
    'peekViewTitleLabel.foreground': fg,
    // MERGE CONFLICTS
    'merge.currentHeaderBackground': opacity(25, mergeCurrent),
    'merge.currentContentBackground': opacity(12.5, mergeCurrent),
    'merge.incomingHeaderBackground': opacity(25, mergeIncoming),
    'merge.incomingContentBackground': opacity(12.5, mergeIncoming),
    'merge.border': bgTransparent,
    'editorOverviewRuler.currentContentForeground': mergeCurrent,
    'editorOverviewRuler.incomingContentForeground': mergeIncoming,
    'editorOverviewRuler.commonContentForeground': mergeCommon,
    // PANELS
    'panel.border': bgTransparent,
    'panelTitle.activeForeground': fg,
    // STATUS BAR
    'statusBar.background': bg,
    'statusBar.foreground': fg,
    'statusBar.debuggingBackground': c(Color.Orange, 1),
    'statusBar.debuggingForeground': bg,
    'statusBar.debuggingBorder': bgTransparent,
    'statusBar.noFolderBackground': bg,
    'statusBar.noFolderBorder': bgTransparent,
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
    'gitDecoration.modifiedResourceForeground': c(Color.Yellow),
    'gitDecoration.deletedResourceForeground': deletedSoft,
    'gitDecoration.untrackedResourceForeground': addedSoft,
    'gitDecoration.ignoredResourceForeground': c(Color.BG, 4),
    'gitDecoration.conflictingResourceForeground': c(Color.Purple),
    // NOTIFICATION
    'notification.background': bg,
    'notification.foreground': fg,
    'notification.buttonBackground': fgHint,
    'notification.buttonHoverBackground': opacity(31.25, fgHint),
    'notification.buttonForeground': fg,
    'notification.infoBackground': info,
    'notification.infoForeground': bg,
    'notification.warningBackground': warn,
    'notification.warningForeground': bg,
    'notification.errorBackground': error,
    'notification.errorForeground': bg,
    // EXTENSIONS
    'extensionButton.prominentBackground': opacity(50, c(Color.Green, 1)),
    'extensionButton.prominentHoverBackground': opacity(
      18.75,
      c(Color.Green, 1),
    ),
    // OTHERS
    'textLink.foreground': c(Color.Blue, 1),
    'textLink.activeForeground': c(Color.Blue),
    'debugToolBar.background': bg,
  }
}
