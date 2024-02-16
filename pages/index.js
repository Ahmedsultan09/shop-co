import React from "react";
import Head from "next/head";
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
      <Head>
        <title>Shop.co</title>
        <meta name="description" content="Discover a diverse selection of high-quality products for every need and occasion at Shop.co. From fashion essentials to home decor, electronics, beauty products, and more, we offer a wide range of meticulously curated items to elevate your lifestyle. Shop with confidence and convenience, knowing that each purchase is backed by our commitment to exceptional quality and customer satisfaction. Explore our extensive collection today and find exactly what you're looking for, all in one place." />      </Head>
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
