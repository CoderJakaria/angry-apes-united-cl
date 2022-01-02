import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="bg-gray-800 font-lexend border-b border-white">
      <div className="relative w-screen h-[80px] flex items-center justify-between">
        <div className=" flex items-center justify-between h-full border-r border-white">
          <div className="flex items-center w-full px-5">
            <img
              src="https://cdn.discordapp.com/attachments/816110432900481045/894726149312245810/unknown.png"
              alt=""
              className="block w-auto h-[40px]"
            />
            <h3 className="font-bold text-[22px] text-white ml-3 xl:block hidden">
              ANGRY APES UNITED
            </h3>
          </div>
        </div>

        <img
          src="/assets/icons/hamburger.png"
          alt="hamburger"
          className="h-[40px] w-[40px] mr-[25px] lg:hidden object-cover cursor-pointer"
          onClick={() => setShowNav(true)}
        />

        <div className={`flex items-center lg:flex hidden `}>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Mint
          </a>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Story
          </a>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Featured Apes
          </a>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Roadmap
          </a>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            $JUNGLE
          </a>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Team
          </a>
          <a
            href="Mint"
            className="text-[#d7d7d7] no-underline font-normal text-base"
          ></a>

          <a
            href="#faq"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-[30px]"
          >
            FAQ
          </a>

          <a
            href="https://opensea.io/collection/angryapesunited"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-[30px] py-2 px-3 border border-white"
            target="_blank"
          >
            Public Sale - SOLD OUT
          </a>
        </div>

        {showNav && (
          <div>
            <img
              src="/assets/icons/close.png"
              alt="hamburger"
              className="h-[20px] w-[20px] lg:hidden block object-contain absolute right-[35px] z-[10000] cursor-pointer"
              onClick={() => setShowNav(false)}
            />
            <div className={`flex items-center lg:hidden flex header_navs`}>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Mint
              </a>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Story
              </a>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Featured Apes
              </a>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Roadmap
              </a>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                $JUNGLE
              </a>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Team
              </a>
              <a
                href="Mint"
                className="text-[#d7d7d7] no-underline font-normal text-base"
              ></a>

              <a
                href="#faq"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-[30px] mb-4"
              >
                FAQ
              </a>

              <a
                href="https://opensea.io/collection/angryapesunited"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-[30px] py-2 px-3 border border-white"
                target="_blank"
              >
                Public Sale - SOLD OUT
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;