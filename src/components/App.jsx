import React from "react";

import { useState } from "react";

function App() {
  const [handelingText, setHandelingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handelClick() {
    setHandelingText("submitted");
  }

  function handelMouseOver() {
    setMouseOver(true);
  }
  function handelMouseLeave() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{handelingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handelClick}
        onMouseOver={handelMouseOver}
        onMouseOut={handelMouseLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
