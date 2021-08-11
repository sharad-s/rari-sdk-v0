import { add, subtract } from '../src/math';

const x = 20;
const y = 10;

test('add', () => {
  expect(add(x, y)).toBe(30);
});

test('subtract', () => {
  expect(subtract(x, y)).toBe(10);
});
