# Gruvbox Minor

A Visual Studio Code theme based off of the original
[gruvbox](https://github.com/morhetz/gruvbox) theme and the
Visual Studio Code
[Gruvbox Theme](https://github.com/jdinhify/vscode-theme-gruvbox).

## Variants

* Dark Medium
* Dark Hard
* Dark Soft
* Light Medium
* Light Hard
* Light Soft

## Screenshots

![screenshots](images/screenshots.jpg)

## PRs are welcomed

### Tips

* In the `json` file, `scope` can be an `array` or a `string`
  of CSS classes
* VSCode's `Developer: Inspect TM Scopes` command is useful
  to find out the scope

### Customization

Customizations and tweaks can be made to all six themes at once by:

1. Saving the customizations in [tokens](src/theme/tokens) for syntax change,
   and/or [workbench](src/theme/workbench) for editor chrome changes,
2. Running `npm start`, which builds the TypeScript files and launches a
   program that regenerates the six theme files.

## Thank Yous

Special thanks to the creator of [gruvbox](https://github.com/morhetz/gruvbox)

Thanks to:

* [jdinhify](https://github.com/jdinhify)
* [eximus](https://github.com/3ximus)

who worked on the original VSCode Gruvbox theme that this is based on:

[Gruvbox Theme](https://github.com/jdinhify/vscode-theme-gruvbox)
