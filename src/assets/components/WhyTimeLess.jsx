import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoTimerOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const WhyTimeLess = () => {
  const sectionRef = useRef();
  const leftHandRef = useRef();
  const rightHandRef = useRef();
  const wheelRef = useRef();
  const timRef = useRef();

  const swiftImageRef = useRef();
  const storyTextRef = useRef();
  const retentionRef = useRef();
  const attentionRef = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hands animation
      gsap.from([leftHandRef.current, rightHandRef.current], {
        scrollTrigger: {
          trigger: leftHandRef.current,
          start: "top 90%",
          end: "bottom center",
          scrub:2 ,
          
        },
        x: (i) => (i === 0 ? -100 : 100),
        opacity: 0.6,
        duration: 0.7,
        ease: "power2.inOut",
      });
gsap.to(wheelRef.current, {
    rotation: 360,
    transformOrigin: "50% 50%",
    duration: 10,
    repeat: -1,
    
    ease: "linear",
    onUpdate: () => {
      // Get current rotation angle in degrees
      const angle = gsap.getProperty(wheelRef.current, "rotation");
      // For each image child, rotate in opposite direction
      wheelRef.current.querySelectorAll("div").forEach((child) => {
        gsap.set(child, { rotation: -angle });
      });
    },
  });

      // Ferris Wheel animation
      gsap.fromTo(
        wheelRef.current,
        { scale: 1.3, opacity: 0.7 },
        {
          scrollTrigger: {
            trigger: wheelRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 2,
          },
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      // TIM animation
      gsap.from(timRef.current, {
        scrollTrigger: {
          trigger: timRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 2,
        },
        x: 200,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Bottom grid animations
      const animateImage = (ref) =>
        gsap.fromTo(
          ref.current,
          { scale: 1.4, opacity: 0.5 },
          {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              end: "bottom center",
              scrub: true,
            },
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        );

      const animateText = (ref) =>
        gsap.fromTo(
          ref.current,
          { y: 20, opacity: 0 },
          {
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              end: "bottom center",
              scrub: true,
            },
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        );

      animateImage(swiftImageRef);
      animateText(storyTextRef);
      animateText(retentionRef);
      animateImage(attentionRef);

      // Count-up animation for 94%
     gsap.to({ val: 0 }, {
      val: 94,
      ease: "none",
      scrollTrigger: {
        trigger: retentionRef.current,
        start: "top 80%",
        end: "bottom 92%",
        scrub: 1,
      },
      onUpdate: function () {
        setCount(Math.floor(this.targets()[0].val));
      },
    });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="z-30 bg-white rounded-lg overflow-hidden pt-32"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-medium ">Why Timeless?</h1>
          <h4 className="text-lg md:text-xl text-gray-500 mt-2">
            Discover what sets us apart in the art of luxury branding.
          </h4>
        </div>

        {/* Top Boxes */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="w-full lg:w-[400px] h-[550px] bg-cardBg py-8 text-center flex flex-col justify-around rounded-lg overflow-hidden">
            <div className="text-left pl-5">
              <h1 className="text-5xl font-semibold">Seamless Collaboration</h1>
            </div>
            <div className="relative h-[200px] flex justify-center items-center">
              <img
                ref={leftHandRef}
                src="/images/lefthand.avif"
                alt=""
                className="w-[150px] absolute left-0 top-8"
              />
              <img
                ref={rightHandRef}
                src="/images/righthand.avif"
                alt=""
                className="w-[150px] absolute right-0 top-8"
              />
            </div>
          </div>

          {/* Ferris Wheel */}
          <div className="w-full lg:w-[400px] h-[550px] bg-cardBg px-6 py-8 flex justify-center items-center flex-col rounded-lg gap-16">
            <div ref={wheelRef} className="relative w-[300px] h-[300px]">
              {[...Array(8)].map((_, i) => {
                const angle = (360 / 8) * i;
                const radius = 110;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <div
                    key={i}
                    className="absolute w-[60px] h-[60px] rounded-full overflow-hidden"
                    style={{
                      transform: `translate(${120 + x}px, ${120 + y}px)`,
                    }}
                  >
                    <img
                      src={`/images/${i + 1}.avif`}
                      alt={`img${i}`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                );
              })}
            </div>
            <h2 className="text-4xl">Over 100+ brands transformed</h2>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[400px] h-[550px] bg-cardBg px-6 py-8 flex flex-col rounded-lg overflow-hidden">
            <div className="pt-15">
              <h1 className="text-4xl font-semibold mb-4">
                Elevated Brand Identity
              </h1>
            </div>
            <div className="relative">
              <h4
                ref={timRef}
                className="text-[300px] text-black absolute -right-10"
              >
                tim
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="w-full flex flex-col md:flex-row gap-6 mt-16 overflow-hidden px-5">
        {/* Left Image */}
        <div className="lg:w-1/3 h-80 lg:h-[400px] overflow-hidden rounded-xl">
          <div ref={swiftImageRef} className="relative lg:h-[400px] w-full">
            <img
              src="/images/swift.avif"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <h2 className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold bg-black bg-opacity-40 rounded-xl gap-2">
              <IoTimerOutline className="text-2xl" />
              Swift Around F
            </h2>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-3 lg:grid-rows-2 gap-6 lg:w-2/3 h-full  lg:h-[400px]">
          {/* Story Text */}
          <div
            ref={storyTextRef}
            className=" p-5 col-span-2 flex flex-col lg:flex-row gap-6 rounded-lg bg-cardBg text-white overflow-hidden"
          >
            <div className="w-full lg:w-1/4 flex items-center h-full">
              <h3 className="text-3xl font-semibold text-black">
                Strategic storytelling
              </h3>
            </div>
          <div className="relative text-black">
  <div className="relative text-black">
  {/* Gradient overlay for fade effect */}
  <div className="pointer-events-none absolute top-0 left-0 w-full h-full
    bg-gradient-to-b from-transparent to-white opacity-70 z-20"></div>

  <p className="relative z-10 p-4
    first-letter:text-5xl 
  
    first-letter:float-left 
    first-letter:mr-2
    first-letter:leading-none
    text-justify tracking-tighter
  ">
    Every great brand begins with a story, but not all stories are created equal. At Timeless, we believe storytelling is the bridge between your brand and your audience, a way to resonate deeply and leave a lasting impression. We dive into the heart of your brand, uncovering the unique elements that set you apart, and craft narratives that weave emotion with strategy. From the language in your messaging to the visuals that complement it, every detail is.
  </p>
</div></div></div>



          {/* Retention Count Box */}
        <div className="relative w-full h-full col-span-2 sm:col-span-1">
  <div
    ref={retentionRef}
    className="w-full h-full bg-cardBg rounded-lg flex flex-col justify-center items-center px-4 py-8"
  >
    <h2 className="text-center text-6xl font-thin flex flex-col">
      {count}%{" "}
      <span className="text-xl text-lightText font-thin">
        client retention rate
      </span>
    </h2>
  </div>
</div>


          {/* Attention Image */}
          
          <div className="w-full overflow-hidden rounded-xl col-span-2 sm:col-span-1">
  <div
    ref={attentionRef}
    className="relative bg-yellow-100 rounded-lg overflow-hidden w-full h-[300px]" // height add ki for visibility
  >
    <div className="bg-black bg-opacity-30 h-full w-full absolute z-10"></div>
    <img
      src="/images/eye.avif"
      alt="Attention to Detail"
      className="absolute w-full h-full object-cover"
    />
    <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold z-20">
      Attention To Detail
    </h2>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default WhyTimeLess;
