import React from "react";
import LabelBadge from "./LabelBadge"; // assuming you already have this

const WorkCard = ({ imageSrc, imageAlt, title, subtitle, label }) => {
  return (
    <div>
      <div className="relative mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-[400px] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl">{title}</h1>
          <p className="text-lightText">{subtitle}</p>
        </div>
        <div>
          <LabelBadge label={label} />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
