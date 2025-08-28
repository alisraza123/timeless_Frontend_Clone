import React, { useEffect, useRef } from "react";
import WhatWeDoCard from "../template/WhatWeDoCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoShowcase = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrub: true,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          yoyo: true,
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate each card individually (good for mobile)
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white rounded-lg shadow-md min-h-[60vh] sm:min-h-fit md:min-h-fit relative z-30 px-6 sm:px-10 py-12 flex flex-col gap-6 sm:gap-8 md:gap-10 text-center pt-32"
    >
      <div ref={headingRef}>
         <h1 className="text-4xl md:text-4xl font-medium tracking-tighter">
            What We Do
          </h1>
        <h4 className="text-base sm:text-lg md:text-xl text-lightText mt-2">
          Bespoke services are designed to elevate your brand.
        </h4>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-full md:w-1/3"
          >
            <WhatWeDoCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoShowcase;
