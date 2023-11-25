import Image from "next/image";
import React from "react";
import classes from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarIcon from "../star-icon";

function ProductCard({
  imgSrc,
  imgAlt,
  cardTitle,
  productPrice,
  isDiscount,
  oldPrice,
  discount,
  rating,
}) {
  const percentage = discount / oldPrice;

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
        <Image src={imgSrc} alt={imgAlt} />
      </div>
      <div className={`${classes.details} w-full h-1/4`}>
        <h3 className={`${classes.cardTitle} h-1/3 w-full	`}>{cardTitle}</h3>
        <div className={`${classes.rating} w-full h-1/3 text-yellow-500`}>
          {fullStars()}
          <span>{emptyStars()}</span>{" "}
        </div>

        {isDiscount ? (
          <div
            className={`${classes.productPrice} w-full h-1/3 flex flex-row justify-center items-center`}
          >
            {" "}
            <h3 className={`${classes.oldPrice} w-1/3 h-full font-bold `}>
              122$
            </h3>
            <p className={`${classes.discount} w-1/3 h-full`}>{discount}</p>
            <p className={`${classes.percentage} w-1/3 h-full`}>20%</p>
          </div>
        ) : (
          <h3 className={`${classes.productPrice} w-full h-1/3`}>
            {productPrice}
          </h3>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
