import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/about.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";
import Title from "./title";
import image from "../images/portfolio_img.png";

function About() {
  const theme = themes.lightTheme;

  return (
    <div className={style.container}>
      <div className={style.childContainer}>
        <Title title="about me" id="about" />
        <div className={style.txtContainer}>
          <p className={style.txt}>
            <span>
              Mohammed Belkacem Zine Eddine is a software developer with
              experience in React JS and React Native.
            </span>{" "}
            He is passionate about programming and dedicated to delivering
            high-quality software solutions. Zine Eddine is committed to staying
            up-to-date with the latest developments in the tech industry and
            enjoys exploring new technologies. He is a motivated individual who
            is always looking for ways to improve his coding abilities.
          </p>
          <a href="#" className={style.cvBtn}>
            Download cv
          </a>
        </div>
      </div>
      <div className={style.imageWrap}>
        <img src={image} alt="zed image" className={style.zedImage} />
      </div>
    </div>
  );
}

export default About;
