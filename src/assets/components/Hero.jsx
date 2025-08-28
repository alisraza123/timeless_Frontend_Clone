import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LabelBadge from "../template/LabelBadge";
import FancyButton from "../template/FancyButton";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const textContainerRef = useRef(null);

  // Width check for mobile
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 810);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // ✨ ScrollTrigger animation
  useEffect(() => {
    if (!textContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textContainerRef.current,
        {
          y: 0,
          duration: 0.2,
        },
        {
          y: 70,
          duration: 0.2,
          scrollTrigger: {
            scrub: true,
            trigger: textContainerRef.current,
            start: "top 5%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // ✅ Page load animation with hidden class
  useEffect(() => {
    if (!textContainerRef.current) return;

    const el = textContainerRef.current;

    // Hide children initially to prevent flash
    gsap.set(el.children, {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    });

    // Animate in
    gsap.to(el.children, {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 z-0 w-full bg-transparent pointer-events-auto">
        <div className="flex overflow-hidden md:flex-row justify-between bg-timelessBg">
          {/* Left Text Section */}
          <div
            ref={textContainerRef}
            className="absolute top-10 left-0 flex flex-col justify-center gap-6 sm:px-10 px-5 w-[100%] md:w-[80%] lg:w-[55%] overflow-auto z-50 md:py-12"
          >
            <LabelBadge label={"Accepting new projects"} />
            <h1 className="sm:w-full w-[100%] md:text-6xl sm:text-6xl xs:text-4xl text-4xl">
              Creating timeless brands that
              <span className="text-lightText"> inspire</span>
            </h1>
            <p className="text-lightText text-xl w-full">
              Expertly crafted brand experiences that captivate, connect with
              discerning audiences, and leave a lasting impression.
            </p>

            <FancyButton textSize="text-base" label={"Get In Touch"} />
          </div>

          {/* Right Video Section */}
          <div className="relative w-full h-screen max810:h-[75vh] overflow-auto max810:translate-y-[0vh] translate-y-[70vh] max810:translate-x-[25%]">
            <video
              src="/videos/bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="md:w-1/2 w-full h-full object-cover z-30"
              style={{
                width: isMobile ? "100vh" : "100%",
                height: isMobile ? "100vw" : "100%",
                transform: isMobile ? "rotate(90deg)" : "none",
                transformOrigin: isMobile ? "center center" : "unset",
                objectPosition: isMobile ? "center bottom" : "center",
                backgroundColor: "rgba(0,0,0,0)",
                borderRadius: "0px",
                cursor: "auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* Spacer below fixed hero */}
      <div
        style={{ height: isMobile ? "100vh" : "75vh" }}
        className="w-full"
      ></div>
    </>
  );
};

export default Hero;
