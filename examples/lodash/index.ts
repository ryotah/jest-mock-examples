import { defaults } from 'lodash';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function test() {
  return defaults({ a: 1 }, { a: 3, b: 2 });
  // → { 'a': 1, 'b': 2 }
}
