/* eslint-disable @typescript-eslint/no-explicit-any */

test('Reset modules', () => {
  let counter: any;

  // Preparation
  counter = require('./counter'); // => ✅ Loaded
  counter.increment();
  expect(counter.state.count).toBe(1);

  // Asserts the module registry is reset
  jest.resetModules();
  counter = require('./counter'); // => ✅ Loaded
  counter.increment();
  expect(counter.state.count).toBe(1);

  // Asserts the module registry is isolated
  jest.resetModules();
  jest.isolateModules(() => {
    counter = require('./counter'); // => ✅ Loaded
  });
  counter.increment();
  expect(counter.state.count).toBe(1);
  jest.isolateModules(() => {
    counter = require('./counter'); // => ✅ Loaded
  });
  counter.increment();
  expect(counter.state.count).toBe(1);
});
