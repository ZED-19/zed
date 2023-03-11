import React from "react";
import ReactDOM from "react-dom/client";
import themes from "../config/theme";
import style from "./styles/title.module.css";

function Title(props) {
  const theme = themes.lightTheme;
  return (
    <div className={style.titleContainer} id={props.id}>
      <h1 className={style.title}>{props.title}</h1>
      <div className={style.titleLine} />
    </div>
  );
}

export default Title;
