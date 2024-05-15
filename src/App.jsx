import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login_page/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-gradient-to-r from-[#ffb800] via-[#ffa902] via-[#ffa303] via-[#ff9706] to-[#ff8809] w-full h-full">
        <AnimatedCursor
          color="transparent"
          innerSize={30}
          outerSize={30}
          outerAlpha={2}
          innerScale={2}
          outerScale={1}
          trailingSpeed={8}
          outerStyle={{
            border: "2px solid black",
            background: "black",
          }}
          innerStyle={{
            border: "2px solid white",
            background: "transparent",
          }}
        />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
//delete fullwidthheight component this leads the responsive layout to break when it reaches the width of 330px
export default App;
