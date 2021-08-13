import { toLowerCase, toUpperCase } from '../src/string';

const x = 'POOP';
const y = 'poop';

test('toLowerCase', () => {
  expect(toLowerCase(x)).toBe(y);
});

test('toUpperCase', () => {
  expect(toUpperCase(y)).toBe(x);
});
