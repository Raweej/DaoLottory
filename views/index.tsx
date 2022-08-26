import Head from "next/head";
import React, { useEffect } from "react";
import BuyTicket from "../components/BuyTicket/BuyTicket";
import CheckWin from "../components/CheckWIn/CheckWin";
import Navbar from "../components/nav/navbar";
import Main from "../layouts/main";
import useLottoStore from "../store/useLotto.store";

const Lottory = () => {
  let prizes = 0;
  let round = 0;
  let ticket = 0;

  const textFooter = ["wallet", "About us", "How to use", "Contact", "FAQs"];

  const { refetch, prizePot } = useLottoStore();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Head>
        <title>Dao-Lottory</title>
      </Head>
      <Navbar />

      <section className=" bg-[#0E0D32]">
        <div className="w-full h-[400px] bg-ball bg-no-repeat bg-cover">
          <div className="container flex flex-col items-center justify-center mx-auto h-full ">
            <div className="place-self-center">
              <div className="text-center text-white">
                <p className="p-4 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-t from-[#F9A424] to-[#F9F024]">
                  DAO
                  <span className="text-white">LOTTORY</span>
                </p>
                <p className="text-4xl ">
                  <span className="mr-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#F9A424] to-[#F9F024]">
                    {prizePot}
                  </span>
                  in prizes
                </p>
              </div>
            </div>
            {/* <button className="place-self-center p-2 mt-5 bg-gradient-to-l from-[#F9A424] to-[#F9D724] rounded-[18px] w-[241px] cursor-pointer">
              BUY TICKET
            </button> */}
          </div>
        </div>
        
      </section>

      <BuyTicket />
      <CheckWin />

      <section className="w-full h-[400px] bg-[#181741]">
        <div className="container flex flex-col gap-10 justify-center mx-auto h-full w-full">
          <div className="place-self-center text-center">
            <div className="flex text-2xl text-white font-bold justify-center">
              <span className="text-yellow-500">DAO</span>
              LOTTORY
            </div>
            <p className="text-white opacity-50 mt-5">
              Enjoy with DAO LOTTERY and Good luck!
            </p>
          </div>
          <div className="flex justify-center gap-10">
            {textFooter.map((item, i) => (
              <div key={i} className="text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lottory;
