import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

function StarIcon({ full }) {
  return (
    <span>
      {" "}
      {full ? (
        <FontAwesomeIcon icon={fullStar} />
      ) : (
        <FontAwesomeIcon icon={emptyStar} />
      )}
    </span>
  );
}

export default StarIcon;
