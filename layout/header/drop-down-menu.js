import React from "react";
import classes from "./nav.module.css";
import Link from "next/link";

function DropDownMenu() {
  return (
    <div
      className={`${classes.dropDown}  absolute flex flex-row flex-wrap w-3/4 left-0 top-11 box-content p-4 h-60 rounded-b-xl shadow-2xl  bg-white`}
    >
      <Link
        href="/categories/women's-fashion"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Women's Fashion
      </Link>
      <Link
        href="/categories/men's-fashion"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Men's Fashion
      </Link>
      <Link
        href="/categories/music"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Music
      </Link>
      <Link
        href="/categories/supermarket"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        SuperMarket
      </Link>
      <Link
        href="/categories/baby-and-toys"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Baby & Toys
      </Link>
      <Link
        href="/categories/home"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Home
      </Link>
      <Link
        href="/categories/books"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Books
      </Link>
      <Link
        href="/categories/beauty-and-health"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Beauty & Health
      </Link>
      <Link
        href="/categories/mobiles"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Mobiles
      </Link>
      <Link
        href="/categories/electronics"
        className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
      >
        Electronics
      </Link>
    </div>
  );
}

export default DropDownMenu;
