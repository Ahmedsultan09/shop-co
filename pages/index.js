import React from "react";
import Nav from "../layout/header/nav";
import Hero from "../components/home/hero";
import BarndsLabel from "../components/home/brands-label";
import SumProducts from "../components/sum-products";
import CategoriesCard from "../components/categories-card";
import Reviews from "../components/home/testmonials/reviews";
import { getAllCategories, getNewArrivalsProducts } from "../helpers/api-util";
import { getAllProducts } from "../helpers/api-util";
import { getTopSellingProducts } from "../helpers/api-util";
import NewsLetter from "../components/home/news-letter";
function Index({ categories, topSelling, newArrivals }) {
  return (
    <div>
      <Nav />
      <Hero />
      <BarndsLabel />
      <SumProducts data={topSelling} title={"Top Selling"} />
      <SumProducts data={newArrivals} title={"New Arrivals"} />
      <CategoriesCard data={categories} />
      <Reviews />
      <NewsLetter />
    </div>
  );
}

export async function getStaticProps() {
  const [
    productsData,
    categoriesData,
    topSellingProducts,
    newArrivalsProducts,
  ] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
    getTopSellingProducts(),
    getNewArrivalsProducts(),
  ]);
  return {
    props: {
      prodcuts: productsData,
      categories: categoriesData,
      topSelling: topSellingProducts,
      newArrivals: newArrivalsProducts,
    },
  };
}

export default Index;
