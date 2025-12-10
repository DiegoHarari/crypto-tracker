import Web3 from "web3";

const RPC_URL = "https://cloudflare-eth.com";

let web3: Web3 | undefined;

export function getWeb3(): Web3 {
  if (!web3) {
    web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
  }
  return web3;
}

export async function getCurrentBlockNumber(): Promise<number> {
  const client = getWeb3();
  const blockNumber = await client.eth.getBlockNumber();
  return blockNumber;
}
