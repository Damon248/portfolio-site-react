import React from "react";
import "./portfoliolist.scss";

function PortfolioList({ title, active, id, selectItem }) {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => selectItem(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
