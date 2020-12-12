import { test } from '.';

describe('mock', () => {
  it('Node modules should be automatically mocked', () => {
    expect(test()).toBe('Mocked!');
  });
});
