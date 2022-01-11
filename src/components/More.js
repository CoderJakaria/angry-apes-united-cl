import React from "react";

const More = () => {
  return (
    <div className="border-b border-white py-[40px] sm:px-[40px] px-[20px] font-lexend">
      <h3 className="font-bold md:text-5xl sm:text-3xl text-2xl mb-[50px] text-[#f1f1f1] text-center">
        MORE TO COME
      </h3>

      <div className="grid md:grid-cols-3 grid-cols-1 font-lexend gap-5">
        <div className="text-center flex flex-col justify-center">
          <img
            src="/assets/images/9.png"
            alt=""
            className="block w-auto h-[80px] object-contain mb-2"
          />

          <h4 className="md:text-[32px] sm:text-[25px] text-[20px] font-bold text-white mb-2">
            Metaverse Expansion
          </h4>
          <p className="sm:text-base text-sm font-normal text-white">
            The Meta Mafia has many plans for the virtual world! As we develop
            our estate directly with the NetVRk metaverse, the Meta Mafia also
            looks to continue expanding into other metaverses to stay relevant
            in the fast-paced digital economy.
          </p>
        </div>

        <div className="text-center flex flex-col justify-center">
          <img
            src="/assets/icons/gamepad.png"
            alt=""
            className="block w-auto h-[40px] object-contain mb-2"
          />

          <h4 className="md:text-[32px] sm:text-[25px] text-[20px] font-bold text-white mb-2">
            Play to Earn
          </h4>
          <p className="sm:text-base text-sm font-normal text-white">
            Along with the initial interactive, PvP, and arcade type gaming
            experiences that will be developed on our land, we will continue to
            innovate and add NEW gaming experiences along the way providing even
            more opportunities for our holders and guest to play and earn
            additional crypto assets!
          </p>
        </div>

        <div className="text-center flex flex-col justify-center">
          <img
            src="/assets/icons/heart.png"
            alt=""
            className="block w-auto h-[40px] object-contain mb-2"
          />

          <h4 className="md:text-[32px] sm:text-[25px] text-[20px] font-bold text-white mb-2">
            Community Charity Events
          </h4>
          <p className="sm:text-base text-sm font-normal text-white">
            The Meta Mafia looks to host community events on their virtual
            estates where holders will have the ability to choose and donate
            towards the cause of their choice. These events will be held
            annually and community members will have a voting opportunity on
            which events will take place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;
