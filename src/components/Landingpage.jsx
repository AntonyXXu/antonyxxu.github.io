import React from "react";
import Typed from "react-typed";

const Landingpage = () => {
  const titles = [
    "a Software Developer",
    "a Process Engineer",
    "a Data Scientist",
    "an Operations Leader",
  ];
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container">
          <h1>My name is Antony Xu</h1>
          <p>
            <span>
              I'm{" "}
              <Typed
                strings={titles}
                typeSpeed={50}
                backSpeed={30}
                loop={true}
              />
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;