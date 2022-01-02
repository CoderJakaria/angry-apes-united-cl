import React from "react";

const SocialHero = () => {
  return (
    <div className="flex items-center justify-between bg-black w-full h-24 border-t border-b border-white">
      <div className="flex items-center justify-between w-full">
        <a
          className="border-r border-white  w-full h-24 flex items-center justify-center"
          href="https://twitter.com/angryapesunited"
        >
          <img
            src="/assets/icons/twitter.png"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </a>
        <a
          className="border-r border-white  w-full h-24 flex items-center justify-center"
          href="https://www.instagram.com/angryapesunitednft"
        >
          <img
            src="/assets/icons/instagram.png"
            alt=""
            className="h-7 w-7 object-contain"
          />
        </a>
        <a
          className="border-r border-white  w-full h-24 flex items-center justify-center"
          href="https://discord.gg/angryapesunitednft"
        >
          <img
            src="/assets/icons/discord.png"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </a>
        <a
          className="border-r border-white  w-full h-24 flex items-center justify-center"
          href="https://opensea.io/collection/angryapesunited"
        >
          <img
            src="/assets/icons/opensea.jpg"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </a>
        <a
          className="border-r border-white  w-full h-24 flex items-center justify-center"
          href="https://etherscan.io/address/0x9546eeb89df8f010da4953c2ef456e282b3db25a"
        >
          <img
            src="/assets/icons/etherscan.jpg"
            alt=""
            className="h-9 w-9 object-contain"
          />
        </a>
      </div>

      <div className="flex justify-center items-center w-full md:flex hidden">
        <a
          href="https://angry-apes.gitbook.io/angry-apes-united/"
          className="lg:text-[48px] text-[30px] font-bold text-white font-lexend"
        >
          White Paper
        </a>
      </div>
    </div>
  );
};

export default SocialHero;
