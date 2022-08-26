import { StoreApi } from "zustand";
import create from "zustand";
import LottoCommuContractService from "../services/lotteryContract.service";

interface IUseLottoStore {
  roundId: number;
  prizePot: number;
  prizePerTicket: number;
  ticketEachRound: number;
  amountMyTicket: number;
  isWin: boolean;
  getRoundId: () => void;
  getPrizePot: () => void;
  getPrizePerTicket: () => void;
  getMemberTicketAmount: () => void;
  refetch: () => void;
  getIsWinEachRound: (roundId: number) => void;
  claimReward: (roundId: number) => void;
}

const initialState = {
  roundId: 0,
  prizePot: 0,
  prizePerTicket: 0,
  ticketEachRound: 0,
  amountMyTicket: 0,
  isWin: false,
};

const useLottoStore = create<IUseLottoStore>(
  (
    set: StoreApi<IUseLottoStore>["setState"],
    get: StoreApi<IUseLottoStore>["getState"]
  ) => ({
    ...initialState,
    refetch: async () => {
      await get().getRoundId();
      await get().getPrizePot();
      await get().getPrizePerTicket();
      await get().getMemberTicketAmount();
    },
    getRoundId: async () => {
      const roundId = await LottoCommuContractService.getRoundId();
      set({ roundId });
    },
    getPrizePot: async () => {
      const prizePot = await LottoCommuContractService.getPrizePot();
      set({ prizePot });
    },
    getPrizePerTicket: async () => {
      const ticketEachRound =
        await LottoCommuContractService.getTicketsEachRoundLottoCommu();
      if (ticketEachRound > 0) {
        const prizePerTicket = get().prizePot / ticketEachRound;
        set({ prizePerTicket });
      }
      set({ ticketEachRound });
    },
    getMemberTicketAmount: async () => {
      const amountMyTicket =
        await LottoCommuContractService.getMemberTicketAmount();
      console.log("Test", amountMyTicket);
      set({ amountMyTicket });
    },
    getIsWinEachRound: async (roundId: number) => {
      const isWin = await LottoCommuContractService.getIsWinEachRound(roundId);
      set({ isWin });
    },
    claimReward: async (roundId: number) => {
      await LottoCommuContractService.claim(roundId);
      await get().refetch();
    },
  })
);

export default useLottoStore;
