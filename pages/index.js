import React from "react";
// import SocialMediaIcon from "../ui/social-media-icon";
// import ProductCard from "../ui/product/productCard";
import Nav from "../layout/header/nav";
import Hero from "../components/home/hero";
import BarndsLabel from "../components/home/brands-label";
import SumProducts from "../components/sum-products";
import CategoriesCard from "../components/categories-card";
function Index({ data, categoriesData }) {
  const topSellingData = data
    .filter((product) => {
      return product.sold > 2000;
    })
    .slice(1, 5);
  const newArrivalsData = data
    .filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate;
    })
    .slice(8, 12)
    .sort();

  return (
    <div>
      <Nav />
      <Hero />
      <BarndsLabel />
      <SumProducts data={topSellingData} title={"Top Selling"} />
      <SumProducts data={newArrivalsData} title={"New Arrivals"} />
      <CategoriesCard data={categoriesData} />
    </div>
  );
}

export async function getStaticProps() {
  const productsResponse = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products"
  );
  const products = await productsResponse.json();
  const data = products.data;
  const categoriesResponse = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );
  const categories = await categoriesResponse.json();
  const categoriesData = categories.data;
  return {
    props: {
      data,
      categoriesData,
    },
  };
}

export default Index;
