const TextLintTester = require('textlint-tester');

const tester = new TextLintTester();
const rule = require('..');

tester.run('bittermelon', rule, {
  valid: ['ゴーヤー', '_ゴーヤ_'],
  invalid: [
    {
      text: 'ゴーヤ',
      output: 'ゴーヤー',
      errors: [
        {
          message: 'ゴーヤ => ゴーヤー',
          line: 1,
          column: 1,
        },
      ],
    },
    {
      text: '炒めたゴーヤチャンプルー',
      output: '炒めたゴーヤーチャンプルー',
      errors: [
        {
          message: 'ゴーヤ => ゴーヤー',
          line: 1,
          column: 4,
        },
      ],
    },
  ],
});
