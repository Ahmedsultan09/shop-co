import Image from "next/image";
import React from "react";
import zaraIcon from "../../public/images/brands/zara.png";
import versaceIcon from "../../public/images/brands/versace.png";
import pradaIcon from "../../public/images/brands/prada.png";
import calvinIcon from "../../public/images/brands/calvin-klein.png";
import gucciIcon from "../../public/images/brands/gucci.png";
import Link from "next/link";

function BarndsLabel() {
  return (
    <Link href="/brands">
      <section className="w-full h-28 bg-black flex justify-between items-center">
        <div className="w-1/5 h-full p-6 flex justify-center items-center">
          <Image src={versaceIcon} alt="Versace brand icon" />
        </div>
        <div className="w-1/5 h-full p-6 flex justify-center items-center">
          <Image src={zaraIcon} alt="Zara brand icon" />
        </div>
        <div className="w-1/5 h-full p-6 flex justify-center items-center">
          <Image src={pradaIcon} alt="Versace brand icon" />
        </div>
        <div className="w-1/5 h-full p-6 flex justify-center items-center">
          <Image src={calvinIcon} alt="Versace brand icon" />
        </div>
        <div className="w-1/5 h-full p-6 flex justify-center items-center">
          <Image src={gucciIcon} alt="Versace brand icon" />
        </div>
      </section>
    </Link>
  );
}

export default BarndsLabel;
