import React, { useEffect, useRef, useState } from "react";
import CustomerCard from "./customer-card";
import { Vina_Sans as vina } from "next/font/google";
import Arrow from "../../../ui/icons/arrow";

const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});

function Reviews() {
  const revContainerRef = useRef(null);
  let translationValue = 0;
  const [elementWidthVW, setElementWidthVW] = useState(0);
  const [windowWidthVW, setWindowWidthVW] = useState(0);

  useEffect(() => {
    const updateElementWidth = () => {
      const element = revContainerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const vwWidth = (rect.width / window.innerWidth) * 100;
        setElementWidthVW(vwWidth);
      }
    };
    const windowVW =
      (window.innerWidth / document.documentElement.clientWidth) * 100;
    setWindowWidthVW(windowVW);
    window.addEventListener("resize", updateElementWidth);
    updateElementWidth();

    return () => {
      window.removeEventListener("resize", updateElementWidth);
    };
  }, []);

  function handleRightArrow() {
    if (translationValue > windowWidthVW - elementWidthVW) {
      translationValue -= elementWidthVW / 5;
      revContainerRef.current.style.transform = `translateX(${translationValue}vw)`;
    }
  }

  function handleLeftArrow() {
    if (translationValue !== 0) {
      translationValue += elementWidthVW / 5;
      revContainerRef.current.style.transform = `translateX(${translationValue}vw)`;
    }
  }

  return (
    <div className="w-full h-full p-10 overflow-hidden relative">
      <h1
        className={`${vinaSans.className} w-full flex items-center justify-center text-4xl py-7`}
      >
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="w-full h-9 flex items-center justify-end gap-2 text-2xl">
        {" "}
        <button onClick={handleLeftArrow}>
          <Arrow left={true} />
        </button>
        <button onClick={handleRightArrow}>
          <Arrow right={true} />
        </button>
      </div>
      <div className="w-screen h-full relative ">
        <div
          className="lg:w-[150vw] sm:w-[220vw] vs:w-[410vw] h-full flex flex-row justify-around items-center  transition-transform relative z-0"
          ref={revContainerRef}
        >
          <CustomerCard name={"Ahmed Sultan"} />
          <CustomerCard name={"Abdelrahman Elsayed"} />
          <CustomerCard name={"Ahmed Yasser"} />
          <CustomerCard name={"John Doe"} />
          <CustomerCard name={"Mark"} />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
