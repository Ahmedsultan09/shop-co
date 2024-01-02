import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/hero.png";

function Hero() {
  return (
    <header className="h-[calc(100vh-64px)] w-full overflow-hidden relative">
      <Image
        src={heroImage}
        width={1358}
        height={582}
        layout="responsive"
        quality={100}
        alt="text"
      />
    </header>
  );
}

export default Hero;
