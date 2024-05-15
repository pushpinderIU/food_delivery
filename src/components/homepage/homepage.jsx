import { useState } from "react";
import Hero_section from "../hero_section/hero_section/hero_section";
import FullWidthHeight from "../../try";

function Homepage() {
  return (
    <div>
      <div>
        <Hero_section />
        <FullWidthHeight />
        <FullWidthHeight />
        <FullWidthHeight />
        <FullWidthHeight />
      </div>
    </div>
  );
}
//delete fullwidthheight component this leads the responsive layout to break when it reaches the width of 330px
export default Homepage;
