import React, { useRef } from "react";
import CustomerCard from "./customer-card";
import { Vina_Sans as vina } from "next/font/google";
import Arrow from "../../../ui/icons/arrow";

const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});

function Reviews() {
  const revContainerRef = useRef(null);
  let leftClickCount = 1;
  let rightClickCount = 1;
  let translationValue = 0;

  function handleRightArrow() {
    if (translationValue !== 0) {
      translationValue += 10 * rightClickCount;
      revContainerRef.current.style.transform = `translateX(${translationValue}%)`;
      rightClickCount++;
      leftClickCount = 1;
    }
  }
  function handleLeftArrow() {
    if (translationValue > -41) {
      translationValue += -10 * leftClickCount;
      revContainerRef.current.style.transform = `translateX(${translationValue}%)`;
      leftClickCount++;
      rightClickCount = 1;
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
        className="lg:w-[170%] md:w-[250%] sm:w-[300%] vs:w-[400%] h-full flex flex-row justify-center items-center gap-4"
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
