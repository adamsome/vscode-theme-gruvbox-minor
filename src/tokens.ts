import { Color, TokenColor } from './models'

export default (
  c: (color: Color, lightness?: number) => string,
): TokenColor[] => {
  const bg = c(Color.BG)
  const fg = c(Color.FG, 1)
  const fgSubtle = c(Color.FG, 3)
  const headers = c(Color.Yellow, 1)
  const punctuation = fgSubtle
  // Comments
  const comments = c(Color.BG, 4)
  const commentTags = c(Color.Yellow, 1)
  const commentParams = fgSubtle
  // Numbers
  const numbers = c(Color.Purple, 1)
  // Strings
  const strings = c(Color.Green, 1)
  const stringInterpolation = c(Color.Orange, 1)
  const stringEscape = c(Color.Orange, 1)
  // Regex
  const regex = c(Color.Green, 1)
  const regexCharacterClass = c(Color.Purple, 1)
  const regexGroup = fgSubtle
  const regexQuantifier = regexCharacterClass
  // Keywords
  const keywords = c(Color.Red, 1)
  const operators = fgSubtle
  const operatorsSpecial = keywords
  const storage = keywords
  const controls = keywords
  const imports = keywords
  // Functions
  const functions = c(Color.Blue, 1)
  const functionParameters = c(Color.Aqua, 1)
  const decorators = functions
  // Types
  const types = c(Color.Yellow, 1)
  const typesThis = types
  // Variables
  const variables = fg
  const variablesConstant = numbers
  // HTML
  const tags = c(Color.Aqua, 1)
  const tagsClose = c(Color.Aqua)
  const attributes = c(Color.Blue, 1)
  const attributeIDs = c(Color.Orange, 1)
  // Serializable
  const keys1 = c(Color.Yellow, 1)
  const keys2 = c(Color.Aqua, 1)
  const keys3 = c(Color.Blue, 1)
  const keys4 = c(Color.Orange, 1)
  // Markup
  const bold = c(Color.Orange, 1)
  const links = c(Color.Blue, 1)
  const code = c(Color.Aqua, 1)
  // Misc
  const added = c(Color.Green)
  const deleted = c(Color.Red)
  const modified = c(Color.Blue)
  return [
    // General

    {
      name: 'Text',
      scope: ['source', 'text.html'],
      settings: {
        background: bg,
        foreground: fg,
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'strong',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'header',
      settings: {
        foreground: headers,
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'invalid',
      settings: {
        foreground: deleted,
      },
    },

    // Punctuation

    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        // TypeScript/JavaScript string interpolation reset
        'meta.embedded',
        // TypeScript/JavaScript unmarked punctuation reset
        'source.js',
        'source.ts',
        // JSX/TSX
        'punctuation.section.embedded.begin.tsx',
        'punctuation.section.embedded.end.tsx',
        'punctuation.section.embedded.begin.jsx',
        'punctuation.section.embedded.end.jsx',
      ],
      settings: {
        foreground: punctuation,
      },
    },

    // Comments

    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'unused.comment',
        'wildcard.comment',
      ],
      settings: {
        foreground: comments,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'comment keyword.codetag.notation',
        'comment.block.documentation keyword',
        'comment.block.documentation storage.type.class',
        'comment.block.documentation storage.type.class punctuation',
      ],
      settings: {
        foreground: commentTags,
        fontStyle: 'italic',
      },
    },
    {
      scope: [
        'comment.block.documentation variable',
        'comment.block.documentation variable.other',
      ],
      settings: {
        foreground: commentParams,
        fontStyle: 'italic',
      },
    },

    // Constants

    {
      name: 'Constants',
      scope: [
        'constant',
        'constant.numeric',
        'constant.language',
        'constant.other',
        'support.constant',
        'meta.preprocessor.numeric',
        'keyword.other.unit',
      ],
      settings: {
        foreground: numbers,
      },
    },

    // Strings

    {
      scope: ['string', 'meta.preprocessor.string'],
      settings: {
        foreground: strings,
      },
    },
    {
      name: 'String escape sequences',
      scope: ['constant.character', 'constant.regexp'],
      settings: {
        foreground: stringEscape,
      },
    },
    {
      name: 'String interpolation',
      scope: [
        'punctuation.section.embedded',
        'meta.string-contents.quoted.double punctuation.definition.variable',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.definition.interpolation.begin.bracket',
        'punctuation.definition.interpolation.end.bracket',
        'punctuation.definition.variable.makefile',
        'string.interpolated punctuation.definition.string.begin',
        'string.interpolated punctuation.definition.string.end',
      ],
      settings: {
        foreground: stringInterpolation,
      },
    },

    // RegEx

    {
      name: 'Regex text',
      scope: 'string.regexp',
      settings: {
        foreground: regex,
      },
    },
    {
      name: 'RegEx groups',
      scope: [
        'punctuation.definition.group.regexp',
        'punctuation.definition.group.assertion.regexp',
        'support.other.parenthesis.regexp',
      ],
      settings: {
        foreground: regexGroup,
      },
    },
    {
      name: 'RegEx character classes or sets',
      scope: [
        'punctuation.definition.character-class.regexp',
        'punctuation.character.set.begin.regexp',
        'punctuation.character.set.end.regexp',
        'constant.character.character-class.regexp',
        'constant.other.character-class.set.regexp',
        'constant.other.character-class.regexp',
        'constant.character.set.regexp',
      ],
      settings: {
        foreground: regexCharacterClass,
      },
    },
    {
      name: 'RegEx Quantifiers',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: regexQuantifier,
      },
    },
    {
      name: 'RegEx suffix control character',
      scope: 'string.regexp keyword.other',
      settings: {
        foreground: punctuation,
      },
    },

    // Storage

    {
      scope: [
        'storage',
        // ObjC
        'meta.implementation storage.type.objc',
        'meta.interface-or-protocol storage.type.objc',
        // Groovy
        'source.groovy storage.type.def',
      ],
      settings: {
        foreground: storage,
      },
    },

    // Types

    {
      name: 'Types declaration and references',
      scope: [
        'entity.name',
        'support.class',
        'support.type',
        'meta.return-type',
        'meta.return.type',
        'meta.type.name',
        'meta.cast',
        'meta.type.annotation',
        // Swift
        'keyword.primitive-datatypes.swift',
        'storage.type.attribute.swift',
        // ObjC
        'storage.type.objc',
        'meta.protocol-list.objc',
        'meta.return-type.objc',
        // Go
        'source.go storage.type',
        'keyword.struct.go',
        'keyword.interface.go',
        // C
        'storage.type.c',
        // C#
        'keyword.type.cs',
        'storage.type.cs',
        'storage.type.generic.cs',
        'storage.type.modifier.cs',
        'storage.type.variable.cs',
        // Groovy
        'storage.type.groovy',
        'source.groovy storage.type',
        // PHP
        'storage.type.php',
        // Haskell
        'storage.type.haskell',
        // OCaml
        'storage.type.ocaml',
        // Java
        'source.java storage.type',
        // Rust
        'storage.type.core.rust',
        'storage.class.std.rust',
        // Powershell
        'source.powershell entity.other.attribute-name',
        // TypeScript
        'meta.type.cast.expr',
        'meta.type.new.expr',
        'support.constant.math',
        'support.constant.dom',
        'support.constant.json',
        'entity.other.inherited-class',
      ],
      settings: {
        foreground: types,
      },
    },
    {
      name: 'This keyword',
      scope: [
        'variable.language.this',
        'variable.language.super',
        'variable.this',
        'variable.language.special.self',
        'variable.parameter.function.language.special.self',
        'keyword.other.this',
        // Swift
        'keyword.expressions-and-types.swift',
      ],
      settings: {
        foreground: typesThis,
      },
    },
    // Keywords

    {
      scope: ['keyword', 'punctuation.definition.keyword'],
      settings: {
        foreground: keywords,
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: operators,
      },
    },
    {
      name: 'Keywords, special/emphasized',
      scope: ['keyword.operator.ternary'],
      settings: {
        foreground: operatorsSpecial,
      },
    },
    {
      name: 'Keyword-like Operators',
      scope: [
        'variable.language',
        'keyword.control.new',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.logical.python',
        'meta.preprocessor',
        'meta.diff.header',
        'meta.selector',
      ],
      settings: {
        foreground: keywords,
      },
    },
    {
      name: 'Control flow Keywords',
      scope: [
        'keyword.control',
        'keyword.control punctuation.definition.keyword',
      ],
      settings: {
        foreground: controls,
      },
    },

    // Imports

    {
      name: 'Import Keywords',
      scope: [
        'keyword.import',
        'keyword.package',
        'keyword.control.directive',
        'keyword.control.export',
        'keyword.control.import',
        'keyword.other.import',
        'keyword.other.package',
        'meta.import keyword.control',
        'support.type.object.module',
      ],
      settings: {
        foreground: imports,
      },
    },
    {
      name: 'Import Identifiers',
      scope: [
        // Java
        'storage.modifier.import.java',
        'storage.modifier.package.java',
        'variable.language.wildcard.java',
      ],
      settings: {
        foreground: types,
      },
    },

    // Functions

    {
      name: 'Function',
      scope: [
        'entity.name.function',
        'entity.name.method',
        'entity.name.static.function-call',
        'support.function',
        'support.constant.handlebars',
        'variable.function',
        'keyword.operator.function.infix',
        'meta.function-call.generic',
        'meta.function-call.object',
        'meta.function-call.static',
        // Python
        'meta.function.python',
        // PHP
        'meta.function-call.php',
        // Java
        'meta.method-call.java meta.method',
        // Groovy
        'meta.method.groovy',
        // Lua
        'support.function.any-method.lua',
        // Go
        'entity.name.function.go',
      ],
      settings: {
        foreground: functions,
      },
    },
    {
      name: 'Function parameters',
      scope: [
        'entity.name.variable.parameter',
        'variable.parameter',
        // PHP
        'meta.function.arguments variable.other.php',
        // GraphQL
        'meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql',
        // Sass
        'meta.at-rule.function variable',
        'meta.at-rule.mixin variable',
      ],
      settings: {
        foreground: functionParameters,
      },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.decorator entity.name.function',
        'storage.type.annotation',
        'meta.decorator punctuation.decorator',
        'meta.decorator variable.other.readwrite',
        'meta.decorator variable.other.property',
        'meta.decorator variable.other.object',
        // Decorator parenthesis
        'meta.decorator meta.brace.round',
      ],
      settings: {
        foreground: decorators,
      },
    },

    // Variables

    {
      name: 'Variables',
      scope: [
        'meta.parameter.type.variable',
        'support.variable',
        'variable.name',
        'variable.other',
        'variable',
        'string.constant.other.placeholder',
        // TypeScript
        'meta.object-literal.key',
        'meta.decorator.ts meta.object.member',
        // Perl
        'constant.other.key.perl',
      ],
      settings: {
        foreground: variables,
      },
    },
    {
      name: 'Variable Constants',
      scope: ['variable.other.constant'],
      settings: {
        foreground: variablesConstant,
      },
    },
    {
      name: 'Variable Aliasing, Original',
      scope: [
        // Destructuring
        'meta.object-binding-pattern-variable variable.object.property',
        // Module aliasing, original name
        'meta.import variable.other.readwrite',
        'meta.export variable.other.readwrite',
      ],
      settings: {
        foreground: fgSubtle,
      },
    },
    {
      name: 'Variable Aliasing, Alias',
      scope: [
        // Module aliasing, alias name
        'meta.import variable.other.readwrite.alias',
        'meta.export variable.other.readwrite.alias',
        // CoffeeScript
        'meta.variable.assignment.destructured.object.coffee variable variable',
      ],
      settings: {
        foreground: fg,
      },
    },
    {
      name: 'Variable Aliasing, Reset inside export default',
      scope: ['meta.export.default variable.other.readwrite'],
      settings: {
        foreground: fg,
      },
    },

    // Serialized (JSON, YAML, etc.)

    {
      name: 'Serialized keys',
      scope: [
        // Makefile
        'entity.name.function.target.makefile',
        // TOML
        'entity.name.section.toml',
        'variable.other.key.toml',
        // YAML
        'entity.name.tag.yaml',
      ],
      settings: {
        foreground: keys1,
      },
    },
    {
      name: 'Serialized dates',
      scope: ['constant.other.date', 'constant.other.timestamp'],
      settings: {
        foreground: numbers,
      },
    },
    {
      name: 'YAML Aliases',
      scope: ['variable.other.alias.yaml'],
      settings: {
        foreground: functions,
      },
    },
    {
      name: 'JSON Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: keys1,
      },
    },
    {
      name: 'JSON Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: keys2,
      },
    },
    {
      name: 'JSON Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: keys3,
      },
    },
    {
      name: 'JSON Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: keys4,
      },
    },

    // HTML / XML / CSS

    {
      name: 'HTML Tag',
      scope: 'entity.name.tag',
      settings: {
        foreground: tags,
        fontStyle: 'bold',
      },
    },
    {
      name: 'HTML Tag Close',
      scope: 'tag.close entity.name.tag',
      settings: {
        foreground: tagsClose,
        fontStyle: 'normal',
      },
    },
    {
      name: 'HTML Attribute',
      scope: [
        'entity.other.attribute-name',
        'meta.tag.inline.any.html',
        'meta.tag.sgml',
      ],
      settings: {
        foreground: attributes,
      },
    },
    {
      name: 'HTML Attribute ID',
      scope: ['entity.other.attribute-name.id'],
      settings: {
        foreground: attributeIDs,
      },
    },
    {
      name: 'HTML Codes Punctuation',
      scope: 'punctuation.definition.entity.html',
      settings: {
        foreground: stringEscape,
      },
    },
    {
      name: 'CSS Pseudo Classes/Elements',
      scope: [
        'entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element',
      ],
      settings: {
        foreground: fgSubtle,
      },
    },
    {
      name: 'CSS Attribute Parent Selectors',
      scope: ['entity.other.attribute-name.parent-selector'],
      settings: {
        foreground: keywords,
      },
    },

    // Python

    {
      name: 'Python Function Arguments',
      scope: 'meta.function-call.arguments',
      settings: {
        foreground: fg,
      },
    },

    // GraphQL

    {
      name: 'GraphQL types',
      scope: ['meta.selectionset.graphql variable'],
      settings: {
        foreground: strings,
      },
    },
    {
      name: 'GraphQL arguments',
      scope: ['meta.selectionset.graphql meta.arguments variable'],
      settings: {
        foreground: fg,
      },
    },
    {
      name: 'GraphQL fragment',
      scope: ['source.shell support.function.builtin'],
      settings: {
        foreground: types,
      },
    },

    // Shell

    {
      name: 'Shell Script Built-in Functions',
      scope: ['source.shell support.function.builtin'],
      settings: {
        foreground: functions,
      },
    },
    {
      name: 'Shell Script Variables',
      scope: [
        'punctuation.definition.variable.shell',
        'source.shell variable.other',
      ],
      settings: {
        foreground: types,
      },
    },
    {
      name: 'Shell Script Interpolated Content',
      scope: [
        'string.interpolated.backtick.shell',
        'string.interpolated.dollar.shell',
      ],
      settings: {
        foreground: code,
      },
    },
    {
      name: 'Shell Foreground Reset',
      scope: [
        'meta.scope.for-loop.shell punctuation.definition.string.begin',
        'meta.scope.for-loop.shell punctuation.definition.string.end',
        'meta.scope.for-loop.shell string',
      ],
      settings: {
        foreground: fg,
      },
    },

    // MAKEFILE

    {
      name: 'Makefile Prerequisites',
      scope: 'meta.scope.prerequisites',
      settings: {
        foreground: types,
      },
    },
    {
      name: 'Makefile Function Targets',
      scope: 'entity.name.function.target',
      settings: {
        foreground: strings,
        fontStyle: 'bold',
      },
    },

    // Lisp

    {
      name: 'Lisp optional function parameters',
      scope: 'meta.function-parameters.lisp',
      settings: {
        foreground: functions,
      },
    },

    // Markup

    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground: bold,
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markup headings/sections',
      scope: ['markup.heading', 'entity.name.section'],
      settings: {
        fontStyle: 'bold',
        foreground: headers,
      },
    },
    {
      name: 'Markup link text',
      scope: [
        'meta.link.reference.def.restructuredtext',
        'punctuation.definition.directive.restructuredtext',
        'string.other.link.description',
        'string.other.link.title',
      ],
      settings: {
        foreground: links,
        fontStyle: 'underline',
      },
    },
    {
      name: 'Markup links',
      scope: ['markup.underline.link', 'markup.underline.link.image'],
      settings: {
        foreground: fgSubtle,
      },
    },
    {
      name: 'Markup inline code',
      scope: ['markup.inline.raw', 'markup.raw.restructuredtext'],
      settings: {
        foreground: code,
      },
    },
    {
      name: 'Markup code blocks',
      scope: [
        'fenced_code.block.language',
        'markup.raw.inner.restructuredtext',
        'markup.fenced_code.block.markdown punctuation.definition.markdown',
      ],
      settings: {
        foreground: code,
      },
    },
    {
      name: 'Markup blockquotes',
      scope: ['entity.name.directive.restructuredtext', 'markup.quote'],
      settings: {
        foreground: strings,
      },
    },
    {
      name: 'Markup bullets & lists',
      scope: [
        'beginning.punctuation.definition.list.markdown',
        'beginning.punctuation.definition.quote.markdown',
        'punctuation.definition.link.restructuredtext',
        'markup.punctuation.quote.beginning',
        'markup.punctuation.list.beginning',
      ],
      settings: {
        foreground: numbers,
      },
    },
    {
      name: 'Markup horizontal rule',
      scope: ['meta.separator.markdown'],
      settings: {
        foreground: fgSubtle,
      },
    },
    {
      name: 'Markup constants',
      scope: ['punctuation.definition.constant.restructuredtext'],
      settings: {
        foreground: numbers,
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: added,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: deleted,
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: modified,
      },
    },

    // Go

    {
      name: 'Go Import Names',
      scope: ['source.go entity.name.import'],
      settings: {
        foreground: strings,
      },
    },
    {
      name: 'Go Entity Names Override',
      scope: ['source.go entity.name.type'],
      settings: {
        foreground: fg,
      },
    },

    // Cucumber

    {
      name: 'Cucumber Table Keywords',
      scope: ['keyword.control.cucumber.table'],
      settings: {
        foreground: functions,
      },
    },

    // PHP

    {
      name: 'PHP Metatags',
      scope: 'metatag.php',
      settings: {
        foreground: tags,
      },
    },

    // Git

    {
      name: 'Git Rebase Function Header',
      scope: 'support.function.git-rebase',
      settings: {
        foreground: code,
      },
    },
    {
      name: 'Git Rebase SHA Header',
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: strings,
      },
    },
  ]
}
