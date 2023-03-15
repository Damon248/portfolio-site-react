import React, { useEffect } from "react";
import "./intro.scss";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="/src/assets/images/MyImg1.png" /> */}
          <img src="https://i.ibb.co/0XVPxXX/MyImg1.png" alt="MyImg1" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello There! I'm</h2>
          <h1>Natasha Watson</h1>
          <h3>
            <span>
              <Typewriter
                options={{
                  strings: [
                    "Full-stack Developer",
                    "Graphic Designer",
                    "Content Writer",
                  ],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <i class="fa fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
}

export default Intro;
