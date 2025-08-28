import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Scroll = ({ children, onScroll }) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.05,
    });

    scrollRef.current = scroll;

    scroll.on("scroll", (obj) => {
      if (onScroll) {
        onScroll(obj.scroll.y);
      }
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [onScroll]);

  return (
    <div
      data-scroll-container
      ref={containerRef}
      className="relative min-h-[200vh]"
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
