import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileLinkRef = useRef([]);
  const animationInProgress = useRef(false); // Lock animation during play

  const handleToggleMenu = () => {
    if (animationInProgress.current) return;
    setMobileMenuOpen((prev) => !prev);
  };

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    animationInProgress.current = true;

    if (mobileMenuOpen) {
      gsap.set(mobileMenuRef.current, { display: "flex" });

      gsap.fromTo(
        mobileMenuRef.current,
        {
          y: -400,
          opacity: 0,
          paddingTop: 80,
        },
        {
          y: 0,
          opacity: 1,
          paddingTop: 0,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            animationInProgress.current = false;
          },
        }
      );

      gsap.from(mobileLinkRef.current, {
        opacity: 0,
        y: -2,
        delay: 0.2,
        duration: 0.1,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -300,
        opacity: 0,
        paddingTop: 50,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          if (mobileMenuRef.current) {
            gsap.set(mobileMenuRef.current, { display: "none" });
          }
          animationInProgress.current = false;
        },
      });
    }
  }, [mobileMenuOpen]);

  return (
    <div className="fixed w-full z-50 px-5 sm:px-10 md:px-10 backdrop-blur-sm">
      {/* Header Top Row */}
      <div className="flex justify-between items-center py-4">
        <img src="/images/logo.png" alt="Logo" className="w-[100px] z-[999]" />

        {/* Mobile Hamburger / Close Icon */}
        <div className="md:hidden z-[999]">
          {mobileMenuOpen ? (
            <FaTimes
              onClick={handleToggleMenu}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={handleToggleMenu}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* ✅ Mobile Menu — Hidden by default */}
      <div
        ref={mobileMenuRef}
        className="hidden md:hidden pl-7 h-[350px] absolute top-0 left-0 w-full text-black flex-col items-start space-y-3 z-40 justify-center bg-white rounded-b-md"
      >
        {["Home", "About", "Portfolio", "Blog", "Get In Touch"].map(
          (item, index) => (
            <div
              key={index}
              ref={(el) => (mobileLinkRef.current[index] = el)}
              className="text-md"
            >
              {item}
            </div>
          )
        )}
        <div className="flex items-center gap-5 pt-3">
          <FaInstagram size={20} />
          <FaSearch size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
