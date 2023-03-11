import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/home.module.css";
import themes from "../config/theme";
import image from "../images/portfolio_img.png";
import line from "../images/line.svg";
import { Icon } from "@iconify/react";

function Home() {
  const theme = themes.lightTheme;
  if (window.innerWidth > 480) {
    return (
      <div className={style.home}>
        <div className={style.paragraph_container}>
          <p className={style.welcome}>Hello and welcome to my portfolio</p>
          <p className={style.intro}>
            Hi, I Am <br />
            Zine Ed-Dine
          </p>
          <p className={style.job_description}>
            <span>
              front-end developer with expertise in React.js and React Native.{" "}
            </span>{" "}
            <br />I create responsive and intuitive web applications and mobile
            apps. Take a look at my portfolio to see my recent work and what I
            can bring to your project.
          </p>
          <div className={style.line} />
          <div className={style.lets}>
            <span> Let’s take </span> a look on my <br />
            <div>
              portfolio
              <img src={line} />
            </div>
          </div>
        </div>
        <div className={style.imageWrap}>
          <img src={image} alt="zed_image" className={style.image} />
        </div>
      </div>
    );
  } else if (window.innerWidth <= 480) {
    return (
      <div className={style.home}>
        <p className={style.welcome}>Hello and welcome to my portfolio</p>
        <p className={style.intro}>
          Hi, I Am <br />
          Zine Ed-Dine
        </p>
        <div className={style.imageWrap}>
          <img src={image} alt="zed_image" className={style.image} />
        </div>
        <p className={style.job_description}>
          <span>
            front-end developer with expertise in React.js and React Native.{" "}
          </span>{" "}
          <br />I create responsive and intuitive web applications and mobile
          apps. Take a look at my portfolio to see my recent work and what I can
          bring to your project.
        </p>
        <div className={style.line} />
        <div className={style.lets}>
          <span> Let’s take </span> a look on my <br />
          portfolio
        </div>
        <Icon
          icon={"ic:round-keyboard-double-arrow-down"}
          className={style.icon}
        />
      </div>
    );
  }
}

export default Home;
