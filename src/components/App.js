import React from "react";
import Toggle from "./Toggle";

function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        margin: "auto auto",
        marginTop: "3em",
        maxWidth: "200px",
        color: "royalblue",
        fontSize: "1.5em",
        backgroundColor: "whitesmoke",
        padding: "2em",
        textAlign: "center",
      }}
    >
      <h3>Toggle</h3>
      <Toggle />
    </div>
  );
}

export default App;
