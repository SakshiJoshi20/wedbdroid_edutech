import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <header>
      <div
        style={{
          boxShadow: "2px 2px 5px 5px silver",
          width: "auto",
          height: "50px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <a
          href="#/"
          className="logo"
          style={{
            textDecoration: "none",
            color: " black",
            marginLeft: "10px",
            marginTop: "15px"
          }}
        >
          WebDroid
        </a>
        <Navbar />
      </div>
    </header>
  );
}
export default App;
