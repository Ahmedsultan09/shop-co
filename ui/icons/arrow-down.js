import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function ArrowDown() {
  return (
    <span className="mx-1 text-sm">
      <FontAwesomeIcon icon={faChevronDown} />
    </span>
  );
}

export default ArrowDown;
