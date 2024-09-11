import React from "react";

import { useState } from "react";

function App() {
  const [handelingText, setHandelingText] = useState("Hello");
  function handelClick() {
    setHandelingText("submitted");
  }
  return (
    <div className="container">
      <h1>{handelingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handelClick}>Submit</button>
    </div>
  );
}

export default App;
