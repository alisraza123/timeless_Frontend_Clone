import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdMenu } from "react-icons/io";
import { FaVectorSquare } from "react-icons/fa";
import { PiLifebuoyFill } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const headingLettersRef = useRef([]);
  const paraRef = useRef(null);

  // Split heading into letters
  const renderLetters = (text) => {
    return text.split("").map((letter, i) => (
      <span
        key={i}
        ref={(el) => (headingLettersRef.current[i] = el)}
        className="inline-block opacity-0 translate-y-10"
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  useEffect(() => {
    gsap.set(headingLettersRef.current, { opacity: 0, y: 20 });
    gsap.set(paraRef.current, { opacity: 0, y: 20 });

    // Animate heading letters with a single ScrollTrigger and stagger
    gsap.to(headingLettersRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.2)",
      stagger: 0.03,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        
      },
    });

    // Paragraph animation
    gsap.to(paraRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Cards animation
    const cards = sectionRef.current.querySelectorAll(".feature-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "bounce.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="z-30 bg-white py-32 rounded-lg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        {/* Heading with letter-by-letter animation */}
        <div className="text-center mb-16 flex flex-col gap-5">
          <h1 className="text-4xl md:text-4xl font-medium tracking-tighter">
            {renderLetters("Going beyond the basics")}
          </h1>
          <h4
            ref={paraRef}
            className="text-lg md:text-xl text-gray-500 mt-2 tracking-tighter"
          >
            Extraordinary features that elevate your branding experience and
            deliver lasting results.
          </h4>
        </div>

        {/* Features Cards */}
        <div className="flex flex-col lg:flex-row md:px-10 lg:px-20 md:gap-20 gap-20">
          <div className="feature-card text-center flex items-center justify-center flex-col gap-8">
            <IoMdMenu size={40} />
            <h2 className="text-2xl md:text-xl font-bold">
              Dedicated Client Portal
            </h2>
            <p className="w-[90%] sm:w-[70%] md:w-[100%] text-lightText md:text-xl sm:text-2xl text-xl">
              Track progress and collaborate through our client portal.
            </p>
          </div>
          <div className="feature-card text-center flex items-center justify-center flex-col gap-8">
            <FaVectorSquare size={40} />
            <h2 className="text-2xl md:text-xl font-bold">Brand Guidelines</h2>
            <p className="w-[90%] sm:w-[70%] md:w-[100%] text-lightText md:text-xl sm:text-2xl text-xl">
              Get a detailed guide to keep your brand consistent.
            </p>
          </div>
          <div className="feature-card text-center flex items-center justify-center flex-col gap-8">
            <PiLifebuoyFill size={40} />
            <h2 className="text-2xl md:text-xl font-bold">Client Support</h2>
            <p className="w-[90%] sm:w-[70%] md:w-[100%] text-lightText md:text-xl sm:text-2xl text-xl">
              We're here to support you 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
