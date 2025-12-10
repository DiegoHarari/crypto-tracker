export type TokenPrice = {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
};

type CoinGeckoResponse = {
  bitcoin?: { usd?: number };
  ethereum?: { usd?: number };
  solana?: { usd?: number };
  chainlink?: { usd?: number };
};

const API_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,chainlink&vs_currencies=usd";

export async function fetchCryptoPrices(): Promise<TokenPrice[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch prices");
  }
  const data = (await res.json()) as CoinGeckoResponse;

  return [
    {
      id: "bitcoin",
      symbol: "BTC",
      name: "Bitcoin",
      priceUsd: data.bitcoin?.usd ?? 0
    },
    {
      id: "ethereum",
      symbol: "ETH",
      name: "Ethereum",
      priceUsd: data.ethereum?.usd ?? 0
    },
    {
      id: "solana",
      symbol: "SOL",
      name: "Solana",
      priceUsd: data.solana?.usd ?? 0
    },
    {
      id: "chainlink",
      symbol: "LINK",
      name: "Chainlink",
      priceUsd: data.chainlink?.usd ?? 0
    }
  ];
}
