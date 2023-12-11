import React from "react";
import Router from "next/router";

function SpecificCategory() {
  const slug = Router.query.specificCategory;
  console.log(slug);
  return <div>{slug}</div>;
}

export default SpecificCategory;
