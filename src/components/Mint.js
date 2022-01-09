import React, { useState } from "react";

const Mint = () => {
  const [mintCount, setMintCount] = useState(0);
  return (
    <div
      id="mint"
      className="text-center pt-5 w-full scroll-mt-[200px] border-b border-white font-lexend"
    >
      <img
        src="/assets/images/prods.gif"
        alt=""
        className="rounded-[10px] sm:w-[588px] sm:h-[588px] mx-auto"
      />

      <div className="sm:w-[588px] h-[524] my-[64px] mx-auto p-[32px] bg-[#131313] rounded-[10px]">
        <div>
          <div className="flex items-center">
            <div className="text-left">
              <h4 className="font-bold text-[#f1f1f1] sm:text-[32px] text-[25px]">
                CLAIM YOUR MAFIA MEMBER
              </h4>
              <p className="font-normal sm:text-base text-sm text-white">
                Enter how many mafia member you would like to mint here
              </p>
            </div>
            <img
              src="/assets/images/9.png"
              alt=""
              className="w-[90px] h-[90px] mr-0 ml-auto object-cover"
            />
          </div>

          <div className="flex p-[12px] border border-white rounded-[10px] my-[32px]">
            <img
              src="/assets/images/prods.gif"
              alt=""
              className="w-[112px] h-[112px] rounded-[10px]"
            />
            <div className="text-right text-white m-auto mr-0">
              <p className="font-normal sm:text-base text-sm">
                Price Per Mafia Member
              </p>
              <h5 className="font-bold sm:text-[22px] text-base">
                0.075 ETH Each
              </h5>
              <p className="font-normal sm:text-base text-sm">
                Public sale available 11.10.2021
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center p-3 bg-[hsla(0,0%,48.2%,.41)] border border-white box-border rounded-[10px] mb-[32px] text-center">
            <div className="flex items-center text-white space-x-3">
              <img
                src="/assets/icons/minus.png"
                alt=""
                className="sm:w-[20px] w-[15px] sm:h-[20px] h-[15px] object-contain cursor-pointer"
                onClick={() => {
                  if (mintCount > 0) {
                    setMintCount(mintCount - 1);
                  }
                }}
              />
              <h4 className="font-bold sm:text-[28px] text-[20px]">
                {mintCount}
              </h4>
              <img
                src="/assets/icons/plus.png"
                alt=""
                className="sm:w-[20px] w-[15px] sm:h-[20px] h-[15px] object-contain cursor-pointer"
                onClick={() => {
                  if (mintCount < 20) {
                    setMintCount(mintCount + 1);
                  }
                }}
              />
            </div>

            <h5 className="font-bold sm:text-[22px] text-lg text-white">
              20 Max
            </h5>
          </div>

          <div className="flex items-center justify-between pb-[20px] border-t border-b border-white pt-[20px]">
            <p className="font-normal sm:text-base text-sm text-white">Total</p>
            <h5 className="font-bold sm:text-[22px] text-lg text-white">
              {mintCount * 0.075} ETH
            </h5>
          </div>

          <div className="w-full bg-[#f1f1f1] rounded-[10px] p-[11px] cursor-pointer text-black mt-[30px]">
            <a
              href="https://opensea.io/collection/angryapesunited"
              className="font-medium sm:text-2xl text-xl"
            >
              MINT NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
