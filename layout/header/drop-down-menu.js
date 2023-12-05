import React from "react";
import classes from "./nav.module.css";

function DropDownMenu() {
  return (
    <div
      className={`${classes.dropDown} w-full absolute flex flex-row flex-wrap`}
    ></div>
  );
}

export default DropDownMenu;
