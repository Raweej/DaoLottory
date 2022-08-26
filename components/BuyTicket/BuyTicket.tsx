import { ethers } from "ethers";
import { useState } from "react";
import LottoCommuContractService from "../../services/lotteryContract.service";
import LottoTokenService from "../../services/LottoTokenContract.service";
import useLottoStore from "../../store/useLotto.store";

const BuyTicket = () => {
  let ticket = 0;

  const { roundId, prizePerTicket, amountMyTicket, ticketEachRound, refetch } =
    useLottoStore();

  const [amountTicket, setAmountTicket] = useState<number>(0.0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleBuyTicket = async () => {
    setIsLoading(true);
    if (amountTicket > 0) {
      const allowance = await LottoTokenService.allowance();
      if (allowance.eq(0)) {
        await LottoTokenService.approve();
      }
      await LottoCommuContractService.buyTicketDAO(amountTicket);
      await refetch();
    }
    setIsLoading(false);
  };

  return (
    <section className="w-full bg-[#181741] h-[600px]">
      <div className="container grid justify-center mx-auto h-full w-full">
        <div className="text-4xl text-yellow-500 place-self-center ">
          Get your ticket now!
        </div>

        <div className="place-self-center w-full max-w-[867px] rounded-[20px]">
          <div className="flex justify-between bg-[#F9A424] p-5 rounded-t-[20px]">
            <div className="font-bold text-xl">Next draw</div>
            <div className="font-bold flex ">
              Round:
              <div className="ml-2 w-20 bg-black rounded-[20px] text-white text-center">
                #{roundId}
              </div>
            </div>
          </div>

          <div className="grid bg-[#0E0D32] rounded-b-[20px] p-5 gap-5">
            <div className="flex">
              <div className="text-yellow-500 p-5">
                Prizes Pot <span className="text-white">{prizePerTicket}</span>{" "}
              </div>
            </div>
            <div className="flex justify-between text-yellow-500">
              <div className="flex items-center p-5">
                Your Ticket
                <p className="text-white ml-2">
                  you have {amountMyTicket} ticket this round
                </p>
              </div>
              <div className="flex items-center">
                <div>
                  Dao Members:{" "}
                  <span className="text-white">{ticketEachRound}</span>{" "}
                </div>
                <div className="ml-2">tickets</div>
              </div>
            </div>
            <input
              className="mb-5 px-3 py-2 rounded-md"
              type="number"
              placeholder="amount ticket"
              onChange={(e) => setAmountTicket(Number(e.target.value))}
            />
            <button
              onClick={handleBuyTicket}
              disabled={isLoading}
              className={`p-3 w-[170px] font-bold rounded-[20px] place-self-center bg-gradient bg-gradient-to-l  ${
                isLoading
                  ? "from-[#8b8b8a] to-[#8b8b8a]"
                  : "from-[#F9A424] to-[#F9D724]"
              }`}
            >
              {isLoading ? "Loading ..." : "Buy tickets"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyTicket;
