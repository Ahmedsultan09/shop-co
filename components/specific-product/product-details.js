import Image from "next/image";
import React, { useState } from "react";
import StarIcon from "../../ui/icons/star-icon";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/cartSlice";

function ProductDetails({ data }) {
  let [orderedQuantity, setOrderedQuantity] = useState(1);
  let cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const description = data.description;
  const lines = description.split("\n").slice(0, 3);
  const actualRating = Math.floor(data.ratingsAverage);
  let payload = {
    name: data.title,
    id: data.id,
    price: data.price,
    image: data.imageCover,
    quantity: orderedQuantity,
  };
  function handleQuantity(method) {
    if (method === "add") {
      setOrderedQuantity((prev) => prev + 1);
    } else if (method === "less" && orderedQuantity != 1) {
      setOrderedQuantity((prev) => prev - 1);
    }
  }
  function handleAddToCart() {
    dispatch(actions.addToCart(payload));
    setOrderedQuantity(1);
  }
  function fullStars() {
    const stars = [];
    for (let i = 0; i < actualRating; i++) {
      stars.push(<StarIcon key={i} full={true} />);
    }
    return stars;
  }
  function emptyStars() {
    const stars = [];
    for (let i = 0; i < 5 - actualRating; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  }
  console.log(cartItems);

  return (
    <section className="py-5 px-10 flex flex-col lg:flex-row gap-2">
      {/* Images */}
      <aside className="lg:w-1/2 w-full h-[30rem] flex flex-col-reverse lg:flex-row items-center justify-center gap-1">
        <div className="lg:w-1/4 w-full h-[30rem] flex lg:flex-col flex-row justify-around">
          <span className="lg:w-full w-1/3 lg:h-[9.5rem] h-[7rem]">
            {" "}
            <Image
              src={data.images[0]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
          <span className="lg:w-full w-1/3 lg:h-[9.5rem] h-[7rem]">
            <Image
              src={data.images[1]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
          <span className="lg:w-full w-1/3 lg:h-[9.5rem] h-[7rem]">
            <Image
              src={data.images[2]}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
        </div>
        <div className="lg:w-3/4 w-full lg:h-full h-3/4 flex justify-center items-center ">
          <span className="w-full h-full py-1">
            <Image
              src={data.imageCover}
              width={150}
              height={150}
              alt={data.title}
              className={`w-full h-full object-contain border border-gray-300 border-solid rounded-lg bg-none`}
            />
          </span>
        </div>
      </aside>
      {/* Title and Details */}
      <aside className="w-full lg:w-1/2 h-[30rem] flex flex-col justify-start items-center">
        <div className="w-full h-1/2">
          <h1 className="text-xl lg:text-3xl flex items-center font-bold h-2/6  ">
            {data.title}
          </h1>
          <div className="w-full h-1/6  ">
            {" "}
            {fullStars()} <span>{emptyStars()}</span>{" "}
          </div>
          <div className="w-full h-1/6 border-b lg:text-2xl text-xl font-semibold ">
            {data.price}$
          </div>
          <p className="w-full h-2/6 opacity-70 text-xs lg:text-base border-b flex items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            bibendum, lacus quis pharetra ultricies, lacus enim mollis lacus, at
            molestie urna lorem at turpis.
          </p>
        </div>
        <div className="w-full h-1/2">
          <div className="w-full h-1/6 border-b">
            <Image
              src={data.brand.image}
              width={150}
              height={150}
              alt={data.brand.name}
              className={`w-full h-full object-contain bg-none`}
            />
          </div>
          <div className="w-full h-2/6">
            <h3 className="opacity-70 w-full h-1/4 flex items-center">
              Description{" "}
            </h3>
            <ul className="flex flex-row items-center w-full h-3/4 justify-evenly border-b">
              {lines.map((line, index) => (
                <li
                  key={index}
                  className="rounded-3xl bg-gray-100 text-opacity-60 text-black px-2 text-xs lg:text-base w-1/3 h-1/2 text-center"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-3/6 flex justify-center items-center gap-2">
            <div className="w-1/3 h-1/2 rounded-3xl bg-gray-100 flex justify-around items-center text-xs lg:text-2xl font-bold">
              <button onClick={() => handleQuantity("less")}>-</button>
              <span>{orderedQuantity}</span>
              <button onClick={() => handleQuantity("add")}>+</button>
            </div>
            <div className="w-2/3 h-1/2 rounded-3xl bg-black text-white flex items-center justify-center text-sm lg:text-2xl font-bold">
              <button className="w-full h-full" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default ProductDetails;
