import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LabelBadgeSecond from "./LabelBadgeSecond";

const BlogCard = ({ imgSrc, altText = "Image", heading, paragraph,bgColor, }) => {
  return (
    <div className="arrowDiv relative md:w-1/2 overflow-hidden rounded-l-xl group">
      {/* Arrow icon */}
      <FaArrowRight className="absolute text-white -top-4 right-3 z-[50] group-hover:top-3 group-hover:-rotate-45 transition-all duration-500 font-thin" />

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={imgSrc}
          alt={altText}
          className="md:h-[250px] h-[400px] object-cover hover:scale-110 transition-transform duration-300 w-full rounded-xl"
        />
      </div>

      {/* Conditional Text Section */}
      {(heading || paragraph) && (
        <div className="bg-white px-1 py-5 flex justify-between items-center">
          {heading && <h3 className="text-left text-base w-[70%] font-semibold">{heading}</h3>}
          {paragraph && <LabelBadgeSecond label={paragraph} bgColor={bgColor}/>}
        </div>
      )}
    </div>
  );
};

export default BlogCard;
