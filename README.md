# textlint-rule-bittermelon

[![textlint rule](https://img.shields.io/badge/textlint-fixable-blue.svg)](https://textlint.github.io/) [![workflow-badge]][workflow-url]

[workflow-badge]: https://github.com/uetchy/textlint-rule-bittermelon/workflows/Test/badge.svg
[workflow-url]: https://github.com/uetchy/textlint-rule-bittermelon/actions?workflow=Test

ゴーヤじゃなくてゴーヤー。

This rule module for [azu/textlint](https://github.com/textlint/textlint 'azu/textlint').

## Usage

```
npm install --save-dev textlint textlint-rule-bittermelon
```

```
textlint --rule bittermelon file.md

path/to/file.md
  3:4  error  ゴーヤ => ゴーヤー

✖ 1 problem
```

## FAQ

Q. 一部離島では **ゴーヤ** でも正しいんですが？

A. `textlint-rule-bittermelon`は沖縄本島の慣習に則っています。

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request!

## License

MIT
