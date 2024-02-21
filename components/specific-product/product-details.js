import Image from "next/image";
import React from "react";

function ProductDetails({ data }) {
  return (
    <section>
      <aside className="w-1/2 h-[30rem] flex flex-row border border-red-700 border-solid items-center justify-center gap-1">
        <div className="w-1/4 h-[30rem] flex flex-col justify-between">
          <span className="w-full h-[9.5rem]">
            {" "}
            <Image
              src={data.images[0]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
          <span className="w-full h-[9.5rem]">
            <Image
              src={data.images[1]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
          <span className="w-full h-[9.5rem]">
            <Image
              src={data.images[2]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
        </div>
        <div className="w-3/4 h-full flex justify-center items-center ">
          <span className="w-full h-full">
            <Image
              src={data.imageCover}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
        </div>
      </aside>
      <aside></aside>
    </section>
  );
}

export default ProductDetails;
