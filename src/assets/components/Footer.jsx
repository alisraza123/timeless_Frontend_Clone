import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import FancyButton from "../template/FancyButton";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const textContainerRef = useRef(null);
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 810);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      <div className="relative px-2 md:px-20 w-full bg-timelessBg  min-h-[90vh] z-[100]">

        {/* First Div: Text Content on top */}
        <div className="relative z-[100]  flex flex-col items-center text-center gap-40 md:gap-6 justify-between min-h-[80vh] w-full">
          <div>
            <div className=" text-center flex items-center flex-col justify-center gap-5 pt-10 ">
              <h2 className="text-5xl w-[100%]  md:text-5xl md:w-[60%]">
                Create a brand that stands the test of time.
              </h2>
              <p>
                Timeless designs. Lasting impressions. Let’s craft a brand that
                endures and inspires.
              </p>
              <FancyButton label={"Get in Touch"} textSize={"text-sm"} width={"w-1/2"}/>
            </div>
          </div>
           <div className="absolute top-[30vh] md:top-[25vh]  left-0 w-full  z-[50] overflow-hidden pt-28">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/videos/footer.mp4"
            className="w-[550px] h-full object-contain mx-auto"
          ></video>
        </div>
          <div className="w-full flex justify-between md:flex-row flex-col md:gap-0 gap-12 z-50">
            <div className="flex flex-col gap-4 ">
              <img src="/images/logo.png" alt="" className="w-[100px]" />
              <p className="w-[90%] md:w-[40%] text-lightText text-left md:text-sm">
                Timeless is a branding agency that creates luxury brand
                identities that inspire, captivate, and stand the test of time.
              </p>
              <p className="w-[50%] text-left text-sm text-lightText">
                Created by Hamza Ehsan © 2024
              </p>
            </div>
            <div className=" flex gap-4">
              <div className="text-left">
                <div className="font-bold text-sm pb-5">Pages</div>
                <p className="text-sm text-lightText">Home</p>
                <p className="text-sm text-lightText F">About</p>
                <p className="text-sm text-lightText F">Portfolio</p>
                <p className="text-sm text-lightText F">Blog</p>
              </div>
              <div className="text-left">
                <div className="font-bold pb-5">Information</div>
                <p className="text-sm text-lightText F">Contact</p>
                <p className="text-sm text-lightText F">Privacy Policy</p>
                <p className="text-sm text-lightText F">Terms</p>
                <p className="text-sm text-lightText F">404</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
