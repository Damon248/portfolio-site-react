import React from "react";
import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";

function App() {
  const [menu, setMenu] = React.useState(false);

  const toggle = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <div className="app">
      <Topbar menu={menu} toggle={toggle} />
      <Menu menu={menu} toggle={toggle} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
