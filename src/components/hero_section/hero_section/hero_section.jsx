import React from "react";
import Hero_text from "../text_section/hero_text";
import Spline_app from "../3d_model/spline_component";

const Hero_section = () => {
  return (
    <div className="relative flex flex-row items-start lg:flex-row lg:justify-start">
      <div className="relative">
        <Hero_text />
      </div>
      <div className="relative lg:absolute lg:right-0 lg:top-0">
        <Spline_app />
      </div>
    </div>
  );
};

export default Hero_section;
