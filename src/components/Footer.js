import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black sm:justify-center py-[40px] sm:px-[40px] px-[20px] font-lexend grid sm:grid-cols-3 grid-cols-2">
        <div className="sm:block hidden">
          <img src="/assets/images/logo2.png" alt="" className="w-[144px]" />
        </div>

        <div>
          <h5 className="font-bold sm:text-[22px] text-base text-white">
            Quick Links
          </h5>
          <br />

          <a
            href="https://discord.com/invite/angryapesunited-nft"
            rel="noreferrer"
            target="_blank"
            className="font-normal sm:text-base text-sm text-white mb-3 block"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/angryapesunited"
            rel="noreferrer"
            target="_blank"
            className="font-normal sm:text-base text-sm text-white mb-3 block"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/angryapesunited/"
            rel="noreferrer"
            target="_blank"
            className="font-normal sm:text-base text-sm text-white mb-3 block"
          >
            Instagram
          </a>
          <a
            href="https://opensea.io/collection/angryapesunited"
            rel="noreferrer"
            target="_blank"
            className="font-normal sm:text-base text-sm text-white mb-3 block"
          >
            OpenSea
          </a>
          <a
            href="https://etherscan.io/address/0x9546eeb89df8f010da4953c2ef456e282b3db25a"
            rel="noreferrer"
            target="_blank"
            className="font-normal sm:text-base text-sm text-white"
          >
            Etherscan
          </a>
        </div>

        <div>
          <h5 className="font-bold sm:text-[22px] text-base text-white">
            Company
          </h5>
          <br />

          <a
            href="https://angry-apes.gitbook.io/angry-apes-united/"
            rel="noreferrer"
            target="_blank"
            className="font-normal sm:text-base text-sm text-white mb-3 block"
          >
            White Paper
          </a>
          <a
            href="mailto:contactus@angryapesunited.com"
            className="font-normal sm:text-base text-sm text-white mb-3 block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
