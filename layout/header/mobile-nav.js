/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../ui/icons/shop-logo";

function MobileNav({ mobileMenuRef, handleMobileMenu }) {
  return (
    <>
      {" "}
      <aside
        className={`absolute  right-0 top-0 scroll-smooth overflow-auto w-2/3 h-full shadow-lg z-10 bg-white flex items-center justify-start flex-col box-border py-10 gap-5`}
        ref={mobileMenuRef}
      >
        <Logo />
        <Link
          href="/categories/women's-fashion"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Women's Fashion
        </Link>
        <Link
          href="/categories/men's-fashion"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Men's Fashion
        </Link>
        <Link
          href="/categories/music"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Music
        </Link>
        <Link
          href="/categories/supermarket"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Super Market
        </Link>
        <Link
          href="/categories/baby-and-toys"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Baby & Toys
        </Link>
        <Link
          href="/categories/home"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Home
        </Link>
        <Link
          href="/categories/books"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Books
        </Link>
        <Link
          href="/categories/beauty-and-health"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Beauty & Health
        </Link>
        <Link
          href="/categories/mobiles"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Mobiles
        </Link>
        <Link
          href="/categories/electronics"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Electronics
        </Link>
        <Link
          href="/on-sale"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          On Sale
        </Link>

        <Link
          href="/new-arrivals"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          New Arrivals
        </Link>
        <Link
          href="/brands"
          className="w-full h-6 p-4 flex justify-start items-center border-b-2 border-gray-50 border-solid rounded-md transition-all"
        >
          Brands
        </Link>
      </aside>
    </>
  );
}

export default MobileNav;
