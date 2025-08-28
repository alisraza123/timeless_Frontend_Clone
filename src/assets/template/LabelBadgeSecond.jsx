import React from "react";

const LabelBadgeSecond = ({ label,bgColor }) => {
  return (
    <span className={`font-bold w-fit p-[2px] px-2 rounded-2xl ${bgColor} text-white text-[12px]`}>
      {label}
    </span>
  );
};

export default LabelBadgeSecond;
