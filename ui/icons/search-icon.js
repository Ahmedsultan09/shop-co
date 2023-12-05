import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function SearchIcon() {
  return (
    <span className="opacity-40">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>
  );
}

export default SearchIcon;
