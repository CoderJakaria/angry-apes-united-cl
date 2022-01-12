import React from "react";
import FaqItem from "./FaqItem";

const Faqs = () => {
  return (
    <div id="faq" className="py-[40px] sm:px-[40px] px-[20px] font-lexend">
      <h3 className="font-bold md:text-5xl sm:text-3xl text-2xl mb-[50px] text-[#f1f1f1]">
        FAQ
      </h3>

      <FaqItem
        title="What is Meta Mafia?"
        description="Meta Mafia is an exclusive NFT project featuring 4,444 unique Mafia Members that have a combined mixture of rare and authentic art, backed by a special Utility for holders. The Meta Mafia is creating an exclusive community that will reside on the NetVRk metaverse."
      />
      <FaqItem
        title="When is the release date?"
        description="The Meta Mafia Collection will officially release to the public once the announcement is made. For more information join our Discord!"
      />
      {/* <FaqItem
        title="Where can I buy an Meta Mafia?"
        description="Minting will be available through our official website and smart contract address only. (Official smart contract will be provided by our team on launch day in our Discord!) On minting day, you will be able to purchase an Meta Mafia at a cost of 0.075 ETH. This can change depending on the price of ETH during launch. Once minting is over, you’ll be able to showcase on your OpenSea account."
      />
      <FaqItem
        title="What makes us different?"
        description="We’ve worked with some of the best artists and developers for over the last 2 months to create unique and authentic pieces of art. What makes this project really unique and special is the utility behind it! Be sure to check out our roadmap and White paper."
      />
      <FaqItem
        title="Who is the team?"
        description="We have a very great team from serial entrepreneurs, to marketing experts, top designers, video game developers, NFT advisors, and great community managers. Join our official Discord to learn more about us!"
      /> */}
    </div>
  );
};

export default Faqs;
