import { test } from '.';

jest.unmock('lodash');

describe('unmock', () => {
  it('Node modules should not be mocked when unmock is called', () => {
    expect(test()).toEqual({ a: 1, b: 2 });
  });
});
