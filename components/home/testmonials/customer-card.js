import React from "react";
import StarIcon from "../../../ui/icons/star-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function CustomerCard() {
  return (
    <div className="lg:w-1/5 md:w-1/2 sm:w-full vs:w-full h-48 border border-solid border-red-700 overflow-hidden">
      <div className="h-1/5 border border-solid border-red-700">
        <StarIcon full={true} />
        <StarIcon full={true} />
        <StarIcon full={true} />
        <StarIcon full={true} />
        <StarIcon full={true} />
      </div>
      <div className="h-1/5 border border-solid border-red-700">
        <h2>Ahmed Sultan</h2>
        <FontAwesomeIcon icon={faCircleCheck} />{" "}
      </div>
      <div>
        <p className="w-fit h-3/5 border border-solid border-red-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut!{" "}
        </p>
      </div>
    </div>
  );
}

export default CustomerCard;
