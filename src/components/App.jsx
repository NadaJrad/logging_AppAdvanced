import React from "react";

import { useState } from "react";

function App() {
  const [isMousedOver, setMouseOver] = useState(false);

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handelClick(event) {
    event.preventDefault();
  }
  function handelChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setContact((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email,
        };
      } else if (inputName === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue,
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
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>

      <form onSubmit={handelClick}>
        <input
          name="fName"
          onChange={handelChange}
          placeholder="  Name"
          value={contact.fName} //  Uncontrolled Component
        />
        <input
          name="lName"
          onChange={handelChange}
          placeholder=" LastName"
          value={contact.lName} // Uncontrolled Component
        />
        <input
          name="email"
          onChange={handelChange}
          placeholder=" your E-mail"
          value={contact.email}
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
