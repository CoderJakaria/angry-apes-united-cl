import React, { useEffect, useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, []);
  return (
    <header
      className={`bg-black font-lexend border-b border-white transition duration-500 ${
        navActive ? "fixed top-0" : "sticky"
      } w-full z-[1000]`}
    >
      <div className="relative w-screen h-[80px] flex items-center justify-between">
        <div className=" flex items-center justify-between h-full border-r border-white">
          <div className="flex items-center w-full px-5">
            <img
              src="/assets/images/logo.png"
              alt=""
              className="block w-auto h-[40px]"
            />
            {/* <h3 className="font-bold text-[22px] text-white ml-3 xl:block hidden">
              ANGRY APES UNITED
            </h3> */}
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
            href="#mint"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Mint
          </a>
          <a
            href="#story"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Story
          </a>
          <a
            href="#featured-apes"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Featured Mafia
          </a>
          <a
            href="#roadmap"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Roadmap
          </a>
          {/* <a
            href="#jungle"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            $JUNGLE
          </a> */}
          <a
            href="#team"
            className="text-[#d7d7d7] no-underline font-normal text-base mr-4"
          >
            Team
          </a>

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
            Connect Wallet
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
                href="#mint"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Mint
              </a>
              <a
                href="#story"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Story
              </a>
              <a
                href="#featured-apes"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Featured Mafia
              </a>
              <a
                href="#roadmap"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Roadmap
              </a>
              {/* <a
                href="#jungle"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                $JUNGLE
              </a> */}
              <a
                href="#team"
                className="text-[#d7d7d7] no-underline font-normal text-base mr-4 sm:text-2xl text-lg mb-4"
              >
                Team
              </a>

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
                Connect Wallet
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
