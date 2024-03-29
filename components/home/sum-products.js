import React from "react";
import ProductCard from "../../ui/product/productCard";
import { Vina_Sans as vina } from "next/font/google";
import ViewAllBtn from "../../ui/view-all-btn";
const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});

function SumProducts({ data, title }) {
  return (
    <section className="w-full h-1/2 flex flex-col justify-around items-center">
      <h1
        className={`${vinaSans.className} font-medium text-7xl w-full h-1/5 text-center py-7`}
      >
        {title}
      </h1>
      <div className="w-full h-4/5 flex flex-col justify-center items-center gap-5">
        <div className="w-full flex flex-row flex-wrap justify-around items-center h-4/5">
          {data.map((product) => {
            return (
              <ProductCard
                imgSrc={product.imageCover}
                imgAlt={product.title}
                cardTitle={product.title}
                oldPrice={product.price}
                key={product.id}
                newPrice={product.priceAfterDiscount}
                rating={product.ratingsAverage}
              />
            );
          })}{" "}
        </div>
        <div className="w-full h-1/5 flex justify-center items-center py-5">
          {" "}
          <ViewAllBtn />
        </div>
      </div>
    </section>
  );
}

export default SumProducts;
