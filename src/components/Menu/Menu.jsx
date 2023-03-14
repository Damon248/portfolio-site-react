import React from "react";
import "./menu.scss";

function Menu({ menu, toggle }) {
  return (
    <div className={"menu " + (menu && "active")}>
      <ul>
        <li onClick={toggle}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={toggle}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={toggle}>
          <a href="#works">Works</a>
        </li>
        <li onClick={toggle}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={toggle}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
