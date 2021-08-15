import { Rari } from '../src';

export const turboGethURL = `https://turbogeth.crows.sh`;

test('Rari exists', () => {
  const rari = new Rari(turboGethURL);
  expect(rari).toBeTruthy();
});
