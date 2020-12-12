import { now } from './now';

export function clock(): string {
  return new Date(now()).toLocaleString('en-US', { timeZone: 'UTC' });
}
