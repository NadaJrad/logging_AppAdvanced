import React from "react";

import { useState } from "react";

function App() {
  const [isMousedOver, setMouseOver] = useState(false);

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  function handelClick(event) {
    event.preventDefault();
  }
  function handelChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }

  function handelMouseOver() {
    setMouseOver(true);
  }
  function handelMouseLeave() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>

      <form onSubmit={handelClick}>
        <input
          name="fName"
          onChange={handelChange}
          placeholder=" your Name?"
          value={fullName.fName} //  Uncontrolled Component
        />
        <input
          name="lName"
          onChange={handelChange}
          placeholder=" your LastName?"
          value={fullName.lName} // Uncontrolled Component
        />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          // onClick={handelClick}
          onMouseOver={handelMouseOver}
          onMouseOut={handelMouseLeave}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
