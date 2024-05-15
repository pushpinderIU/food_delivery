import React from "react";
import HeroText from "../../../assets/homepage_content/burger.png";
import "./hero_text.css";

const HeroTextComponent = () => {
  return (
    <div className=" w-full h-full">
      <div className="">
        <p className=" relative sm:left-15 lg:left-32 font-custom text-white text-6xl font-bold uppercase sm:text-6xl lg:text-8xl shiny-text">
          When Life
        </p>
        <p className=" relative sm:left-48 lg:left-56 font-custom text-white text-3xl font-bold uppercase sm:text-4xl lg:text-5xl shiny-text">
          Throws You a
        </p>
      </div>
      <div>
        <img src={HeroText} className="fixed left-0" />
        <p className="relative sm:left-20 lg:left-32 font-custom text-black text-4xl font-extrabold uppercase sm:text-6xl lg:text-8xl ">
          Burger
        </p>
        <h1 className="relative sm:left-48 lg:left-96 font-custom text-white text-2xl font-bold uppercase sm:text-5xl lg:text-7xl shiny-text">
          Eat IT
        </h1>
      </div>
    </div>
  );
};

export default HeroTextComponent;
