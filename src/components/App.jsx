import React from "react";

import { useState } from "react";

function App() {
  const [handelingText, setHandelingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  function handelClick() {
    setHandelingText("submitted");
  }
  function handelChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handelMouseOver() {
    setMouseOver(true);
  }
  function handelMouseLeave() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{handelingText + " " + name}</h1>
      <input
        onChange={handelChange}
        type="text"
        placeholder="What's your name?"
      />
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
