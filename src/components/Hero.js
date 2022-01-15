import React from "react";

const Hero = () => {
  return (
    <div className="hero_image relative w-full h-0 lg:pt-[40%] md:pt-[50%] sm:pt-[60%] pt-[70%] font-lexend">
      <div className="flex flex-col absolute bottom-0 w-full">
        <a
          href="https://opensea.io/collection/angryapesunited"
          className="text-[#d7d7d7] no-underline font-normal text-base max-w-[200px] mx-auto text-center py-2 px-10 rounded-sm border border-white bg-black mb-3"
          target="_blank"
        >
          Mint
        </a>
        <h2 className="font-bold text-white md:text-[32px] sm:text-2xl text-lg mx-auto">
          COUNTDOWN TO PUBLIC SALE
        </h2>

        <ul className="mx-auto whitespace-nowrap mb-[32px] pl-0">
          <li className="inline-block mt-[10px] sm:mr-[32px] mr-[20px]">
            <h3 className="text-center text-white md:text-[32px] sm:text-2xl text-lg font-bold">
              0
            </h3>
            <h4 className="font-bold text-white text-center md:text-[22px] sm:text-lg text-base uppercase">
              Days
            </h4>
          </li>
          <li className="inline-block mt-[10px] sm:mr-[32px] mr-[20px]">
            <h3 className="text-center text-white md:text-[32px] sm:text-2xl text-lg font-bold">
              0
            </h3>
            <h4 className="font-bold text-white text-center md:text-[22px] sm:text-lg text-base] uppercase">
              Hours
            </h4>
          </li>
          <li className="inline-block mt-[10px] sm:mr-[32px] mr-[20px]">
            <h3 className="text-center text-white md:text-[32px] sm:text-2xl text-lg] font-bold">
              0
            </h3>
            <h4 className="font-bold text-white text-center md:text-[22px] sm:text-lg text-base uppercase">
              Minutes
            </h4>
          </li>
          <li className="inline-block mt-[10px]">
            <h3 className="text-center text-white md:text-[32px] sm:text-2xl text-lg font-bold">
              0
            </h3>
            <h4 className="font-bold text-white text-center md:text-[22px] sm:text-lg text-base uppercase">
              Seconds
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
