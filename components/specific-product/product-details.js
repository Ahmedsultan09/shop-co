import Image from "next/image";
import React from "react";
import StarIcon from "../../ui/icons/star-icon";

function ProductDetails({ data }) {
  let actualRating = Math.floor(data.ratingsAverage);
  function fullStars() {
    const stars = [];
    for (let i = 0; i < actualRating; i++) {
      stars.push(<StarIcon key={i} full={true} />);
    }
    return stars;
  }
  function emptyStars() {
    const stars = [];
    for (let i = 0; i < 5 - actualRating; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  }
  return (
    <section className="py-5 px-10 flex flex-row">
      {/* Images */}
      <aside className="lg:w-1/2 w-full h-[30rem] flex flex-col-reverse lg:flex-row border border-red-700 border-solid items-center justify-center gap-1">
        <div className="lg:w-1/4 w-full h-[30rem] flex lg:flex-col flex-row justify-around">
          <span className="lg:w-full w-1/3 lg:h-[9.5rem] h-[7rem]">
            {" "}
            <Image
              src={data.images[0]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
          <span className="lg:w-full w-1/3 lg:h-[9.5rem] h-[7rem]">
            <Image
              src={data.images[1]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
          <span className="lg:w-full w-1/3 lg:h-[9.5rem] h-[7rem]">
            <Image
              src={data.images[2]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
        </div>
        <div className="lg:w-3/4 w-full lg:h-full h-3/4 flex justify-center items-center ">
          <span className="w-full h-full py-1">
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
      {/* Title and Details */}
      <aside className="w-full lg:w-1/2 h-[30rem] border border-red-700 border-solid flex flex-col justify-start items-center">
        <div className="w-full h-1/2">
          <h1 className="text-3xl flex items-center font-bold h-2/6  border-red-700 border-solid ">
            {data.title}
          </h1>
          <div className="w-full h-1/6 border border-red-700 border-solid ">
            {" "}
            {fullStars()} <span>{emptyStars()}</span>{" "}
          </div>
          <div className="w-full h-1/6 border text-2xl font-semibold border-red-700 border-solid">
            {data.price}$
          </div>
          <p className="w-full h-2/6 border border-red-700 border-solid opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            bibendum, lacus quis pharetra ultricies, lacus enim mollis lacus, at
            molestie urna lorem at turpis.
          </p>
        </div>
        <div className="w-full h-1/2">
          <div className="w-full h-1/6">
            <Image
              src={data.brand.image}
              width={150}
              height={150}
              alt={data.brand.name}
              className={`w-full h-full object-contain bg-none`}
            />
          </div>
          <div className="w-full h-2/6 border border-solid border-red-700">
            <h3 className="opacity-70 w-full h-1/4 border border-solid border-red-700 flex items-center">
              Choose Size
            </h3>
            <div className="w-full h-3/4 border border-solid border-red-700">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default ProductDetails;
