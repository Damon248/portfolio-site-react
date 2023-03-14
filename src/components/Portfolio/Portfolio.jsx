import React from "react";
import "./portfolio.scss";
import PortfolioList from "../Portfoliolist/PortfolioList";
import {
  featuredPortfolio,
  mobileAppPortfolio,
  webAppPortfolio,
  graphicDesignPortfolio,
  contentPortfolio,
} from "../../data";

function Portfolio() {
  const [selected, setSelected] = React.useState("featured");
  const [data, setData] = React.useState([]);

  function selectItem(id) {
    setSelected(id);
  }

  React.useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "mobile":
        setData(mobileAppPortfolio);
        break;
      case "web":
        setData(webAppPortfolio);
        break;
      case "graphic":
        setData(graphicDesignPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "web",
      title: "Web App",
    },

    {
      id: "graphic",
      title: "Graphic Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((currentItem) => (
          <PortfolioList
            title={currentItem.title}
            active={selected === currentItem.id}
            selectItem={selectItem}
            id={currentItem.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((currentData) => (
          <div className="item">
            <img src={currentData.img} />
            <h3>{currentData.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
