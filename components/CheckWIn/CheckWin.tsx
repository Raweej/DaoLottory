import { id } from "ethers/lib/utils";
import { useState } from "react";
import useLottoStore from "../../store/useLotto.store";

const CheckWin = () => {
  const { getIsWinEachRound, isWin, roundId, claimReward } = useLottoStore();

  const [claimLoading, setClaimLoading] = useState<boolean>(false);
  const [checkLoading, setCheckLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [round, setRound] = useState<number | undefined>(undefined);

  const handleCheckRound = async () => {
    setCheckLoading(true);
    if (round) {
      await getIsWinEachRound(round);
      setChecked(true);
    }
    setCheckLoading(false);
  };

  const handleClaim = async () => {
    setClaimLoading(true);
    if (round) {
      await claimReward(round);
    }
    setClaimLoading(false);
  };

  return (
    <section className="w-full bg-[#0E0D32] h-[600px]">
      <div className="container grid justify-center mx-auto h-full w-full">
        <div className="text-center text-4xl text-yellow-500 place-self-center">
          <div> Are you a winner ? </div>
          <div className="p-5 mt-10 w-[410px] rounded-[20px] h-[336px] bg-[#181741] flex flex-col gap-5">
            <div>Put round</div>
            <input
              placeholder="round"
              type="number"
              className="bg-white rounded-md text-black px-2 text-base py-2"
              onChange={(e) => setRound(Number(e.target.value))}
            />

            <div className="flex h-11 justify-center items-center">
              {checked && (
                <div className="text-lg text-white">
                  {isWin ? "Win" : "Lose"}
                </div>
              )}
            </div>

            {
              <button
                onClick={handleCheckRound}
                className="p-3 w-[170px] text-base text-black font-bold rounded-[20px] place-self-center bg-gradient bg-gradient-to-l from-[#F9A424] to-[#F9D724]"
              >
                {checkLoading ? "Loading ..." : "Check"}
              </button>
            }
            {checked && isWin && (round !== 0 || round !== undefined) && (
              <button
                onClick={handleClaim}
                className="p-3 w-[170px] text-base text-black font-bold rounded-[20px] place-self-center bg-gradient bg-gradient-to-l from-[#F9A424] to-[#F9D724]"
              >
                {claimLoading ? "Loading ..." : "Claim"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CheckWin;
