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
  ratingQuantity,
}) {
  let displayedPrice;
  let discountedPrice;
  let discountPercentage;
  if (newPrice) {
    displayedPrice = newPrice;
    discountedPrice = oldPrice - newPrice;
    discountPercentage = newPrice / oldPrice;
  } else {
    displayedPrice = oldPrice;
  }
  // const percentage = discountedPrice / oldPrice;

  function fullStars() {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} full={true} />);
    }
    return stars;
  }
  function emptyStars() {
    const stars = [];
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  }
  return (
    <div
      className={`${classes.cardContainer} h-72 w-11/12 lg:w-1/5 md:w-1/3 sm:w-1/2 `}
    >
      <div className={`${classes.cardImage} w-full h-3/4 rounded-lg	`}>
        <Image
          src={imgSrc}
          width={150}
          height={150}
          alt={imgAlt}
          className={`w-full h-full object-contain `}
        />
      </div>
      <div className={`${classes.details} w-full h-1/4`}>
        <h3 className={`${classes.cardTitle} h-1/3 w-full font-bold font-sans`}>
          {cardTitle}
        </h3>
        <div className={`${classes.rating} w-full h-1/3 text-yellow-500`}>
          {fullStars()}
          <span>{emptyStars()}</span>{" "}
          <span className="text-black">({ratingQuantity})</span>
        </div>

        {newPrice ? (
          <div
            className={`${classes.productPrice} w-full h-1/3 flex flex-row justify-center items-center`}
          >
            {" "}
            <h3
              className={`${classes.oldPrice} w-1/3 h-full font-bold text-center`}
            >
              {displayedPrice}
            </h3>
            <p
              className={`${classes.discount} w-1/3 h-full line-through opacity-80`}
            >
              {discountedPrice}
            </p>
            <p
              className={`${classes.percentage} w-1/3 h-full text-red-600 text-sm text-center`}
            >
              {discountPercentage}
            </p>
          </div>
        ) : (
          <h3 className={`${classes.productPrice} w-full h-1/3`}>
            {displayedPrice}
          </h3>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
