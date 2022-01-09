import React from "react";
import FaqItem from "./FaqItem";

const Faqs = () => {
  return (
    <div id="faq" className="py-[40px] sm:px-[40px] px-[20px] font-lexend">
      <h3 className="font-bold md:text-5xl sm:text-3xl text-2xl mb-[50px] text-[#f1f1f1]">
        FAQ
      </h3>

      <FaqItem
        title="What is Angry Mafia Member United?"
        description="Angry Mafia Member United is an exclusive NFT project featuring 8,888 unique Mafia Member that have a combined mixture of rare and authentic art, backed by a special Utility for holders. We are creating an unmatched community where holders have the opportunity to not only meet up in person, but also in the Metaverse where they have the potential to earn additional crypto assets!"
      />
      <FaqItem
        title="When is the release date?"
        description="The Angry Mafia Member United Collection will officially release to the public on November 10th. Pre Sale begins November 8th. For more information join our Discord!"
      />
      <FaqItem
        title="Where can I buy an Angry Ape?"
        description="Minting will be available through our official website and smart contract address only. (Official smart contract will be provided by our team on launch day in our Discord!) On minting day, you will be able to purchase an Angry Ape at a cost of 0.075 ETH. This can change depending on the price of ETH during launch. Once minting is over, you’ll be able to showcase on your OpenSea account."
      />
      <FaqItem
        title="What makes us different?"
        description="We’ve worked with some of the best artists and developers for over the last 2 months to create unique and authentic pieces of art. What makes this project really unique and special is the utility behind it! Be sure to check out our roadmap and White paper."
      />
      <FaqItem
        title="Who is the team?"
        description="We have a very great team from serial entrepreneurs, to marketing experts, top designers, video game developers, NFT advisors, and great community managers. Join our official Discord to learn more about us!"
      />
    </div>
  );
};

export default Faqs;
