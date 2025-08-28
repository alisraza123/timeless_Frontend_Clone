import { FaStar } from "react-icons/fa";
// TestimonialHighlight.jsx
const TestimonialHighlight = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className="bg-secondPageBg rounded-lg shadow-md min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] relative z-30 p-6 sm:p-8 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 text-center">
        <div className="flex gap-2 sm:gap-3 overflow-hidden">
          <FaStar size={20} className="sm:size-25" />
          <FaStar size={20} className="sm:size-25" />
          <FaStar size={20} className="sm:size-25" />
          <FaStar size={20} className="sm:size-25" />
          <FaStar size={20} className="sm:size-25" />
        </div>
        <p className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-snug">
          Timeless transformed our brand into a powerful{" "}
          <br className="hidden sm:block" />
          presence allowing us to{" "}
          <span className="text-lightText">work with the best.</span>
        </p>
        <h3 className="text-xl sm:text-base md:text-lg font-semibold">
          – Luxe & Co.
        </h3>
        <p className="text-xl sm:text-sm md:text-base text-lightText">
          Elevating brands that define luxury and excellence:
        </p>
        <div className="overflow-hidden lg:w-[50%] md:w-[100%]">
          <div className="logo-slide flex w-max">
            <img src="/images/logos.PNG" alt="logos" className="h-10" />
            <img src="/images/logos.PNG" alt="logos" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialHighlight;
