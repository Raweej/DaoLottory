import { Lottery__factory, LottoCommu__factory } from "../typechain";
import { getSigner } from "../utils/getProviderSigner";

const LottoCommuContract = (address: string, signer = getSigner()) =>
  LottoCommu__factory.connect(address, signer);

const LotteryContract = (address: string, signer = getSigner()) =>
  Lottery__factory.connect(address, signer);

const getLottoCommuContract = async () => {
  return await LottoCommuContract(addressList.lottoCommuContractAddress);
};

const getLotteryContract = async () => {
  return await LotteryContract(addressList.lotteryContractAddress);
};

const buyTicketDAO = async (amountTicket: number) => {
  const contract = await getLottoCommuContract();
  const tx = await contract.buyTicketDAO(amountTicket);
  await tx.wait();
};

const claimLotteryReward = async (roundId: number) => {
  const contract = await getLottoCommuContract();
  const tx = await contract.claimLotteryReward(roundId);
  await tx.wait();
};

const claim = async (roundId: number) => {
  const contract = await getLottoCommuContract();
  const tx = await contract.claim(roundId);
  await tx.wait();
};

const LottoCommuContractService = { buyTicketDAO, claimLotteryReward, claim };

export default LottoCommuContractService;
