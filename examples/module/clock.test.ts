import { clock } from '../../utils/clock';

jest.mock('../../utils/now', () => ({
  now: () => Date.UTC(2000, 0, 1),
}));

// Note: jest.mock(moduleName, factory, options)
// https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options
//
// `factory` and `options` are optional. For example:
//
// jest.mock('../banana');
// const banana = require('../banana'); // banana will be explicitly mocked.
// banana(); // will return 'undefined' because the function is auto-mocked.

describe('clock', () => {
  it('should a string of the current date with en-US style', () => {
    expect(clock()).toBe('1/1/2000, 12:00:00 AM');
  });
});
