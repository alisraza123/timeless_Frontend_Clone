import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";

const ClientTestimonial = () => {
  const data = [
    {
      description:
        "Timeless completely reimagined our brand, creating a visual identity with Sola’s essence.",
      name: "Olivia Hart from Sola",
      image: "/images/g1.avif",
    },
    {
      description:
        "Working with Timeless was a game-changer. They crafted a brand identity that exudes sophistication.",
      name: "James Wright from Artisan Luxe",
      image: "/images/g2.avif",
    },
    {
      description:
        "Timeless brought our vision to life with a brand identity that feels elegant, powerful, and sophisticated.",
      name: "Sophia Lane from Élan Studio",
      image: "/images/g3.avif",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));

  const current = data[currentIndex];

  return (
    <div className="w-full px-4 py-8 md:px-10 lg:px-20 z-30 min-h-screen bg-secondPageBg overflow-hidden">
      {/* Upper section with name, star, image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 mb-8 transition-all duration-700 ease-in-out ">
        {/* Left Side */}
        <div className="relative flex-1 text-center md:text-left w-full max-w-xl  h-[600px]">
          <h3 className="text-4xl md:text-5xl font-medium text-black mb-12 tracking-tighter leading-[4rem] transition-all duration-700 ease-in-out">
            {current.description}
          </h3>

          <div className="flex flex-col justify-center   md:justify-start gap-5">
            <div className="flex gap-2 sm:gap-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} size={20} className="sm:size-25" />
                ))}
            </div>

            <h2 className="tracking-tighter text-base text-lightText text-left">
              {current.name}
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-0 right-0 flex gap-3 pr-2">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white hover:bg-buttonBg2 transition text-buttonText2 duration-300"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white hover:bg-buttonBg2 transition text-buttonText2 duration-300"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="flex-shrink-0">
          <img
            key={current.image} // Forces re-render on image change
            src={current.image}
            alt={current.name}
            className="w-[300px] sm:w-[400px] md:w-[500px] h-[400px] sm:h-[500px] md:h-[700px] rounded-2xl object-cover border-2 border-gray-200 transition-all duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Lower section: Testimonial and image */}
      <div className="flex flex-col items-center gap-6 text-center md:text-left">
        <p className="text-gray-700 text-lg max-w-3xl text-center">
          Elevating brands that define luxury and excellence:
        </p>
       <div className="overflow-hidden w-[50%]">
          <div className="logo-slide flex w-max">
            <img src="/images/logos.PNG" alt="logos" className="h-10" />
            <img src="/images/logos.PNG" alt="logos" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
