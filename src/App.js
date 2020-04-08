import React, { Component } from "react";
import { Page } from "./components/page";
import logo from "./logo.svg";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;
