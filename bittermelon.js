const {RuleHelper} = require('textlint-rule-helper');
const StructuredSource = require('structured-source');

function checker(text) {
  const src = new StructuredSource(text);
  const query = new RegExp('ゴーヤ(?!ー)', '');
  const match = query.exec(text);

  if (!match) {
    return [];
  }

  const actual = match[0];
  const expected = actual.replace(query, 'ゴーヤー');

  const position = src.indexToPosition(match.index);
  const result = {
    actual,
    expected,
    paddingIndex: match.index,
    paddingLine: position.line - 1,
    paddingColumn: position.column,
  };

  return [result];
}

function reporter(context) {
  const helper = new RuleHelper(context);
  const {fixer, Syntax} = context;

  return {
    [context.Syntax.Str](node) {
      if (
        helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Emphasis])
      ) {
        return;
      }
      const text = context.getSource(node);
      const results = checker(text);
      results.forEach((result) => {
        const {paddingIndex, actual, expected} = result;

        context.report(
          node,
          new context.RuleError(actual + ' => ' + expected, {
            index: paddingIndex,
            fix: fixer.replaceTextRange([paddingIndex, paddingIndex + actual.length], expected),
          }),
        );
      });
    },
  };
}

module.exports = {
  linter: reporter,
  fixer: reporter,
};
