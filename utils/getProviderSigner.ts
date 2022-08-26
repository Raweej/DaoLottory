import { ethers } from "ethers";

const rpcRinkeby =
  "https://eth-rinkeby.alchemyapi.io/v2/Qt8Wyhov29nWxq4df9Gc0EY75sD8CeGA";

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(rpcRinkeby);
};

export const getSigner = () => {
  const eth = window.ethereum;
  return new ethers.providers.Web3Provider(window.ethereum as any).getSigner();
};
