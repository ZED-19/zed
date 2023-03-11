import { Icon } from "@iconify/react";
import React from "react";
import ReactDOM from "react-dom/client";
import themes from "../config/theme";
import style from "./styles/services.module.css";
import Title from "./title";
import webDev from "../images/web_dev.jpg";
import mobileDev from "../images/mobile_dev.jpg";

function Services() {
  const theme = themes.lightTheme;

  return (
    <div className={style.container} id={"services"}>
      <Title title={"services"} />
      <div className={style.ServiceContainer}>
        <div className={style.cardContainer}>
          <div className={style.serviceHeader}>
            <Icon
              icon={"heroicons:device-phone-mobile"}
              className={style.serviceIcon}
            />
            <h1 className={style.serviceTitle}>
              mobile applications development
            </h1>
          </div>
          <p className={style.serviceDescription}>
            Create cross-platform mobile apps with React Native. Implement
            modern design with Tailwind CSS. Utilize Git and GitHub for version
            control and Redux for state management.
          </p>
        </div>
        <img src={mobileDev} alt="First Image" className={style.firstImage} />
      </div>
      <div className={style.ServiceContainer}>
        <div className={style.cardContainer}>
          <div className={style.serviceHeader}>
            <Icon icon={"ph:laptop-light"} className={style.serviceIcon} />
            <h1 className={style.serviceTitle}>web applications development</h1>
          </div>
          <p className={style.serviceDescription}>
            Build professional web apps with ease using React, Tailwind CSS, and
            Bootstrap. Use Git and GitHub for version control and Redux for
            state management
          </p>
        </div>
        <img src={webDev} alt="First Image" className={style.secondImage} />
      </div>
    </div>
  );
}

export default Services;
