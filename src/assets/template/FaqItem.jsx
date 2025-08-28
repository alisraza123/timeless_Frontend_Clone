import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import gsap from "gsap";

const FaqItem = ({ question, answerText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null); // for GSAP animation

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  // GSAP fade animation
  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        gsap.fromTo(
          answerRef.current,
          { opacity: 0, y: 10, scrub: 5, duration: 0.7 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",

            scrub: 5,
          }
        );
      } else {
        gsap.to(answerRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.7,
          ease: "power2.in",
          scrub: 5,
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="w-[90vw] md:w-[60vw] mx-auto mb-4 px-2">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-base md:text-xl tracking-tighter">
          {question}
        </h2>
        <button
          onClick={toggleAnswer}
          className="p-3 bg-faqButtonBg rounded-full transition-transform duration-300"
        >
          <IoIosArrowUp
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-0" : "-rotate-180"
            }`}
          />
        </button>
      </div>

      {/* Collapsible Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <p
          ref={answerRef}
          className="pt-2 text-justify md:text-left text-gray-500 opacity-0"
        >
          {answerText}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
