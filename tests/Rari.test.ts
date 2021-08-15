import { Rari } from '../src';

export const turboGethURL = `https://turbogeth.crows.sh`;

// test('Rari exists', () => {
//   const rari =
// });

describe('Rari SDK', () => {
  let rari: Rari | undefined;

  beforeEach(() => {
    rari = new Rari(turboGethURL);
  });

  it('Loads a Rari SDK instance', () => {
    expect(rari).toBeTruthy();
  });

  it('Has a Web3 instance', () => {
    expect(rari.web3).toBeTruthy();
  });

  it('has pools', () => {
    console.log(rari.pools);
    expect(rari.pools).toBeTruthy();
  });

  describe('methods', () => {
    it('Fetches ETHUSD Price as BigNumber', async () => {
      const ethUSDPriceBN = await rari.getEthUsdPriceBN();
      expect(ethUSDPriceBN).toBeTruthy();
    });

    it('calls `getAllTokens()`', async () => {
      const allTokens = await rari.getAllTokens();
      expect(allTokens).toBeTruthy();
    });
  });
});
