import React from "react";

const Team = () => {
  return (
    <div
      id="team"
      className="border-b border-white py-[40px] sm:px-[40px] px-[20px] font-lexend"
    >
      <h3 className="font-bold md:text-5xl sm:text-3xl text-2xl mb-[50px] text-[#f1f1f1]">
        TEAM
      </h3>

      <div className="max-w-[800px] mx-auto grid sm:grid-cols-3 grid-cols-2 gap-5">
        {/* <a href="https://www.instagram.com/tradewithmathew/" target="_blank"> */}
        <div>
          <img
            src="/assets/images/cartier.jpg"
            alt=""
            className="rounded-[10px]"
          />
          <div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold sm:text-lg text-base text-white">
                Cartier
              </p>
              {/* <img
                  src="/assets/icons/instagram.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                /> */}
            </div>
            <p className="font-bold text-[#d7d7d7] sm:text-[12px] text-[10px]">
              Project Lead
            </p>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="https://www.instagram.com/sonny.trades/" target="_blank"> */}
        <div>
          <img
            src="/assets/images/montana.jpg"
            alt=""
            className="rounded-[10px]"
          />
          <div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold sm:text-lg text-base text-white">
                Montana
              </p>
              {/* <img
                  src="/assets/icons/instagram.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                /> */}
            </div>
            <p className="font-bold text-[#d7d7d7] sm:text-[12px] text-[10px]">
              Lead Developer
            </p>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="https://www.instagram.com/jaylaurentt/" target="_blank"> */}
        <div>
          <img
            src="/assets/images/soso.jpg"
            alt=""
            className="rounded-[10px]"
          />
          <div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold sm:text-lg text-base text-white">Soso</p>
              {/* <img
                  src="/assets/icons/instagram.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                /> */}
            </div>
            <p className="font-bold text-[#d7d7d7] sm:text-[12px] text-[10px]">
              Main Artist
            </p>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="https://www.instagram.com/thetylercruz/" target="_blank"> */}
        <div>
          <img
            src="/assets/images/roman.jpg"
            alt=""
            className="rounded-[10px]"
          />
          <div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold sm:text-lg text-base text-white">Roman</p>
              {/* <img
                  src="/assets/icons/instagram.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                /> */}
            </div>
            <p className="font-bold text-[#d7d7d7] sm:text-[12px] text-[10px]">
              Mafia Member
            </p>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="https://landvault.io/" target="_blank"> */}
        <div>
          <img
            src="/assets/images/gryofish.jpg"
            alt=""
            className="rounded-[10px]"
          />
          <div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold sm:text-lg text-base text-white">
                Gryofish
              </p>
              {/* <img
                  src="/assets/icons/monitor.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                /> */}
            </div>
            <p className="font-bold text-[#d7d7d7] sm:text-[12px] text-[10px]">
              Mafia Member
            </p>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="https://www.gsd3d.club/nft" target="_blank">
          {/* <div>
            <img
              src="https://www.angryapesunited.com/static/media/GSD.55fdacb8.png"
              alt=""
              className="rounded-[10px]"
            />
            <div>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold sm:text-lg text-base text-white">
                  GSD 3D CLUB
                </p>
                <img
                  src="/assets/icons/monitor.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                />
              </div>
              <p className="font-bold text-[#d7d7d7] sm:text-[12px] text-[10px]">
                Art & Development
              </p>
            </div>
          </div> */}
        {/* </a>  */}
      </div>
    </div>
  );
};

export default Team;
