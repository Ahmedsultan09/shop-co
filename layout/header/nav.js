import React, { useState } from "react";
import classes from "./nav.module.css";
import { Vina_Sans as vina } from "next/font/google";
import { Noto_Naskh_Arabic as noto } from "next/font/google";
import ArrowDown from "../../ui/icons/arrow-down";
import SearchIcon from "../../ui/icons/search-icon";
import CartIcon from "../../ui/icons/cart-icon";
import UserIcon from "../../ui/icons/user";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";
const vinaSans = vina({
  weight: "400",
  subsets: ["latin"],
});
const Noto = noto({
  weight: "400",
  subsets: ["latin"],
});
function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  let closeTimer;
  function handleShopBtn() {
    setShowMenu((prev) => !prev);
  }

  function handleMouseEnter() {
    clearTimeout(closeTimer);
  }

  function handleMouseLeave() {
    closeTimer = setTimeout(() => {
      setShowMenu(false);
    }, 200);
  }

  return (
    <nav
      className={`${classes.nav} w-screen h-16 p-3 flex items-center justify-around shadow-lg`}
    >
      <div className="w-1/2 flex flex-row items-center">
        {" "}
        <Link
          href="/"
          className={`${classes.logo}  ${vinaSans.className} text-4xl w-1/6 flex items-center justify-center cursor-pointer`}
        >
          SHOP.CO
        </Link>
        <div
          className={`${classes.categories} flex flex-row justify-start items-center w-5/6 h-full relative ml-4`}
        >
          <ul className="flex flex-row justify-center items-center gap-4 cursor-pointer">
            <li
              className={`${classes.shopBtn}`}
              onClick={handleShopBtn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
            >
              Shop
              <ArrowDown />
              {showMenu && <DropDownMenu />}{" "}
            </li>

            <Link href="/on-sale">On Sale</Link>

            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/brands">Brands</Link>
          </ul>
        </div>
      </div>
      <div className="w-1/2 flex flex-row items-center">
        <div
          className={`${classes.search} w-3/4 h-full rounded-3xl p-2 flex flex-row items-center justify-around bg-stone-200`}
        >
          <SearchIcon className="w-2/12" />
          <input
            type="text"
            className="w-full border-none outline-none rounded-3xl p-1 text-sm bg-transparent"
            placeholder="Search for products.."
          />
        </div>
        <div
          className={`${classes.cart} flex flex-row w-1/4 justify-center items-center gap-3 text-xl`}
        >
          <CartIcon />
          <UserIcon />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
