import React, { Component } from "react";

class MainContainer extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="about-channel border-bottom py-2 px-3">
          <h4 className="channel-name font-weight-bold"># announcement</h4>
          <div className="channel-desc">android Developmen helpers</div>
        </div>
        <div className="message-list py-2 px-3">
          <div className="message d-flex my-2">
            <div className="left-block pt-1">
              <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72" />
            </div>
            <div className="right-block pl-3">
              <div className="user d-flex">
                <div className="font-weight-bold">XYZ</div>
                <span className="pl-2 pt-1">1:46 PM</span>
              </div>
              <div className="user-message">Hello! What's up?</div>
            </div>
          </div>

          <div className="message d-flex">
            <div className="left-block pt-1">
              <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72" />
            </div>
            <div className="right-block pl-3">
              <div className="user d-flex">
                <div className="font-weight-bold">XYZ</div>
                <span className="pl-2 pt-1">1:46 PM</span>
              </div>
              <div className="user-message">Hello! What's up?</div>
            </div>
          </div>
        </div>
        <div className="container chat-box py-2 px-3">
          <div className="row">
            <div className="col-md-12">
              <textarea placeholder="Type something and press enter ..."></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
