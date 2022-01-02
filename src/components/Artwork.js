import React from "react";

const Artwork = () => {
  return (
    <div className="lg:flex border-b border-white py-[25px] px-[40px] font-lexend">
      <div className="w-full flex flex-col items-center text-white lg:pr-[40px] lg:mb-0 mb-5">
        <h3 className="font-bold md:text-5xl sm:text-3xl text-2xl text-center">
          THE ARTWORK
        </h3>
        <p className="font-bold sm:text-[22px] text-base text-center mt-[50px] mb-5">
          Angry Apes United is a unique NFT collection of 8,888 Angry Apes
          generated from over 170+ hand drawn traits. The team and artists have
          worked on this project for over 2 months now, focusing on the
          development and quality of art.
        </p>

        <p className="sm:text-base text-sm font-normal text-center mb-5">
          Our goal is to stand out from all other projects and focus on the
          quality and beauty of art. Some traits will be common, rare, super
          rare, and ultra rare. Meaning they will appear from a variety of
          times, to several times, to only once. All Angry Apes are custom
          generated and will be launching on the Ethereum Blockchain.
        </p>

        <p className="sm:text-base text-sm font-normal text-center">
          Minting will take place on November 10th. Pre sale begins November
          8th. On launch day you’ll be able to mint an Angry Ape at the price of
          0.075 ETH. This can change depending on the price of ETH during
          launch.
        </p>
      </div>

      <div className="grid grid_artwork gap-[10px] ">
        <img
          src="https://www.angryapesunited.com/static/media/Featured1.3cbc6ceb.jpeg"
          alt=""
          className="rounded-[10px]"
        />
        <img
          src="https://www.angryapesunited.com/static/media/Featured3.4261e5dc.jpg"
          alt=""
          className="rounded-[10px]"
        />
        <img
          src="https://www.angryapesunited.com/static/media/Featured4.3255cccf.jpg"
          alt=""
          className="rounded-[10px]"
        />
        <img
          src="https://www.angryapesunited.com/static/media/Featured6.504662c6.jpg"
          alt=""
          className="rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default Artwork;
