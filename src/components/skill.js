import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/skill.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";

function Skill(props) {
  const theme = themes.lightTheme;
  return (
    <div className={style.skill_container}>
      <Icon
        icon={props.skillIcon}
        className={style.skillIcon}
        color={props.iconColor}
      />
      <p className={style.skillName}>{props.skillName}</p>
    </div>
  );
}

export default Skill;
