import React, { Component } from "react";
import ReactDOM from "react-dom";
import menuImage from "../public/figtreeMenu.png";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "auto"
        }}
      >
        <img src={menuImage} alt="menu" width="100%" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
