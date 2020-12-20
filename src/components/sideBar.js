import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar text-white">
        <div className="user-profile pt-3">
          <div className="row pl-3">
            <div className="col-3 pl-2">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg"
                class="img-fluid text-left"
                alt="Responsive image"
              />
            </div>
            <div className="col-9 bold text-left pt-2 pr-3">Gaurish Anand</div>
          </div>
        </div>

        <hr className="sidebar-spacer bg-white" />

        <div className="channels pl-3">
          <div className="header font-weight-bold mb-2" stl>
            Channels
          </div>
          <ul className="channels-list">
            <li className="my-1">#Assignment</li>
            <li className="my-1">#Test</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
