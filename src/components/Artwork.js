import React from "react";

const Artwork = () => {
  return (
    <div className="lg:flex border-b border-white py-[25px] px-[40px] font-lexend">
      <div className="w-full flex flex-col items-center text-white lg:pr-[40px] lg:mb-0 mb-5">
        <h3 className="font-bold md:text-5xl sm:text-3xl text-2xl text-center">
          THE ARTWORK
        </h3>
        <p className="font-bold sm:text-[22px] text-base text-center mt-[50px] mb-5">
          Meta Mafia is a Decentralized Autonomous Organization (DAO) operating
          on the metaverse
        </p>

        <p className="sm:text-base text-sm font-normal text-center mb-5">
          Our primary purpose is to enrich the organization and its active
          members. Hierarchy is fully dynamic, and the very top is achievable by
          anyone who owns at least one Meta Mafia NFT. The core of the Mafia
          consists of various social relations between our members. How did you
          get that position? Do you have valuable skills, extraordinary charm,
          or did you simply bribe one of the top dogs?
        </p>
      </div>

      <div className="grid grid_artwork gap-[10px] ">
        <img
          src="https://app.metamafia.co/assets/img/sample3.jpg"
          alt=""
          className="rounded-[10px]"
        />
        <img
          src="https://app.metamafia.co/assets/img/sample2.jpg"
          alt=""
          className="rounded-[10px]"
        />
        <img
          src="https://app.metamafia.co/assets/img/sample1.jpg"
          alt=""
          className="rounded-[10px]"
        />
        <img
          src="https://app.metamafia.co/assets/img/sample0.jpg"
          alt=""
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Artwork;
