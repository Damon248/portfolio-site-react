import React from "react";
import "./works.scss";

function Works() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const changeSlide = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const data = [
    {
      id: 1,
      icon: <i class="fa fa-regular fa-mobile"></i>,
      title: "App developmnent",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis reiciendis eaque maiores! Repellendus, repudiandae.",
      img: "https://static.vecteezy.com/system/resources/previews/000/662/715/original/vector-mobile-application-development-bussiness-banner.jpg",
    },
    {
      id: 2,
      icon: <i class="fa fa-solid fa-globe"></i>,
      title: "web development",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis reiciendis eaque maiores! Repellendus, repudiandae.",
      img: "https://static.vecteezy.com/system/resources/previews/000/271/024/original/vector-web-development-web-banner.jpg",
    },
    {
      id: 3,
      icon: <i class="fa fa-solid fa-pen-nib"></i>,
      title: "Graphic designing",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis reiciendis eaque maiores! Repellendus, repudiandae.",
      img: "https://jeweltoned.com/wp-content/uploads/2020/06/Graphic-Designing.jpg",
    },
  ];

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((currentItem) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">{currentItem.icon}</div>
                  <h2>{currentItem.title}</h2>
                  <p>{currentItem.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={currentItem.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <i
        class="fa fa-solid fa-chevron-left arrow"
        onClick={() => changeSlide("left")}
      ></i>
      <i
        class="fa fa-solid fa-chevron-right arrow"
        onClick={() => changeSlide()}
      ></i>
    </div>
  );
}

export default Works;
