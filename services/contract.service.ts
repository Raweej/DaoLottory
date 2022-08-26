import {
  ERC20__factory,
  Lottery__factory,
  LottoCommu__factory,
} from "../typechain";
import { getSigner } from "../utils/getProviderSigner";

export const LottoCommuContract = (address: string, signer = getSigner()) =>
  LottoCommu__factory.connect(address, signer);

export const LotteryContract = (address: string, signer = getSigner()) =>
  Lottery__factory.connect(address, signer);

export const ERC20Contract = (address: string, signer = getSigner()) =>
  ERC20__factory.connect(address, signer);
