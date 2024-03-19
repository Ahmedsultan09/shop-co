import React from "react";
import { Vina_Sans as vina } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});

function CategoriesCard({ data }) {
  return (
    <section className="w-full h-screen bg-white flex items-center justify-center">
      <div className="w-4/5 lg:h-4/5 md:h-4/5 sm:h-full vs:h-full bg-gray-300 rounded-3xl flex flex-col justify-center items-center">
        <h1
          className={`${vinaSans.className} font-normal lg:text-7xl md:text-7xl sm:text-5xl vs:text-4xl w-full h-1/5 flex items-center justify-center `}
        >
          Browse by category
        </h1>
        <div className="w-4/5 lg:h-3/5 md:h-3/5 sm:h-4/5 vs:h-4/5 grid grid-cols-5 gap-4 items-center justify-center">
          <Link
            href={`categories/${data[0].slug}`}
            className="bg-white w-full h-full relative overflow-hidden rounded-3xl lg:col-span-2 md:col-span-2 sm:col-span-5  vs:col-span-5 flex items-center justify-center "
          >
            {" "}
            <Image
              src={data[0].image}
              width={150}
              height={150}
              className={`w-full h-full object-cover border border-gray-300 border-solid rounded-lg bg-none`}
              alt="category 1"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
              <p className="text-black text-2xl font-bold">{data[0].name}</p>
            </div>
          </Link>

          <Link
            href={`categories/${data[1].slug}`}
            className="bg-white w-full h-full relative overflow-hidden rounded-3xl lg:col-span-3 md:col-span-3 sm:col-span-5 vs:col-span-5 flex items-center justify-center"
          >
            <Image
              src={data[1].image}
              width={150}
              height={150}
              className={`w-full h-full object-cover border border-gray-300 border-solid rounded-lg bg-none`}
              alt="category 1"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
              <p className="text-white text-2xl font-bold">{data[1].name}</p>
            </div>
          </Link>
          <Link
            href={`categories/${data[5].slug}`}
            className="bg-white w-full h-full relative overflow-hidden rounded-3xl lg:col-span-3 md:col-span-3 sm:col-span-5 vs:col-span-5 flex items-center justify-center"
          >
            <Image
              src={data[5].image}
              width={150}
              height={150}
              className={`w-full h-full object-cover border border-gray-300 border-solid rounded-lg bg-none`}
              alt="category 1"
            />
            <div className="absolute top-0 left-4 right-0 bottom-0 flex items-center justify-start  z-20">
              <p className="text-white text-2xl font-bold">{data[5].name}</p>
            </div>
          </Link>
          <Link
            href={`categories/${data[4].slug}`}
            className="bg-white w-full h-full relative overflow-hidden rounded-3xl lg:col-span-2 md:col-span-2 sm:col-span-5 vs:col-span-5 flex items-center justify-center"
          >
            <Image
              src={data[4].image}
              width={150}
              height={150}
              className={`w-full h-full object-cover border border-gray-300 border-solid rounded-lg bg-none`}
              alt="category 1"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
              <p className="text-black text-2xl font-bold">{data[4].name}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CategoriesCard;
