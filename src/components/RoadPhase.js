import React from "react";

const RoadPhase = ({ image, title, description, reverse }) => {
  return (
    <div className={`phase flex pb-10`}>
      <div
        className="image-div mr-[46px] w-[450px] "
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "0 50%",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="w-[50%] font-lexend">
        <h4 className="text-[22px] font-bold text-[#f1f1f1]">{title}</h4>
        <p className="w-full text-base font-normal text-[#f1f1f1]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RoadPhase;
