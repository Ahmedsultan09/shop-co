import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

function StarIcon({ full }) {
  return (
    <span>
      {" "}
      {full ? (
        <FontAwesomeIcon icon={fullStar} className="text-yellow-400" />
      ) : (
        <FontAwesomeIcon icon={emptyStar} className="text-yellow-400" />
      )}
    </span>
  );
}

export default StarIcon;
