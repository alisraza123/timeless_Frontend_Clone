import React from "react";

const FancyButton = ({ label, width = 64, textSize = "text-xl" }) => {
  // Construct dynamic width class like "w-64"
  const widthClass = `w-${width}`;

  return (
    <button
      className={`group relative ${widthClass} h-14 bg-buttonBg rounded-full overflow-hidden flex items-center justify-between pr-2 `}
    >
      {/* Expanding Rounded BG */}
      <span
        className="absolute top-[.4rem] bottom-1 right-[.5rem] w-11 h-11 bg-white rounded-full z-0 
          transition-all duration-500 ease-in-out
          group-hover:w-[94%]"
      ></span>

      {/* Text */}
      <span
        className={`relative z-10 text-black font-normal tracking-wide px-4 transition-colors duration-500 group-hover:text-black ml-2 ${textSize} tracking-tighter`}
      >
        {label}
      </span>

      {/* Arrow */}
      <span className="relative z-10 flex items-center justify-center w-11 h-11 bg-white text-black rounded-full shrink-0">
        <span className="relative block w-4 h-[2px] bg-transparent">
          <span
            className="absolute top-[-0.25rem] right-[0.2rem] w-2.5 h-2.5 border-t-2 border-r-2 border-black rotate-45"
          ></span>
        </span>
      </span>
    </button>
  );
};

export default FancyButton;
