import React from "react";
import StarIcon from "../../../ui/icons/star-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function CustomerCard() {
  return (
    <div className="w-[25rem] h-3/4 border border-solid border-red-700 overflow-hidden p-4">
      <div className="h-1/5 border border-solid border-red-700">
        <StarIcon full={true} />
        <StarIcon full={true} />
        <StarIcon full={true} />
        <StarIcon full={true} />
        <StarIcon full={true} />
      </div>
      <div className="h-1/5 border border-solid border-red-700 flex justify-start items-center flex-row gap-2">
        <h2 className="font-bold">Ahmed Sultan</h2>
        <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />{" "}
      </div>
      <div>
        <p className="w-full h-3/5  border border-solid border-red-700 opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          volup molestiae quas vel sint commodi repudiandae consequuntur volup
          molestiae quas vel sint commodi repudiandae consequuntur volup
        </p>
      </div>
    </div>
  );
}

export default CustomerCard;
