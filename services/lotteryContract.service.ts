import { formatEther } from "ethers/lib/utils";
import { addressList } from "../config/addressList";
import { Lottery__factory, LottoCommu__factory } from "../typechain";
import { getSigner } from "../utils/getProviderSigner";
import { LotteryContract, LottoCommuContract } from "./contract.service";

const getLottoCommuContract = async () => {
  return await LottoCommuContract(addressList.LottoCommuContract);
};

const getLotteryContract = async () => {
  return await LotteryContract(addressList.LotteryContract);
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

const getIsWinEachRound = async (roundId: number) => {
  const contract = await getLottoCommuContract();
  const isWin = await contract.isWinEachRound(roundId);
  return isWin;
};

const getPrizePot = async () => {
  const roundId = await getRoundId();
  const lotteryId = await getLotteyIdEachRound(roundId);
  const balanceEachRound = await getBalanceEachRound(lotteryId);
  return Number(balanceEachRound);
};

// View

const getRoundId = async () => {
  const contract = await getLottoCommuContract();
  const roundId = await contract.roundId();
  return roundId.toNumber();
};

const getLotteyIdEachRound = async (roundId: number) => {
  const contract = await getLottoCommuContract();
  const lotteryId = await contract.lotteryIdEachRound(roundId);
  return lotteryId.toNumber();
};

const getBalanceEachRound = async (lotteryId: number) => {
  const contract = await getLotteryContract();
  const BalanceEachRound = await contract.balanceEachRound(lotteryId);
  return formatEther(BalanceEachRound);
};

const getTicketsEachRoundLottoCommu = async () => {
  const contract = await getLottoCommuContract();
  const roundId = await getRoundId();
  const BalanceEachRound = await contract.ticketsEachRound(roundId);
  return Number(BalanceEachRound);
};

const getMemberTicketAmount = async () => {
  const myAddress = await (await getSigner()).getAddress();
  const contract = await getLottoCommuContract();
  const roundId = await getRoundId();
  const memberTicketAmount = await contract.memberTicketsAmount(
    roundId,
    myAddress
  );
  return Number(memberTicketAmount);
};

const LottoCommuContractService = {
  buyTicketDAO,
  claimLotteryReward,
  claim,
  getRoundId,
  getPrizePot,
  getIsWinEachRound,
  getTicketsEachRoundLottoCommu,
  getMemberTicketAmount,
};

export default LottoCommuContractService;
