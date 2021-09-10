import { Color, WorkbenchColors } from './models'
import { opacity } from './util'

export default (
  c: (color: Color, lightness?: number) => string
): WorkbenchColors => {
  // Background
  const bg = c(Color.BG)
  const bgSoft = c(Color.BG, 1)
  const bgSofter = c(Color.BG, 2)
  const transparent = opacity(0, c(Color.BG))
  // Foreground
  const fg = c(Color.Gray)
  const fgHard = c(Color.FG, 3)
  const fgHint = c(Color.BG, 2)
  const fgSubtle = c(Color.BG, 3)
  // Border
  const border = c(Color.BG, 1)
  const borderSubtle = opacity(30, fgHint)
  const borderHint = opacity(20, fgHint)
  // General UI
  const primary = c(Color.Yellow, 1)
  const highlight = c(Color.Yellow)
  const highlightHard = c(Color.Yellow, 1)
  const selection = c(Color.Aqua)
  const findMatch = c(Color.Purple, 1)
  const highlightWordSoft = c(Color.Blue)
  const highlightWord = c(Color.Blue, 1)
  const cursor = primary
  const links = c(Color.Blue, 1)
  const linksSoft = c(Color.Blue)
  // Notifications
  const info = c(Color.Yellow, 1)
  const infoSoft = c(Color.Yellow)
  const error = c(Color.Red, 1)
  const errorSoft = c(Color.Red)
  const warn = c(Color.Orange, 1)
  const warnSoft = c(Color.Orange)
  // Changes
  const changed = c(Color.Yellow, 1)
  const added = c(Color.Green, 1)
  const addedSoft = c(Color.Green)
  const deleted = c(Color.Red, 1)
  const deletedSoft = c(Color.Red)
  const modified = c(Color.Blue)
  const conflicted = c(Color.Purple)
  // Merge
  const mergeCurrent = c(Color.Blue)
  const mergeIncoming = c(Color.Aqua)
  const mergeCommon = c(Color.Gray)

  return {
    // Base Colors
    focusBorder: border,
    foreground: fg,
    'widget.shadow': opacity(18.75, bg),
    'selection.background': selection,
    errorForeground: error,
    // Buttons
    'button.background': opacity(80, primary),
    'button.foreground': bg,
    'button.hoverBackground': opacity(50, primary),
    // Dropdowns
    'dropdown.background': bg,
    'dropdown.border': border,
    'dropdown.foreground': fg,
    // Inputs
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
    // Scrollbars
    'scrollbar.shadow': bg,
    'scrollbarSlider.activeBackground': highlight,
    'scrollbarSlider.hoverBackground': fgSubtle,
    'scrollbarSlider.background': opacity(59.765625, bgSofter),
    // Badges
    'badge.background': primary,
    'badge.foreground': bg,
    // Progress Bars
    'progressBar.background': highlight,
    // Lists
    'list.activeSelectionBackground': bgSoft,
    'list.activeSelectionForeground': fgHard,
    'list.inactiveSelectionBackground': opacity(50, bgSoft),
    'list.inactiveSelectionForeground': fgHard,
    'list.hoverBackground': opacity(25, bgSoft),
    'list.hoverForeground': fg,
    'list.focusBackground': bgSoft,
    'list.focusForeground': fg,
    'list.dropBackground': bgSoft,
    'list.focusHighlightForeground': highlightWord,
    'list.highlightForeground': highlightWordSoft,
    // Side Bar
    'sideBar.background': bg,
    'sideBar.foreground': fg,
    'sideBar.border': borderSubtle,
    'sideBarTitle.foreground': fg,
    'sideBarSectionHeader.background': transparent,
    'sideBarSectionHeader.foreground': fg,
    // Activity Bar
    'activityBar.background': bg,
    'activityBar.dropBackground': bg,
    'activityBar.foreground': fg,
    'activityBar.border': transparent,
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': bg,
    // Editor Groups
    'editorGroup.emptyBackground': bg,
    'editorGroupHeader.noTabsBackground': bg,
    'editorGroupHeader.tabsBackground': bg,
    'editorGroup.border': borderSubtle,
    'editorGroup.dropBackground': opacity(37.5, bgSoft),
    'editorGroup.noTabsBackground': bgSoft,
    'editorGroup.tabsbackground': bgSoft,
    'editorGroup.tabsBorder': borderSubtle,
    // Tabs
    'tab.border': bg,
    'tab.activeBorder': bg,
    'tab.activeForeground': fgHard,
    'tab.inactiveForeground': fg,
    'tab.inactiveBackground': opacity(50, bgSoft),
    'tab.unfocusedActiveForeground': fg,
    'tab.unfocusedActiveBorder': transparent,
    'tab.unfocusedInactiveForeground': fgSubtle,
    // Editors
    'editor.background': bg,
    'editor.foreground': fg,
    'editorLineNumber.foreground': fgHint,
    'editorLineNumber.activeForeground': cursor,
    'editorCursor.foreground': cursor,
    'editorCursor.background': bg,
    'editor.selectionBackground': opacity(25, selection),
    'editor.selectionHighlightBackground': opacity(15, fg),
    'editor.wordHighlightBackground': opacity(20, highlightWord),
    'editor.wordHighlightStrongBackground': opacity(50, highlightWord),
    'editor.hoverHighlightBackground': opacity(31.25, selection),
    'editor.findMatchBackground': opacity(50, findMatch),
    'editor.findMatchHighlightBackground': opacity(30, findMatch),
    'editor.findRangeHighlightBackground': opacity(15, findMatch),
    'editor.lineHighlightBackground': opacity(37.5, bgSoft),
    'editor.lineHighlightBorder': transparent,
    'editorWhitespace.foreground': opacity(15, fgSubtle),
    'editorIndentGuide.background': borderHint,
    'editorRuler.foreground': borderHint,
    'editorCodeLens.foreground': opacity(56.25, fgSubtle),
    'editorBracketMatch.border': transparent,
    'editorBracketMatch.background': opacity(50, fg),
    'editorHoverWidget.background': bgSoft,
    'editorHoverWidget.border': border,
    'editorOverviewRuler.border': transparent,
    'editorOverviewRuler.findMatchForeground': opacity(30, findMatch),
    'editorOverviewRuler.rangeHighlightForeground': opacity(15, findMatch),
    'editorOverviewRuler.selectionHighlightForeground': fgHint,
    'editorOverviewRuler.wordHighlightForeground': opacity(40, highlightWord),
    'editorOverviewRuler.wordHighlightStrongForeground': opacity(
      60,
      highlightWord
    ),
    'editorOverviewRuler.modifiedForeground': changed,
    'editorOverviewRuler.addedForeground': changed,
    'editorOverviewRuler.deletedForeground': changed,
    'editorOverviewRuler.errorForeground': error,
    'editorOverviewRuler.warningForeground': warnSoft,
    'editorOverviewRuler.infoForeground': selection,
    'editorGutter.background': transparent,
    'editorGutter.modifiedBackground': changed,
    'editorGutter.addedBackground': added,
    'editorGutter.deletedBackground': deleted,
    'editorError.foreground': errorSoft,
    'editorWarning.foreground': warnSoft,
    'editorInfo.foreground': infoSoft,
    'editorLink.activeForeground': fg,
    // Editor Bracket Highlight
    'editorBracketHighlight.foreground1': c(Color.FG, 3),
    'editorBracketHighlight.foreground2': c(Color.Aqua),
    'editorBracketHighlight.foreground3': c(Color.Blue),
    'editorBracketHighlight.foreground4': c(Color.Purple),
    'editorBracketHighlight.foreground5': c(Color.Orange),
    'editorBracketHighlight.foreground6': c(Color.Yellow),
    'editorBracketHighlight.unexpectedBracket.foreground': c(Color.Red),
    // Diff Editors
    'diffEditor.insertedTextBackground': opacity(18.75, added),
    'diffEditor.insertedTextBorder': transparent,
    'diffEditor.removedTextBackground': opacity(18.75, deleted),
    'diffEditor.removedTextBorder': transparent,
    // Widgets
    'editorWidget.background': bg,
    'editorWidget.border': border,
    'editorSuggestWidget.background': bg,
    'editorSuggestWidget.foreground': fg,
    'editorSuggestWidget.focusHighlightForeground': highlightWord,
    'editorSuggestWidget.highlightForeground': highlightWordSoft,
    'editorSuggestWidget.selectedBackground': bgSoft,
    'editorSuggestWidget.border': border,
    // Peek Views
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
    // Merges
    'merge.currentHeaderBackground': opacity(25, mergeCurrent),
    'merge.currentContentBackground': opacity(12.5, mergeCurrent),
    'merge.incomingHeaderBackground': opacity(25, mergeIncoming),
    'merge.incomingContentBackground': opacity(12.5, mergeIncoming),
    'merge.border': transparent,
    'editorOverviewRuler.currentContentForeground': mergeCurrent,
    'editorOverviewRuler.incomingContentForeground': mergeIncoming,
    'editorOverviewRuler.commonContentForeground': mergeCommon,
    // Panels
    'panel.border': borderSubtle,
    'panelTitle.activeForeground': fg,
    // Status Bar
    'statusBar.background': bg,
    'statusBar.foreground': fg,
    'statusBar.debuggingBackground': primary,
    'statusBar.debuggingForeground': bg,
    'statusBar.debuggingBorder': borderSubtle,
    'statusBar.noFolderBackground': bg,
    'statusBar.noFolderBorder': transparent,
    'statusBar.prominentBackground': highlight,
    'statusBar.prominentHoverBackground': opacity(43.75, highlight),
    // Terminal
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
    // Title Bar (macOS)
    'titleBar.activeBackground': bg,
    'titleBar.activeForeground': fg,
    'titleBar.inactiveBackground': bg,
    // Git Decorations
    'gitDecoration.modifiedResourceForeground': modified,
    'gitDecoration.deletedResourceForeground': deletedSoft,
    'gitDecoration.untrackedResourceForeground': addedSoft,
    'gitDecoration.ignoredResourceForeground': fgHint,
    'gitDecoration.conflictingResourceForeground': conflicted,
    // Notifications
    'notification.background': bg,
    'notification.foreground': fg,
    'notification.buttonBackground': opacity(80, primary),
    'notification.buttonHoverBackground': opacity(50, primary),
    'notification.buttonForeground': bg,
    'notification.infoBackground': info,
    'notification.infoForeground': bg,
    'notification.warningBackground': warn,
    'notification.warningForeground': bg,
    'notification.errorBackground': error,
    'notification.errorForeground': bg,
    // Extension Buttonss
    'extensionButton.prominentForeground': bg,
    'extensionButton.prominentBackground': opacity(100, primary),
    'extensionButton.prominentHoverBackground': opacity(75, primary),
    // Breadcrumbs
    'breadcrumb.foreground': fg,
    'breadcrumb.focusForeground': fgHard,
    'breadcrumb.activeSelectionForegraph': opacity(50, bgSoft),
    'breadcrumbPicker.background': bg,
    // Settings
    'settings.headerForeground': fgHard,
    'settings.modifiedItemForeground': primary,
    'settings.inactiveSelectedItemBorder': bgSoft,
    // Menu
    'menu.background': bg,
    'menu.foreground': fg,
    'menu.selectionBackground': primary,
    'menu.selectionForeground': bg,
    'menu.selectionBorder': primary,
    'menubar.selectionBackground': primary,
    'menubar.selectionForeground': bg,
    'menubar.selectionBorder': primary,
    // Misc
    'textLink.foreground': links,
    'textLink.activeForeground': linksSoft,
    'debugToolBar.background': bg,
  }
}
