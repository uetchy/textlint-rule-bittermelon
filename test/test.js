const {join} = require('path');
const assert = require('assert');
const {textlint} = require('textlint');

describe('bittermelon.js', () => {
  beforeEach(() => {
    textlint.setupRules({
      bittermelon: require('../bittermelon').linter,
    });
  });

  afterEach(() => {
    textlint.resetRules();
  });

  it('should lint wrong gōyā', () => {
    const filePath = join(__dirname, '/fixtures/wrong.md');
    return textlint.lintFile(filePath).then((result) => {
      assert.ok(result.filePath === filePath);
      assert.ok(result.messages.length > 0);
      const message = result.messages[0].message;
      assert.equal(message, 'ゴーヤ => ゴーヤー');
    });
  });

  context('expect Link, Image and block', () => {
    it('should not lint wrong tech words', () => {
      const filePath = join(__dirname, '/fixtures/no-error.md');
      return textlint.lintFile(filePath).then((result) => {
        assert.ok(result.filePath === filePath);
        assert.ok(result.messages.length === 0);
      });
    });
  });
});
