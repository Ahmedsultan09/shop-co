import React from "react";
// import SocialMediaIcon from "../ui/social-media-icon";
// import ProductCard from "../ui/product/productCard";
import Nav from "../layout/header/nav";
import Hero from "../components/home/hero";
import BarndsLabel from "../components/home/brands-label";
import TopSelling from "../components/home/summirezed-products/top-selling";
function Index({ trimmedArray }) {
  return (
    <div>
      <Nav />
      <Hero />
      <BarndsLabel />
      <TopSelling data={trimmedArray} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products"
  );
  const products = await response.json();
  const data = products.data;
  const filtereData = data.filter((product) => {
    return product.sold > 1000;
  });
  const trimmedArray = filtereData.slice(4, 8);
  return {
    props: {
      trimmedArray,
    },
  };
}

export default Index;
