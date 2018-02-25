import { Color, TokenColor } from '../models'

export const makeTokenColors = (
  c: (color: Color, lightness?: number) => string,
): TokenColor[] => {
  const fg = c(Color.FG, 1)
  return [
    {
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
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: c(Color.Gray),
        fontStyle: 'italic',
      },
    },
    {
      scope: ['constant', 'support.constant', 'variable.arguments'],
      settings: {
        foreground: c(Color.Purple, 1),
      },
    },
    {
      scope: 'constant.rgb-value',
      settings: {
        foreground: fg,
      },
    },
    {
      scope: 'entity.name.selector',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: ['entity.name.tag', 'punctuation.tag'],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: ['invalid', 'invalid.illegal'],
      settings: {
        foreground: c(Color.Red),
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        foreground: c(Color.Purple),
      },
    },
    {
      scope: 'meta.selector',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'meta.preprocessor',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'meta.header.diff',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      scope: 'storage.modifier',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'string',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'string.tag',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'string.value',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'string.escape',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      scope: 'string.quasi',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'string.entity',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'object',
      settings: {
        foreground: fg,
      },
    },
    {
      scope: 'module.node',
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      scope: 'support.type.property-name',
      settings: {
        foreground: c(Color.Aqua),
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      scope: 'keyword.control.module',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'keyword.control.less',
      settings: {
        foreground: c(Color.Yellow),
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'keyword.operator.new',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: 'metatag.php',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'support.function.git-rebase',
      settings: {
        foreground: c(Color.Aqua),
      },
    },
    {
      scope: 'constant.sha.git-rebase',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      name: 'Types declaration and references',
      scope: [
        'meta.type.name',
        'meta.return.type',
        'meta.return-type',
        'meta.cast',
        'meta.type.annotation',
        'support.type',
        'storage.type.cs',
        'variable.class',
      ],
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: ['variable.this', 'support.variable'],
      settings: {
        foreground: c(Color.Purple, 1),
      },
    },
    {
      scope: [
        'entity.name',
        'entity.static',
        'entity.name.class.static.function',
        'entity.name.function',
        'entity.name.class',
        'entity.name.type',
      ],
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      name: 'Function declarations',
      scope: [
        'storage.type.function',
        'entity.function',
        'entity.name.function.static',
      ],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'entity.name.function.function-call',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'support.function.builtin',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: [
        'entity.name.method',
        'entity.name.method.function-call',
        'entity.name.static.function-call',
      ],
      settings: {
        foreground: c(Color.Aqua),
      },
    },
    {
      scope: 'brace',
      settings: {
        foreground: c(Color.FG, 2),
      },
    },
    {
      name: 'variables',
      scope: [
        'meta.parameter.type.variable',
        'variable.parameter',
        'variable.name',
        'variable.other',
        'variable',
        'string.constant.other.placeholder',
      ],
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      scope: 'prototype',
      settings: {
        foreground: c(Color.Purple, 1),
      },
    },
    {
      scope: 'storage.type.class',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      scope: ['punctuation'],
      settings: {
        foreground: c(Color.FG, 4),
      },
    },
    {
      scope: 'punctuation.quoted',
      settings: {
        foreground: fg,
      },
    },
    {
      scope: 'punctuation.quasi',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
    // ----------------------------------------
    //            LANGUAGE SPECIFIC
    // ----------------------------------------
    // PYTHON ----------------------------------------
    {
      name: 'Python function',
      scope: ['meta.function.python', 'entity.name.function.python'],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      name: 'Python Function and Class definition keywords',
      scope: [
        'storage.type.function.python',
        'storage.modifier.declaration',
        'storage.type.class.python',
      ],
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      name: 'Python Function Call',
      scope: 'meta.function-call.generic',
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      name: 'Python Function Arguments',
      scope: 'meta.function-call.arguments',
      settings: {
        foreground: c(Color.FG, 2),
      },
    },
    {
      name: 'Python Function decorator',
      scope: 'entity.name.function.decorator',
      settings: {
        foreground: c(Color.Yellow, 1),
        fontStyle: 'bold',
      },
    },
    {
      name: 'Python ALL CAPS',
      scope: 'constant.other.caps',
      settings: {
        fontStyle: 'bold',
      },
    },
    // SHELL ----------------------------------------
    {
      scope: 'keyword.operator.logical',
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      scope: 'punctuation.definition.logical-expression',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'string.inperpolated.dollar.shell',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: [
        'string.interpolated.dollar.shell',
        'string.interpolated.backtick.shell',
      ],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    // C C++ ----------------------------------------
    {
      scope: 'keyword.control.directive',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'support.function.C99',
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    // MAKEFILE ----------------------------------------
    {
      scope: 'meta.scope.prerequisites',
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: 'entity.name.function.target',
      settings: {
        foreground: c(Color.Green, 1),
        fontStyle: 'bold',
      },
    },
    // JAVA ----------------------------------------
    {
      name: 'coloring of the Java import and package identifiers',
      scope: ['storage.modifier.import.java', 'storage.modifier.package.java'],
      settings: {
        foreground: c(Color.FG, 3),
      },
    },
    {
      scope: ['keyword.other.import.java', 'keyword.other.package.java'],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'storage.type.java',
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: 'storage.type.annotation',
      settings: {
        foreground: c(Color.Blue, 1),
        fontStyle: 'bold',
      },
    },
    {
      scope: 'keyword.other.documentation.javadoc',
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: 'comment.block.javadoc variable.parameter.java',
      settings: {
        foreground: c(Color.Green, 1),
        fontStyle: 'bold',
      },
    },
    {
      scope: [
        'source.java variable.other.object',
        'source.java variable.other.definition.java',
      ],
      settings: {
        foreground: fg,
      },
    },
    // LISP ----------------------------------------
    {
      name: 'Lisp optional function parameters',
      scope: 'meta.function-parameters.lisp',
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    // MARKUP ----------------------------------------
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'string.other.link.title.markdown',
      settings: {
        foreground: c(Color.Gray),
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.underline.link',
      settings: {
        foreground: c(Color.Purple, 1),
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold',
        foreground: c(Color.Orange, 1),
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
        foreground: c(Color.Orange),
      },
    },
    {
      scope: 'markup.changed',
      settings: {
        foreground: c(Color.Orange, 1),
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
    // JSON ----------------------------------------
    {
      scope: 'string.quoted.double.json',
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      name: 'JSON Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: c(Color.Green, 1),
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
        foreground: c(Color.Purple, 1),
      },
    },
    {
      name: 'JSON Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    // CSS ----------------------------------------
    {
      scope: 'entity.other.attribute-name.css',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'source.css meta.selector',
      settings: {
        foreground: fg,
      },
    },
    {
      scope: 'support.type.property-name.css',
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    {
      scope: 'entity.other.attribute-name.class',
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: [
        'source.css support.function.transform',
        'source.css support.function.timing-function',
        'source.css support.function.misc',
      ],
      settings: {
        foreground: c(Color.Red, 1),
      },
    },
    {
      name: 'CSS property value',
      scope: [
        'support.property-value',
        'constant.rgb-value',
        'support.property-value.scss',
        'constant.rgb-value.scss',
      ],
      settings: {
        foreground: c(Color.Orange),
      },
    },
    {
      scope: ['entity.name.tag.css'],
      settings: {
        fontStyle: 'normal',
      },
    },
    // HTML / XML ----------------------------------------
    {
      scope: ['punctuation.definition.tag'],
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      scope: ['text.html entity.name.tag', 'text.html punctuation.tag'],
      settings: {
        foreground: c(Color.Aqua, 1),
        fontStyle: 'bold',
      },
    },
    // javascript ---------------------------------------
    {
      scope: ['source.js variable.language'],
      settings: {
        foreground: c(Color.Orange, 1),
      },
    },
    // golang --------------------------------------------
    {
      scope: ['source.go storage.type'],
      settings: {
        foreground: c(Color.Yellow, 1),
      },
    },
    {
      scope: ['source.go entity.name.import'],
      settings: {
        foreground: c(Color.Green, 1),
      },
    },
    {
      scope: ['source.go keyword.package', 'source.go keyword.import'],
      settings: {
        foreground: c(Color.Aqua, 1),
      },
    },
    {
      scope: ['source.go keyword.interface', 'source.go keyword.struct'],
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
    {
      scope: ['source.go entity.name.type'],
      settings: {
        foreground: fg,
      },
    },
    {
      scope: ['source.go entity.name.function'],
      settings: {
        foreground: c(Color.Purple, 1),
      },
    },
    // cucumber
    {
      scope: ['keyword.control.cucumber.table'],
      settings: {
        foreground: c(Color.Blue, 1),
      },
    },
  ]
}
