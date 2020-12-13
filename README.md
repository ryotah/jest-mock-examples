# Jest Mock Examples

Examples using Jest mock features.

## Examples

See `examples` directory.

- `cookie.test.ts`
  - `jest.spyOn`
  - `mockFn.mockImplementation`
- `navigator/`
  - `jest.spyOn`
  - `mockFn.mockReturnValue`
  - `document.documentElement.innerHTML`
- `now.test.ts`
  - `jest.spyOn`
- `module/`
  - `jest.mock`
  - `jest.doMock`
- `lodash/`
  - `jest.mock`
  - `jest.unmock`
  - `__mocks__/lodash`
- `module-registry/`
  - `jest.resetModules`
  - `jest.isolateModules`

## Other Resources

- https://github.com/facebook/jest/tree/master/examples/automatic-mocks
- https://github.com/facebook/jest/tree/master/examples/manual-mocks
- https://github.com/facebook/jest/tree/master/examples/module-mock

```js
// https://github.com/facebook/jest/tree/master/examples/manual-mocks/__tests__/partial_mock.js

// Copyright 2004-present Facebook. All Rights Reserved.

/**
 * This file illustrates how to do a partial mock where a subset
 * of a module's exports have been mocked and the rest
 * keep their actual implementation.
 */
import defaultExport, {apple, strawberry} from '../fruit';
jest.mock('../fruit', () => {
  const originalModule = jest.requireActual('../fruit');
  const mockedModule = jest.createMockFromModule('../fruit');

  //Mock the default export and named export 'apple'.
  return {
    ...mockedModule, // <= My note: Is `__esModule: true,` enough instead of `...mockedModule`?
    ...originalModule,
    apple: 'mocked apple',
    default: jest.fn(() => 'mocked fruit'),
  };
});

it('does a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked fruit');
  expect(defaultExport).toHaveBeenCalled();

  expect(apple).toBe('mocked apple');
  expect(strawberry()).toBe('strawberry');
});
```

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

https://github.com/kulshekhar/ts-jest

```js
module.exports = {
  preset: 'ts-jest',
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
