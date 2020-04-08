import React, { Component } from "react";

export class Page extends Component {
  constructor() {
    super();
    this.state = {
      message: "Sarfaroj Gayen",
      add: "Kolkata"
    };
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.message} {this.state.add}
        </h1>
      </div>
    );
  }
}

export default Page;
