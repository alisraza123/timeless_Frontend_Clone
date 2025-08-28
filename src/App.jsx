// App.jsx
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import TestimonialHighlight from "./assets/components/TestimonialHighlight";
import WhatWeDoShowcase from "./assets/components/WhatWeDoShowcase";
import WhyTimeLess from "./assets/components/WhyTimeLess";
import Features from "./assets/components/Features";
import Check from "./assets/components/Check";
import Work from "./assets/components/Work";
import ClientTestimonial from "./assets/components/ClientTestimonial";
import ImageSlider from "./assets/components/ImageSlider";
import Explore from "./assets/components/Explore";
import Faq from "./assets/components/Faq";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Header />
      <Hero />

      {/* Spacer for fixed hero */}
      <section className="flex flex-col justify-center">
        <TestimonialHighlight />

        <WhatWeDoShowcase />
        <WhyTimeLess />

        <Features />
        {/* <Check/> */}
        <Work />
        <ClientTestimonial />
        <Explore />
        <Faq />
        <Footer />
      </section>

      {/* Optional ending section to allow scroll stop at end */}
    </>
  );
};

export default App;
