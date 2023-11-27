import React from "react";
import classes from "./nav.module.css";
import Image from "next/image";
import { Vina_Sans as vina } from "next/font/google";
import { Noto_Naskh_Arabic as noto } from "next/font/google";
const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});
const Noto = noto({
  weight: "400",
  subsets: ["latin"],
});
function Nav() {
  return (
    <nav
      className={`${classes.nav} w-screen h-16 p-7 flex items-center justify-center`}
    >
      <div className={`${classes.logo}  ${vinaSans.className} text-4xl `}>
        SHOP.CO
      </div>
    </nav>
  );
}

export default Nav;
