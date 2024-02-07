import React from "react";
import CustomerCard from "./customer-card";
import { Vina_Sans as vina } from "next/font/google";

const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});

function Reviews() {
  return (
    <div className="w-full h-full p-10">
      <h1
        className={`${vinaSans.className} w-full flex items-center justify-center text-7xl font-bold py-7`}
      >
        OUR HAPPY CUSTOMERS
      </h1>
      <CustomerCard />
    </div>
  );
}

export default Reviews;
