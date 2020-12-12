# Jest Mock Examples

Examples using Jest mock features.

## Examples

See `examples` directory.

- `cookie.test.ts`
  - `jest.spyOn`
  - `mockFn.mockImplementation`
- `navigator/index.test.ts`
  - `jest.spyOn`
  - `mockFn.mockReturnValue`
  - `document.documentElement.innerHTML`
- `now.test.ts`
  - `jest.spyOn(global, 'Date').mockImplementation(() => mockDate)`
- `relative-module/clock.test.ts`
  - `jest.mock`

## Getting Started

```sh
npm ci
npm t
```

## How to start testing on your application

This section describes how to create this repository's environment as an example. Jest, TypeScript, ESLint and Prettier are used.

### Dependencies

```sh
# Install
npm i -D jest ts-jest typescript prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier
```

### Config files

**tsconfig.json**

```sh
# Create tsconfig.json
node_modules/.bin/tsc --init
```

**jest.config.js**

```js
// https://github.com/kulshekhar/ts-jest
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

**.eslintrc**

```json
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  "rules": {}
}
```

**.prettierrc**

```json
{
  "singleQuote": true
}
```

**.vscode/settings.json** (Optional)

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
