import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialMediaIcon(props) {
  return (
    <div>
      {props.linkedIn && <FontAwesomeIcon icon={faLinkedin} />}{" "}
      {props.x && <FontAwesomeIcon icon={faXTwitter} />}{" "}
      {props.gitHub && <FontAwesomeIcon icon={faGithub} />}
      {props.instgram && <i class={faInstagram}></i>}{" "}
    </div>
  );
}

export default SocialMediaIcon;
