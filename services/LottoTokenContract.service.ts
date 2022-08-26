import { ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { addressList } from "../config/addressList";
import { getSigner } from "../utils/getProviderSigner";
import { ERC20Contract } from "./contract.service";

const getLottoTokenContract = async () => {
  return await ERC20Contract(addressList.TokenAddress);
};

const allowance = async () => {
  const contract = await getLottoTokenContract();
  const myAddress = await (await getSigner()).getAddress();
  const allowance = await contract.allowance(
    myAddress,
    addressList.LottoCommuContract
  );
  return allowance;
};

const approve = async () => {
  const contract = await getLottoTokenContract();
  const tx = await contract.approve(
    addressList.LottoCommuContract,
    ethers.constants.MaxUint256
  );

  await tx.wait(1);
};

const LottoTokenService = { allowance, approve };

export default LottoTokenService;
