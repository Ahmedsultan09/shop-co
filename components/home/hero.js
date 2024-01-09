import Image from "next/image";
import React from "react";
import heroImageOne from "../../public/images/hero.png";
import heroImageTwo from "../../public/images/hero-two.jpeg";
import heroImageThree from "../../public/images/hero-three.png";

function Hero() {
  return (
    <header className="h-[calc(100vh-64px)] w-full overflow-hidden  flex lg:flex-row-reverse md:flex-col sm:flex-col vs:flex-col z-30 ">
      {/* SEPARETOR ====== SEPARETOR =========*/}
      <div className="lg:w-1/2 md:w-full sm:w-full vs:w-full lg:h-full md:h-1/2 sm:h-1/2 vs:h-1/2 relative lg:block md:hidden sm:hidden vs:hidden">
        <Image src={heroImageTwo} quality={100} alt="text"></Image>
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full vs:w-full lg:h-full md:h-1/2 sm:h-1/2 vs:h-1/2 relative lg:hidden md:block sm:block vs:hidden">
        <Image src={heroImageOne} quality={100} fill={true} alt="text"></Image>
      </div>
      <div className="lg:w-1/2 md:w-full sm:w-full vs:w-full lg:h-full md:h-1/2 sm:h-1/2 vs:h-1/2 relative lg:hidden md:hidden sm:hidden vs:block">
        <Image
          src={heroImageThree}
          quality={100}
          fill={true}
          alt="text"
        ></Image>
      </div>
      {/* SEPARETOR ====== SEPARETOR =========*/}

      <div className="left-6 top-0  flex flex-col justify-around overflow-hidden lg:py-20 lg:px-5 items-start bg-light-grey lg:w-1/2 md:w-full sm:w-full vs:w-full lg:h-full md:h-1/2 sm:h-1/2 vs:h-1/2">
        {" "}
        <h1 className="font-bold lg:text-5xl md:text-3xl sm:text-2xl vs:text-2xl ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-thin opacity-70 w-3/4">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="w-1/4 h-12 rounded-3xl bg-black text-white text-xl font-bold text-center ">
          Shop Now
        </button>
        <div className="flex justify-center items-center w-full flex-row ">
          <div className="flex flex-col items-start justify-center w-1/3 h-full border-r border-black border-solid border-opacity-25">
            <h3 className="font-bold text-3xl">200+</h3>
            <p className="font-light opacity-70 text-sm">International Brand</p>
          </div>
          <div className="flex flex-col items-start px-5 justify-center w-1/3 h-full border-r border-black border-solid border-opacity-25">
            {" "}
            <h3 className="font-bold text-3xl">2000+</h3>
            <p className="font-light opacity-70 text-sm">
              High-Quality Products
            </p>
          </div>
          <div className="flex flex-col items-start px-5 justify-center w-1/3 h-full">
            {" "}
            <h3 className="font-bold text-3xl">30000+</h3>
            <p className="font-light opacity-70 text-sm">Happy Customers</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
