import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function SocialMediaIcon(props) {
  return (
    <div className="w-6 h-6 hover:bg-black rounded-full hover:text-white flex justify-center items-center transition-all cursor-pointer">
      {props.linkedIn && <FontAwesomeIcon icon={faLinkedin} />}{" "}
      {props.x && <FontAwesomeIcon icon={faXTwitter} />}{" "}
      {props.gitHub && <FontAwesomeIcon icon={faGithub} />}
      {props.instgram && <FontAwesomeIcon icon={faInstagram} />}{" "}
      {props.faceBook && <FontAwesomeIcon icon={faFacebook} />}{" "}
    </div>
  );
}

export default SocialMediaIcon;
