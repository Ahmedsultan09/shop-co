import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function NewsLetter() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <section className="w-full lg:h-64 md:h-96 sm:h-96 vs:h-96 flex justify-center items-center">
      <div className="w-4/5 h-4/5 bg-black rounded-2xl flex lg:flex-row md:flex-col sm:flex-col vs:flex-col justify-between items-center box-border p-8">
        <h2 className="lg:w-2/3  md:w-full sm:w-full vs:w-full h-full font-bold lg:text-4xl md:text-2xl sm:text-xl vs:text-xl text-white flex justify-center items-center leading-snug">
          STAY UP TO DATE ABOUT WITH OUR LATEST OFFERS
        </h2>{" "}
        <div className="lg:w-1/2 md:w-full sm:w-full vs:w-full flex justify-center items-center flex-col gap-4">
          <div className="relative lg:w-4/5  md:w-full sm:w-full vs:w-full">
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

          <button className="lg:w-4/5  md:w-full sm:w-full vs:w-full h-11 bg-white text-black rounded-2xl font-bold">
            Subscribe to Newsletter
          </button>
        </div>{" "}
      </div>
    </section>
  );
}

export default NewsLetter;
