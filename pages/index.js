import React from "react";
import SocialMediaIcon from "../ui/social-media-icon";
import ProductCard from "../ui/product/productCard";

function Index() {
  return (
    <div>
      <SocialMediaIcon linkedIn={true} />
      <ProductCard rating={2} isDiscount={true} discount={50} oldPrice={122} />
    </div>
  );
}

export default Index;
