import { Color, TokenColor } from '../models'

export const makeTokenColors = (
  c: (color: Color, lightness?: number) => string,
): TokenColor[] => {
  const fg = c(Color.FG, 1)
  const fgSubtle = c(Color.FG, 3)
  const punctuation = fgSubtle
  const comments = c(Color.BG, 4)
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
  const decorators = functions
  // Types
  const types = c(Color.Yellow, 1)
  // Variables
  const variables = fg
  const variablesConstant = numbers
  // Misc
  const error = c(Color.Red)
  return [
    // General
    {
      name: 'Text',
      scope: ['source', 'text.html'],
      settings: {
        background: c(Color.BG),
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
        foreground: c(Color.Blue),
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
        foreground: error,
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
      ],
      settings: {
        foreground: punctuation,
      },
    },

    // Comments

    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: comments,
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
      scope: 'constant.character.escape',
      settings: {
        foreground: stringEscape,
      },
    },
    {
      name: 'String interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.interpolation.begin.bracket',
        'punctuation.definition.template-expression.end',
        'punctuation.definition.interpolation.end.bracket',
        'punctuation.section.embedded',
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
      scope: 'storage',
      settings: {
        foreground: storage,
      },
    },

    // Keywords

    {
      scope: 'keyword',
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
        'variable.this',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.logical.python',
        'meta.preprocessor',
        'meta.diff.header',
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
        // Python
        'meta.function.python',
        'meta.function-call.generic',
        // Go
        'entity.name.function.go',
      ],
      settings: {
        foreground: functions,
      },
    },
    {
      name: 'Decorators',
      scope: [
        'meta.decorator entity.name.function',
        'storage.type.annotation',
        'meta.decorator punctuation.decorator',
      ],
      settings: {
        foreground: decorators,
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
        // Go
        'storage.type.numeric.go',
        'storage.type.byte.go',
        'storage.type.boolean.go',
        'storage.type.string.go',
        'storage.type.uintptr.go',
        'keyword.struct.go',
        'keyword.interface.go',
        // C
        'storage.type.c',
        // C#
        'storage.type.cs',
        'storage.type.generic.cs',
        'storage.type.modifier.cs',
        'storage.type.variable.cs',
        // Groovy
        'storage.type.groovy',
        'storage.type.parameters.groovy',
        'storage.type.generic.groovy',
        'storage.type.object.array.groovy',
        'storage.type.primitive.array.groovy',
        'storage.type.primitive.groovy',
        // Java
        'storage.type.java',
        'storage.type.generic.java',
        'storage.type.object.array.java',
        'storage.type.primitive.array.java',
        'storage.type.primitive.java',
        'storage.type.token.java',
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

    // Variables

    {
      name: 'Variables',
      scope: [
        'meta.parameter.type.variable',
        'support.variable',
        'variable.parameter',
        'variable.name',
        'variable.other',
        'variable',
        'string.constant.other.placeholder',
        // TypeScript
        'meta.object-literal.key',
        'meta.decorator.ts meta.object.member',
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

    // HTML / XML / CSS

    {
      name: 'HTML Tag',
      scope: 'entity.name.tag',
      settings: {
        foreground: c(Color.Aqua, 1),
        fontStyle: 'bold',
      },
    },
    {
      name: 'HTML Tag Close',
      scope: 'tag.close entity.name.tag',
      settings: {
        foreground: c(Color.Aqua),
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
        foreground: c(Color.Blue, 1),
      },
    },
    {
      name: 'HTML Attribute ID',
      scope: ['entity.other.attribute-name.id'],
      settings: {
        foreground: c(Color.Orange, 1),
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

    // JSON

    {
      name: 'JSON Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      name: 'JSON Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      name: 'JSON Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      name: 'JSON Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: c(Color.Orange, 1),
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
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      name: 'Shell Script Interpolated Content',
      scope: [
        'string.interpolated.backtick.shell',
        'string.interpolated.dollar.shell',
      ],
      settings: {
        foreground: c(Color.Aqua, 1),
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
        foreground: c(Color.Green, 1),
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
      scope: 'string.other.link.title.markdown',
      settings: {
        foreground: c(Color.Blue, 1),
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.underline.link',
      settings: {
        foreground: c(Color.Gray),
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: ['markup.heading', 'entity.name.section'],
      settings: {
        fontStyle: 'bold',
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: c(Color.Red),
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      scope: 'markup.punctuation.quote.beginning',
      settings: {
        foreground: c(Color.Green),
      },
    },
    {
      scope: 'markup.punctuation.list.beginning',
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      scope: ['markup.inline.raw', 'markup.fenced_code.block'],
      settings: {
        foreground: c(Color.Aqua, 1),
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
        foreground: c(Color.Blue, 1),
      },
    },

    // PHP

    {
      name: 'PHP Metatags',
      scope: 'metatag.php',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },

    // Git

    {
      name: 'Git Rebase Function Header',
      scope: 'support.function.git-rebase',
      settings: {
        foreground: c(Color.Aqua),
      },
    },
    {
      name: 'Git Rebase SHA Header',
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
  ]
}
