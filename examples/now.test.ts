import { now } from '../utils/now';

describe('now', () => {
  it('This is an example to mock Date', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockDate: any = new Date(946684800000);
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    expect(now()).toBe(946684800000);
  });
});
