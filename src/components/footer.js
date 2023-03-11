import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/footer.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";
import Title from "./title";

function Footer() {
  const theme = themes.lightTheme;
  return (
    <div className={style.footer_container}>
      <ul className={style.iconsList}>
        <li className={style.iconWrap}>
          <a href="#">
            <Icon icon="simple-icons:freelancer" className={style.icon} />
          </a>
        </li>
        <li className={style.iconWrap}>
          <a href="#">
            <Icon icon="simple-icons:upwork" className={style.icon} />
          </a>
        </li>
        <li className={style.iconWrap}>
          <a href="#">
            <Icon icon="jam:fiverr" className={style.icon} />
          </a>
        </li>
        <li className={style.iconWrap}>
          <a href="#">
            <Icon icon="akar-icons:linkedin-v2-fill" className={style.icon} />
          </a>
        </li>
      </ul>
      <p>
        Designed with <Icon icon={"mdi:cards-heart"} /> by ZED
      </p>
    </div>
  );
}

export default Footer;
