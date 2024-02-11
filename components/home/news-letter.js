import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NewsLetter() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <section className="w-full h-64 flex justify-center items-center">
      <div className="w-4/5 h-4/5 bg-black rounded-2xl flex flex-row justify-between items-center box-border p-8">
        <h2 className="w-2/3 h-full font-bold text-4xl text-white flex justify-center items-center leading-snug">
          STAY UP TO DATE ABOUT WITH OUR LATEST OFFERS
        </h2>{" "}
        <div className="w-1/2 flex justify-center items-center flex-col gap-4">
          <div className="relative w-4/5 ">
            <input
              type="email"
              className="w-full h-11 bg-white text-black rounded-2xl text-center outline-none border-none"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            {inputValue === "" && (
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            )}
          </div>

          <button className="w-4/5 h-11 bg-white text-black rounded-2xl font-bold">
            Subscribe to Newsletter
          </button>
        </div>{" "}
      </div>
    </section>
  );
}

export default NewsLetter;
