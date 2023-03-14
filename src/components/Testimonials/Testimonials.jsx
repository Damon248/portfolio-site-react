import React from "react";
import "./testimonials.scss";

function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Alex D.",
      title: "CEO of S.A.",
      img: "https://celebmafia.com/wp-content/uploads/2020/06/alexandra-daddario-instagram-photos-06-06-2020-3.jpg",
      icon: <i class="fab fa-twitter"></i>,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing, amet consectetur adipisicing, Lorem ipsum dolor.",
    },
    {
      id: 2,
      name: "Jenny L.",
      title: "CEO of X-MEN",
      img: "https://i.redd.it/06h3f4uazgq51.jpg",
      icon: <i class="fab fa-youtube"></i>,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing, Lorem ipsum dolor sit amet consectetur adipisicing.",
      featured: true,
    },
    {
      id: 3,
      name: "Lizzy O.",
      title: "CEO of A.E.",
      img: "https://www.mordeo.org/files/uploads/2019/07/American-Actress-Elizabeth-Olsen-4K-Ultra-HD-Mobile-Wallpaper.jpg",
      icon: <i class="fab fa-instagram"></i>,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing, Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((currentElement) => (
          <div className={currentElement.featured ? "featured card" : "card"}>
            <div className="top">
              <i class="fa fa-solid fa-chevron-left left"></i>
              <img src={currentElement.img} alt="" />
              {/* <i class="fa fa-brands fa-youtube"></i> */}
              {/* <i class="fa fs-solid fa-square-youtube"></i> */}
              {currentElement.icon}
            </div>
            <div className="center">{currentElement.desc}</div>
            <div className="bottom">
              <h3>{currentElement.name}</h3>
              <h4>{currentElement.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
