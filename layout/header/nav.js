import React, { useEffect, useRef, useState } from "react";
import classes from "./nav.module.css";
import Logo from "../../ui/icons/shop-logo";
import ArrowDown from "../../ui/icons/arrow-down";
import SearchIcon from "../../ui/icons/search-icon";
import CartIcon from "../../ui/icons/cart-icon";
import UserIcon from "../../ui/icons/user";
import Link from "next/link";
import MenuBarsIcon from "../../ui/icons/menu-bars";
import MobileMenu from "./mobile-menu";
import DropDownMenu from "./drop-down-menu";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  let closeTimer;
  const menuBarsRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  function handleMobileMenu() {
    setShowMobileMenu((prev) => !prev);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuBarsRef.current &&
        !menuBarsRef.current.contains(event.target)
      ) {
        // Hide the mobile menu
        setShowMobileMenu(false);
      }
    };

    // Attach the event listener to the document body
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuRef]);

  return (
    <nav
      className={`w-screen h-16 p-3 flex items-center justify-around shadow-lg md:text-sm sm:text-xs lg:text-lg`}
    >
      <div className="lg:w-1/2 md:w-1/3 sm:w-1/4 vs:w-1/5 flex flex-row items-center">
        <Logo />
        <div
          className={` flex flex-row justify-start items-center w-5/6 h-full relative ml-4`}
        >
          <ul className="lg:flex flex-row justify-center items-center gap-4 cursor-pointer  md:hidden  sm:hidden vs:hidden">
            <li
              onClick={handleShopBtn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
            >
              Shop <ArrowDown /> {showMenu && <DropDownMenu />}
            </li>

            <Link href="/on-sale">On Sale</Link>
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/brands">Brands</Link>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-2/3 sm:w-3/4 vs:w-4/5 flex flex-row items-center ">
        <div
          className={`${classes.search} w-3/4  h-full rounded-3xl p-2 flex flex-row items-center justify-around bg-stone-200`}
        >
          <SearchIcon className="w-2/12" />
          <input
            type="text"
            className="w-full border-none outline-none rounded-3xl p-1 text-sm bg-transparent"
            placeholder="Search for products.."
          />
        </div>
        <div
          className={`flex flex-row w-1/4 justify-center items-center gap-3 lg:text-xl md:text-lg `}
        >
          <CartIcon />
          <UserIcon />
          <span
            onClick={handleMobileMenu}
            ref={menuBarsRef}
            className="lg:hidden md:flex sm:flex vs:flex"
          >
            <MenuBarsIcon />
          </span>
        </div>
      </div>
      <span className="lg:hidden">
        {showMobileMenu && <MobileMenu mobileMenuRef={mobileMenuRef} />}
      </span>
    </nav>
  );
}

export default Nav;
