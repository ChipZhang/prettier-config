# A Prettier shareable config featuring modern code style and ease of typing

## Style Philosophy

- Indentation & alignment

Mimic Golang's `gofmt` behavior: tabs are used for indentation, spaces are used for alignment.

- Line width

Use 120 rather than 80 for modern PC monitors.
Note that this is not a hard strict, `prettier` may allow some lines to exceed this limit as breaking such lines is weird.

- Typing with ease

Prefer no semicolons, single quotes, and no spaces between brackets in object literals, to ease the typing.
Why? `prettier` is a modern tool, and
[it can automatically add semicolons when necessary](https://prettier.io/docs/en/rationale.html#semicolons),
so it is safe to omit the semicolons except for a few lines.
Moreover, note that `prettier` may still use double quotes if the string contains more single quotes than double quotes.

- Consistency

Styles of neighboring code should be consistent, such as consistent property quoting for a literal object,
trailing commas for multi-line code, brackets for multi-line JSX code.

## Usage

- First, install this package as a development dependency. Note this package will not install `prettier` itself automatically.

```shell
npm i -D @chipzhang/prettier-config
```

- Then, use [one of the configuration types supported](https://prettier.io/docs/en/configuration.html),
  for example

  - Add `{"prettier": "@chipzhang/prettier-config"}` to your `package.json` file.

  - Add a JSON file `.prettierrc`, or `.prettierrc.json` with content `"@chipzhang/prettier-config"`.

  - Add a JS file `.prettierrc.js`, or `prettier.config.js`, with content `module.exports = '@chipzhang/prettier-config'`,
    or `module.exports = require('@chipzhang/prettier-config')`.

- If you are using JS configuration file, you can add your custom settings like

```javascript
module.exports = {
  ...require('@chipzhang/prettier-config'),
  mySetting: 'value',
}
```

## License

GNU AFFERO GENERAL PUBLIC LICENSE Version 3
