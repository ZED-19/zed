import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/template.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";

function Template(props) {
  const theme = themes.lightTheme;
  return (
    <div className={style.template_wrap}>
      <div className={style.imageWrap}>
        <img
          src={props.info.image_src}
          alt={props.info.image_alt}
          className={style.image}
        />
      </div>
      <div className={style.txtWrap}>
        <div className={style.titleWrap}>
          <h3 className={style.title}>{props.info.title}</h3>
          <Icon
            icon={"material-symbols:open-in-new"}
            className={style.openIcon}
          />
        </div>
        <p className={style.description}>{props.info.description}</p>
      </div>
    </div>
  );
}

export default Template;
