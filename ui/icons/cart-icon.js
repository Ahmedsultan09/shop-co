import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function CartIcon() {
  return (
    <span>
      <FontAwesomeIcon icon={faCartShopping} />
    </span>
  );
}

export default CartIcon;
