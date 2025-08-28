import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import FaqItem from "../template/FaqItem";
import faq from "../../../public/data/faq.json";
const Faq = () => {
  const [answer, setAnswer] = useState(false);
  const showAnswer = () => {
    setAnswer(!answer);
  };

  return (
    <div className="bg-white rounded-lg shadow-md min-h-[60vh] sm:min-h-fit md:min-h-fit relative z-30 px-6 sm:px-10 py-12 flex flex-col gap-6 sm:gap-8 md:gap-10 text-center pt-32 ">
      <div>
        <h1 className="text-4xl md:text-4xl font-medium tracking-tighter ">
          Frequently asked questions
        </h1>
        <h4 className="text-base sm:text-lg md:text-xl text-lightText mt-2">
          We’ve answered your top questions to show how we can transform your
          brand.
        </h4>
      </div>

      <div className="flex flex-col gap-14 md:gap-10 min-h-[60vh] ">
        {faq.map((item, index) => {
          return <FaqItem question={item.question} answerText={item.answer} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
