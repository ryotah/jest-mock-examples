export const state = {
  count: 0,
};

export function increment(): void {
  state.count += 1;
}

console.log('Loaded!');
