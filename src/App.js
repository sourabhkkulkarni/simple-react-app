import React, { useState,useRef } from "react";

const uData = {
  "UASER!": [
    [
      {
        stepName: "Create DB Infra and DB Engine",
      },
    ],
  ],
  "AWS-OR": [
    [
      {
        stepName: "Create DB Infra and DB Engine",
      },
    ],
  ],
};

const App = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const buttonRef = useRef();

  const handleClick = () => {
    // Call the click() method on the button ref
    buttonRef.current.click();
  };

  return (
    <div>
      <button ref={buttonRef} onClick={() => alert("Button1 clicked")}>
        Button 1
      </button>
      <button onClick={handleClick}>Trigger Button Click</button>
    </div>
  );
};

export default App;
