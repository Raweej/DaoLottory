import { useState } from "react";

const BuyTicket = () => {
  let prizes = 0;
  let round = 0;
  let ticket = 0;
  let prizePot = 0;

  const [amountTicket, setAmountTicket] = useState<number>(0.0);

  const handleBuyTicket = () => {
    //   TODO: Call BuyTicketDao
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
                #{round}
              </div>
            </div>
          </div>

          <div className="grid bg-[#0E0D32] rounded-b-[20px] p-5 gap-5">
            <div className="flex">
              <div className="text-yellow-500 p-5">
                Prizes Pot <span className="text-white">{prizePot}</span>{" "}
              </div>
            </div>
            <div className="flex justify-between text-yellow-500">
              <div className="flex items-center p-5">
                Your Ticket
                <p className="text-white ml-2">you have 0 ticket this round</p>
              </div>
              <div className="flex items-center">
                <div>
                  Dao Members: <span className="text-white">{ticket}</span>{" "}
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
            <button className="p-3 w-[170px] font-bold rounded-[20px] place-self-center bg-gradient bg-gradient-to-l from-[#F9A424] to-[#F9D724]">
              Buy tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyTicket;
