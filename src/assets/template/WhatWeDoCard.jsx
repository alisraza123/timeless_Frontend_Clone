import React from "react";
import { FaRegEye } from "react-icons/fa";

const WhatWeDoCard = () => {
  return (
    <div className="h-[300px] p-6 flex flex-col gap-12 bg-cardBg rounded-xl">
      <div className="w-fit px-4 py-4 bg-iconBg rounded-full">
        <FaRegEye className="text-white text-xl" />
      </div>

      <div className="flex flex-col items-start gap-2 px-1">
        <h1 className="font-bold text-lg">Brand Strategy</h1>
        <p className="text-gray-600 text-justify text-base">
          Developing a tailored roadmap that defines your brand’s voice, vision,
          and positioning in the luxury market.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
