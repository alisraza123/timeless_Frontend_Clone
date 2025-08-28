import React from "react";
import FancyButton from "../template/FancyButton";
import LabelBadge from "../template/LabelBadge";
import LabelBadgeSecond from "../template/LabelBadgeSecond";
import { FaArrowRight } from "react-icons/fa6";
import BlogCard from "../template/BlogCard";
const Explore = () => {
  return (
    <div className="bg-white rounded-lg shadow-md min-h-[60vh] sm:min-h-fit md:min-h-fit relative z-30 px-6 sm:px-16 py-12 flex flex-col gap-6 sm:gap-8 md:gap-10 text-center pt-32">
      <div className=" flex flex-col gap-16">
        {/* 1st Div */}
        <div className=" flex justify-between items-center">
          <div>
            <h2 className="text-[5vw] sm:text-4xl font-normal">
              Explore the blog
            </h2>
          </div>

          <FancyButton width={"w-1/2"} label={"View all posts"} />
        </div>
        {/* 2nd Div  */}
        <div className="flex md:flex-row flex-col ">
          {/* img div  */}
         <div className="arrowDiv relative md:w-1/2 overflow-hidden rounded-l-xl group">
            <FaArrowRight className="absolute  text-white -top-4 right-3 z-[50] group-hover:top-3 group-hover:-rotate-45 transition-all duration-500 font-thin" />

            <img
              src="/images/blog.avif"
              alt="Blog"
              className="md:h-[500px] h-[400px] object-cover hover:scale-110 transition-transform duration-300 w-full"
            />
          </div>

          {/* content div  */}
          <div className="flex  flex-col justify-between md:w-1/2 bg-secondPageBg px-3 gap-16 md:py-4 py-8 rounded-r-xl">
            <div className="flex flex-col gap-10">
              <LabelBadge label={"Must Read"} />
              <h2 className="text-left text-2xl sm:text-4xl tracking-normal scale-y-100 font-medium">
                The Ultimate Guide to Building a Timeless Brand Starategy
              </h2>
              <p className="text-left text-xl text-lightText">
                Discover the key elements of building a brand strategy that
                resonates, adapts to change, and creates lasting impact in an
                ever-evolving market.{" "}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div>
                  <img
                    src="/images/profile.avif"
                    alt=""
                    className="w-[40px] rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold sm:text-base">
                    Written By Sofia Lane
                  </h4>
                  <p className=" text-left text-sm sm:text-sm text-lightText">
                    Marketing Consultant
                  </p>
                </div>
              </div>
              <div>
                <LabelBadgeSecond label={"Strategy"} bgColor={"bg-orange-400"}/>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5  ">
          <BlogCard
          width
            imgSrc={"/images/b1.avif"}
            heading={"5 Design Trends Luxury Brands Are Using to Stand Out"}
            altText={"asdasd"}
            paragraph={"Design"}
            bgColor={"bg-blue-500"}
          />
          <BlogCard
            imgSrc={"/images/b2.avif"}
            heading={"How to Use Storytelling to Strengthen Customer Loyalty"}
            altText={"asdasd"}
            paragraph={"Storytelling"}
            bgColor={"bg-green-700"}
          />
          <BlogCard
            imgSrc={"/images/b3.avif"}
            heading={"Top 3 Mistakes Luxury Brands Make in Their Messaging"}
            altText={"asdasd"}
            paragraph={"Storytelling"}
            bgColor={"bg-green-700"}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
