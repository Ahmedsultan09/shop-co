import Image from "next/image";
import React from "react";
import classes from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarIcon from "../icons/star-icon";

function ProductCard({
  imgSrc,
  imgAlt,
  cardTitle,
  newPrice,
  isDiscount,
  oldPrice,
  discount,
  rating,
}) {
  let displayedPrice;
  let discountedPrice;
  let discountPercentage;
  if (newPrice) {
    displayedPrice = newPrice;
    discountedPrice = oldPrice - newPrice;
    discountPercentage = Math.floor((newPrice / oldPrice) * 100);
  } else {
    displayedPrice = oldPrice;
  }
  let actualRating = Math.floor(rating);
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
    <div
      className={`${classes.cardContainer} h-72 w-11/12 lg:w-1/5 md:w-1/3 sm:w-1/2 border border-gray-300 border-solid rounded-lg `}
    >
      <div className={`${classes.cardImage} w-full h-3/4 rounded-lg	`}>
        <Image
          src={imgSrc}
          width={150}
          height={150}
          alt={imgAlt}
          className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
        />
      </div>
      <div className={`${classes.details} w-full h-1/4 px-2 box-border`}>
        <h3
          className={`${classes.cardTitle} h-1/3 w-full font-bold font-sans overflow-hidden`}
        >
          {cardTitle}
        </h3>
        <div
          className={`${classes.rating} w-full h-1/3 text-yellow-500 box-border`}
        >
          {fullStars()}
          <span>{emptyStars()}</span>{" "}
          <span className="text-black">({actualRating})</span>
        </div>

        {newPrice ? (
          <div
            className={`${classes.productPrice} w-full h-1/3 flex flex-row justify-start items-center `}
          >
            {" "}
            <h3 className={`${classes.oldPrice} w-1/4 h-full font-bold `}>
              {displayedPrice}$
            </h3>
            <p
              className={`${classes.discount} w-1/4 h-full line-through opacity-80 font-bold`}
            >
              {discountedPrice}$
            </p>
            <p
              className={`${classes.percentage} w-1/4 h-5/6 text-red-600 text-sm  font-bold bg-red-300 rounded-xl text-center flex items-center justify-center`}
            >
              {discountPercentage}%
            </p>
          </div>
        ) : (
          <h3 className={`${classes.productPrice} w-full h-1/3 font-bold`}>
            {displayedPrice} $
          </h3>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
