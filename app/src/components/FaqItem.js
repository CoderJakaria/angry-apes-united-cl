import React, { useState } from "react";

const FaqItem = ({ title, description }) => {
  const [isActive, setisActive] = useState(false);
  return (
    <>
      <div
        className="w-full py-5 sm:px-8 px-3 cursor-pointer border-b border-white font-lexend"
        onClick={() => setisActive(!isActive)}
      >
        <div className="flex items-center justify-between">
          <h4 className="md:text-[32px] sm:text-[25px] text-[20px] font-bold text-white">
            {title}
          </h4>
          <img
            src="/assets/icons/plus.png"
            alt=""
            className={`h-5 w-5 object-contain transition duration-300 ${
              isActive && "rotate-45"
            }`}
          />
        </div>

        {isActive && (
          <div
            className="w-full text-white py-4 cursor-pointer sm:text-base text-sm font-normal"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {description}
          </div>
        )}
      </div>
    </>
  );
};

export default FaqItem;
