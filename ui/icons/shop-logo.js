import React from "react";
import Link from "next/link";
import { Vina_Sans as vina } from "next/font/google";

const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});
function Logo() {
  return (
    <Link
      href="/"
      className={` ${vinaSans.className} lg:text-4xl md:text-4xl sm:text-3xl vs:text-3xl  flex items-center justify-center cursor-pointer`}
    >
      SHOP.CO
    </Link>
  );
}

export default Logo;
