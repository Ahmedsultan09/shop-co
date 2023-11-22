import Image from "next/image";
import React from "react";
import classes from "./ProductCard.module.css";

function ProductCard(props) {
  return (
    <div
      className={`${classes.cardContainer} text-blue-600 h-40 w-11/12 lg:w-1/4 md:w-1/3 sm:w-1/2 `}
    >
      <div className={classes.cardImage}>
        <Image src={props.src} alt={props.alt} />
      </div>
      <h3 className={classes.cardTitle}>{props.cardTitle}</h3>
      <h3 className={classes.cardPrice}>{props.cardPrice}</h3>
      {props.isDiscount && (
        <div>
          {" "}
          <h3 className={classes.oldPrice}>{props.oldPrice}</h3>
          <p className={classes.discount}>{props.discount}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
