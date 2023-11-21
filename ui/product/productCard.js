import Image from "next/image";
import React from "react";

function productCard(props) {
  return (
    <div>
      <div className={classes.cardImage}>
        <Image src={props.src} alt={props.alt} />
      </div>
      <h3 className={classes.cardTitle}>{props.cardTitle}</h3>
      <h3 className={classes.cardPrice}>{props.cardPrice}</h3>
      {props.isDiscount && (
        <>
          {" "}
          <h3 className={classes.oldPrice}>{props.oldPrice}</h3>
          <p className={classes.discount}>{props.discount}</p>
        </>
      )}
    </div>
  );
}

export default productCard;
