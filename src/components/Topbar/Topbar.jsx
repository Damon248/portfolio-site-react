import React from "react";
import "./topbar.scss";

function Topbar({ menu, toggle }) {
  return (
    <div className={"topbar " + (menu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            curious.
          </a>
          <div className="item-container">
            <i class="fa fa-solid fa-address-book icon"></i>
            <span>+1 12345 54321</span>
          </div>
          <div className="item-container">
            <i class="fa fa-solid fa-envelope icon"></i>
            <span>natasha@curious.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={toggle}>
            {/* <i class="fa fa-sharp fa-solid fa-bars icon"></i> */}
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
