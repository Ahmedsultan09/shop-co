import React from "react";
import { getAllProducts, getSpecificProduct } from "../../helpers/api-util";
import ProductDetails from "../../components/specific-product/product-details";
import Nav from "../../layout/header/nav";

function SpecificProduct({ specificProduct }) {
  console.log(specificProduct);

  return (
    <>
      <Nav />
      <ProductDetails data={specificProduct} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const id = params.specificProduct;
  const specificProduct = await getSpecificProduct(id);
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
