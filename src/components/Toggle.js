import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return (
    <button
      style={{
        color: "white",
        borderRadius: "5px",
        backgroundColor: "royalblue",
        padding: "10px",
      }}
      onClick={handleToggle}
    >
      {toggle ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
