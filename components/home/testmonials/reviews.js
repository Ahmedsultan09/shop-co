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
  let leftClickCount = 0;
  let rightClickCount = 0;
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
    updateElementWidth(); // Call initially to set the correct width

    return () => {
      window.removeEventListener("resize", updateElementWidth);
    };
  }, []);

  console.log(elementWidthVW);
  console.log(windowWidthVW);

  function handleRightArrow() {
    if (translationValue !== 0) {
      ++rightClickCount;
      translationValue += elementWidthVW / 5;
      revContainerRef.current.style.transform = `translateX(${translationValue}vw)`;
      leftClickCount = 0;
    }
  }
  function handleLeftArrow() {
    if (translationValue > -windowWidthVW / 2) {
      ++leftClickCount;
      translationValue += -(elementWidthVW / 5);
      revContainerRef.current.style.transform = `translateX(${translationValue}vw)`;
      rightClickCount = 0;
    }
  }
  return (
    <div className="w-full h-full p-10 overflow-hidden">
      <h1
        className={`${vinaSans.className} w-full flex items-center justify-center text-7xl font-bold py-7`}
      >
        OUR HAPPY CUSTOMERS
      </h1>
      <div className="w-full h-9 border border-solid border-red-700 flex items-center justify-end gap-2 text-2xl">
        {" "}
        <button onClick={handleLeftArrow}>
          <Arrow left={true} />
        </button>
        <button onClick={handleRightArrow}>
          <Arrow right={true} />
        </button>
      </div>

      <div
        className="lg:w-[150vw] sm:w-[220vw] vs:w-[410vw] h-full flex flex-row justify-center items-center gap-4 transition-transform"
        ref={revContainerRef}
      >
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </div>
  );
}

export default Reviews;
