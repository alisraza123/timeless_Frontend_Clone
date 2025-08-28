import React, { useRef, useEffect } from "react";
import FancyButton from "../template/FancyButton";
import WorkCard from "../template/WorkCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const componentRef = useRef(null);
  const headingLettersRef = useRef([]);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const workCardsRef = useRef([]);

  // Render heading as spans for each letter, to animate individually
  const renderLetters = (text) =>
    text.split("").map((letter, i) => (
      <span
        key={i}
        ref={(el) => (headingLettersRef.current[i] = el)}
        className="inline-block opacity-0 translate-x-[-10px]"
        aria-hidden="true"
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));

  useEffect(() => {
    // Animate heading letters
    gsap.to(headingLettersRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top 90%",
        toggleActions: "play reverse play reverse",

        
      },
    });

    // Animate subheading fade up
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animate button pop-in
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          
        },
      }
    );

    // Animate work cards stagger fade & slide up
    workCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          
          },
        }
      );
    });

    // Cleanup all ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Add ref for each card only once
  const addCardRef = (el) => {
    if (el && !workCardsRef.current.includes(el)) {
      workCardsRef.current.push(el);
    }
  };

  return (
    <div
      ref={componentRef}
      className="z-30 bg-white py-32 rounded-lg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        {/* Heading with letter animation */}
        <div className="text-center mb-16 flex flex-col gap-5">
          <h1 className="text-4xl md:text-4xl font-medium tracking-tighter whitespace-nowrap overflow-hidden">
            {renderLetters("Our work speaks for itself")}
          </h1>

          <h4
            ref={subheadingRef}
            className="text-lg md:text-xl text-gray-500 mt-2 tracking-tighter"
          >
            Explore our portfolio of refined, timeless branding projects that
            leave a lasting impression.
          </h4>

          <div ref={buttonRef} className="mx-auto">
            <FancyButton label={"View Our Work"} width={20} />
          </div>
        </div>

        {/* Work Cards with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 px-4 sm:px-12">
          {[
            {
              img: "/images/w1.avif",
              label: "Visual Identity",
              subtitle: "Electronic Vehicle",
              title: "Lamina",
            },
            {
              img: "/images/w2.avif",
              label: "Brand Strategy",
              subtitle: "Coffee Beans",
              title: "Velour",
            },
            {
              img: "/images/w3.avif",
              label: "Visual Identity",
              subtitle: "Skincare",
              title: "Luméra",
            },
            {
              img: "/images/w4.avif",
              label: "Brand Messaging",
              subtitle: "Water Bottle",
              title: "Flow",
            },
          ].map((card, i) => (
            <div key={i} ref={addCardRef}>
              <WorkCard
                imageSrc={card.img}
                label={card.label}
                subtitle={card.subtitle}
                title={card.title}
                imageAlt={card.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
