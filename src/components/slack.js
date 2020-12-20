import React, { Component } from "react";
import { MainContainer, SideBar } from "./index";

class Slack extends Component {
  render() {
    return (
      <div className="slack d-flex">
        <SideBar />
        <MainContainer />
      </div>
    );
  }
}

export default Slack;
