import React from "react";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="border-b border-white py-[40px] sm:px-[40px] px-0 font-lexend"
    >
      <h3 className="font-bold md:text-5xl sm:text-4xl text-3xl mb-[50px] text-[#f1f1f1] text-center">
        ROADMAP
      </h3>

      {/* Roadmap wrapper */}
      <div className="max-w-[800px] mx-auto">
        <div className="phase sm:flex pb-[50px] items-center">
          <div className="flex-[0.5] flex justify-center">
            <img src="/assets/images/percentages/1.svg" alt="" />
          </div>

          <div className="flex-[0.5] font-lexend sm:px-0 px-5">
            <h4 className="text-[22px] font-bold text-[#f1f1f1]">
              START OF A LONG ROAD
            </h4>
            <p className="w-full text-base font-normal text-[#f1f1f1]">
              The metaverse is vast and the Mafia must expand its business.
              Shortly post-launch roles will be assigned fitting each member's
              skillset and dedication. Leadership roles can't be bought and must
              be earned. Regional cliqa leaders will get special access to
              voting rights and allocation of funds from the common Off-Shore
              bank account. A part of the proceeds from the primary sales will
              be allocated to start off our organization.
            </p>
          </div>
        </div>

        <div className="phase sm:flex flex-row-reverse pb-[50px] items-center">
          <div className="flex-[0.5] flex justify-center">
            <img src="/assets/images/percentages/2.svg" alt="" />
          </div>

          <div className="flex-[0.5] font-lexend sm:px-0 px-5">
            <h4 className="text-[22px] font-bold text-[#f1f1f1]">
              dApp ROLL-OUT
            </h4>
            <p className="w-full text-base font-normal text-[#f1f1f1]">
              The Mafia's techies will focus on creating many valuable dApps and
              protocols for its members. The proceeds from this will fuel many
              future ventures, as well as enrich the users themselves.
            </p>
          </div>
        </div>

        <div className="phase sm:flex pb-[50px] items-center">
          <div className="flex-[0.5] flex justify-center">
            <img src="/assets/images/percentages/3.svg" alt="" />
          </div>

          <div className="flex-[0.5] font-lexend sm:px-0 px-5">
            <h4 className="text-[22px] font-bold text-[#f1f1f1]">
              RACKETEERING
            </h4>
            <p className="w-full text-base font-normal text-[#f1f1f1]">
              Once we have established a name for ourselves, the Racketeering
              will start. Subservient projects will be given the opportunity to
              be promoted by the Mafia. The spoils from these projects will not
              only go to the Common Off-shore Bank Account but will also be
              redistributed to all members who have engaged with the community
              in a given time period.
            </p>
          </div>
        </div>

        <div className="phase sm:flex flex-row-reverse pb-[50px] items-center">
          <div className="flex-[0.5] flex justify-center">
            <img src="/assets/images/percentages/4.svg" alt="" />
          </div>

          <div className="flex-[0.5] font-lexend sm:px-0 px-5">
            <h4 className="text-[22px] font-bold text-[#f1f1f1]">
              Cross-chain METAVERSE
            </h4>
            <p className="w-full text-base font-normal text-[#f1f1f1]">
              Cross-chain metaverse character implementation will make it
              possible for all Mafia members to exist in multiple metaverses.
              NetVRk will be our first partner. 15 ETH will be added and
              reserved for building and sculpting our land in NetVRk. During
              this period the true community engagement will take place. Clashes
              between local gang members surely will ensue.
            </p>
          </div>
        </div>

        <div className="phase sm:flex pb-[50px] items-center">
          <div className="flex-[0.5] flex justify-center">
            <img src="/assets/images/percentages/5.svg" alt="" />
          </div>

          <div className="flex-[0.5] font-lexend sm:px-0 px-5">
            <h4 className="text-[22px] font-bold text-[#f1f1f1]">
              ELITE Organization
            </h4>
            <p className="w-full text-base font-normal text-[#f1f1f1]">
              With the Mafia running multiple profitable, dividend-paying
              ventures at any given time, more and more individuals will seek to
              join our ranks. The high demand for our NFTs will inevitably lead
              to our members being regarded as the rightful elite of the
              Metaverse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
