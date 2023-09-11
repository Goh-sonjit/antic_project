import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState([
    typeof window !== "undefined" && window.pageYOffset,
  ]);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition([typeof window !== "undefined" && window.pageYOffset]);
    };
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition;
}

const Floatingnavbar = () => {
  const [scroll] = useWindowScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleCss = () => {
      if (scroll > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    handleCss();
  }, [scroll]);
  return (
    <>
      <div
        style={{
          // display:isVisible ? "block":  "none" ,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0%)" : "translateY(-100%)",
        }}
        className="new-search  m-0"
      >
        <Navbar />
      </div>
      <style jsx>
        {`
          .new-search {
            position: fixed;
            z-index: 15;
            top: 0%;
            background-color: #000000;
            left: 0%;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            width: 100vw;
            transition: opacity 0.6s, transform 0.6s;
          }
         
          
        `}
      </style>
    </>
  );
};

export default Floatingnavbar;
