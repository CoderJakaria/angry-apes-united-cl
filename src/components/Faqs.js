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
    </div>
  );
};

export default Faqs;
