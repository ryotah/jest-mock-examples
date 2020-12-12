/* eslint-disable @typescript-eslint/no-var-requires */

describe('doMock is not hoiste to the top of code', () => {
  // Note:
  // One example when this is useful is when you want to mock a module differently within the same file
  // https://jestjs.io/docs/en/jest-object#jestdomockmodulename-factory-options
  beforeEach(() => {
    jest.resetModules();
  });

  it('Date.UTC(2000, 0, 1)', () => {
    jest.doMock('../../utils/now', () => ({
      now: () => Date.UTC(2000, 0, 1),
    }));
    expect(require('../../utils/clock').clock()).toBe('1/1/2000, 12:00:00 AM');
  });

  it('Date.UTC(2000, 1, 1)', () => {
    jest.doMock('../../utils/now', () => ({
      now: () => Date.UTC(2000, 1, 1),
    }));
    expect(require('../../utils/clock').clock()).toBe('2/1/2000, 12:00:00 AM');
  });
});
