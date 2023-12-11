import React from "react";
import classes from "./nav.module.css";
import Link from "next/link";

function DropDownMenu() {
  const categories = [
    { href: "/categories/music", label: "Music" },
    { href: "/categories/men's-fashion", label: "Men's Fashion" },
    { href: "/categories/women's-fashion", label: "Women's Fashion" },
    { href: "/categories/supermarket", label: "Supermarket" },
    { href: "/categories/baby-and-toys", label: "Baby & Toys" },
    { href: "/categories/home", label: "Home" },
    { href: "/categories/books", label: "Books" },
    { href: "/categories/beauty-and-health", label: "Beauty & Health" },
    { href: "/categories/mobiles", label: "Mobiles" },
    { href: "/categories/electronics", label: "Electronics" },
  ];

  const CustomLink = ({ href, label }) => (
    <Link
      href={href}
      className="w-1/2 h-6 p-4 flex justify-start items-center hover:bg-slate-100 rounded-md transition-all"
    >
      {label}
    </Link>
  );

  return (
    <div
      className={`${classes.dropDown} absolute flex flex-row flex-wrap w-1/2 left-0 top-11 box-content p-4 h-60 rounded-b-xl shadow-2xl z-10`}
    >
      {categories.map((category, index) => (
        <CustomLink key={index} {...category} />
      ))}
    </div>
  );
}

export default DropDownMenu;
