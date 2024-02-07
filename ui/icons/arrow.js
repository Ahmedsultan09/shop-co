import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Arrow({ right, left, down, up }) {
  return (
    <>
      {" "}
      {right && <FontAwesomeIcon icon={faArrowRight} />}
      {left && <FontAwesomeIcon icon={faArrowLeft} />}
      {down && <FontAwesomeIcon icon={faArrowLeft} />}
      {up && <FontAwesomeIcon icon={faArrowUp} />}
    </>
  );
}

export default Arrow;
