import React from "react";

const LabelBadge = ({ label }) => {
  return (
    <span className="w-fit p-1 px-2 rounded-2xl bg-iconBg text-white text-base">
      {label}
    </span>
  );
};

export default LabelBadge;
