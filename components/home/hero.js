import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/hero.png";

function Hero() {
  return (
    <header className="h-[calc(100vh-64px)] w-full overflow-hidden relative ">
      <Image
        src={heroImage}
        width={1358}
        height={582}
        layout="responsive"
        quality={100}
        alt="text"
        className="absolute"
      ></Image>
      <div className="absolute left-6 top-0 w-1/2 flex flex-col h-full justify-around py-20 items-start ">
        {" "}
        <h1 className="font-bold text-5xl ">
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
