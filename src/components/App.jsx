import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  // event is the event that triggered gthe function
  function handleChange(event) {
    console.log("changed");
    // the target is the element that triggered this event
    console.log(event.target.value);
    // value is the values of the attribute
    console.log(event.target.placeholder);
    console.log(event.target.type);
    setName(event.target.value);
  }

  function userSubmit() {
    // don't use curly braces when passing a value
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      {/* Controlled Component  */}
      <input
        // onChange attribute passes over an object  to the handle change function
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        // add value as the state in order to be a controlled component
        value={name}
      />
      <button onClick={userSubmit}>Submit</button>
    </div>
  );
}

export default App;
