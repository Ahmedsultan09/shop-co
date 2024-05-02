import React from "react";
import {
  getAllProducts,
  getSpecificProduct,
  getSimilarProducts,
} from "../../helpers/api-util";
import ProductDetails from "../../components/specific-product/product-details";
import Nav from "../../layout/header/nav";
import Head from "next/head";

function SpecificProduct({ specificProduct, similarProducts }) {
  return (
    <>
      <Head>
        <title>{specificProduct.title}</title>
      </Head>
      <Nav />
      <ProductDetails data={specificProduct} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const id = params.specificProduct;
  const specificProduct = await getSpecificProduct(id);
  const similarProducts = await getSimilarProducts(specificProduct.brand._id);
  return {
    props: {
      specificProduct,
    },
  };
}

export async function getStaticPaths() {
  const allProducts = await getAllProducts();
  const paths = allProducts.map((product) => ({
    params: { specificProduct: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default SpecificProduct;
