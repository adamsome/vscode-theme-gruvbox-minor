# Gruvbox Theme

A [gruvbox](https://github.com/morhetz/gruvbox) theme including syntax highlighting and workbench & terminal colors.

## Variants

* Dark - Medium Contrast
* Dark - Hard Contrast
* Dark - Soft Contrast
* Light - Medium Contrast
* Light - Hard Contrast
* Light - Soft Contrast

We're not users of Light versions so we need help to make light versions better. Please contribute if you have any suggestions.

## Screenshots

![screenshots](images/screenshots.jpg)

## PRs are welcomed!

### Tips

* In the `json` file, `scope` can be an `array` or a `string` of CSS classes
* VSCode's `Developer: Inspect TM Scopes` command is useful to find out the scope

### Customization

Customizations and tweaks can be made to all six themes at once by:

1. Saving the customizations in [tokens](src/theme/tokens) for syntax change,
   and/or [workbench](src/theme/workbench) for editor chrome changes,
2. Running `npm start`, which builds the TypeScript files and launches a
   program that regenerates the six theme files.

## Thank Yous

Special thank to the creator of [gruvbox](https://github.com/morhetz/gruvbox)

### Contributors

* [eximus](https://github.com/3ximus)
* [adamsome](https://github.com/adamsome)
