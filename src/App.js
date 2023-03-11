import "./App.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Home from "./components/home";
import themes from "./config/theme";
import SkillsList from "./components/skillsList";
import Services from "./components/services";
import Works from "./components/works";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const theme = themes.colors;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  window.onresize = () => {
    if (window.innerWidth > 480 && isMobile) {
      window.location.reload();
    } else if (window.innerWidth <= 480 && !isMobile) {
      window.location.reload();
    }
  };
  return (
    <div className="App" style={{ backgroundColor: theme.slate_100 }}>
      <Header />
      <Home />
      <SkillsList />
      <Services />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
