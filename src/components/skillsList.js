import React from "react";
import ReactDOM from "react-dom/client";
import themes from "../config/theme";
import style from "./styles/skillsList.module.css";
import Skill from "./skill";
import Title from "./title";

function SkillsList() {
  const theme = themes.lightTheme;
  return (
    <div className={style.container}>
      <Title title={"Interested in"} />
      <div className={style.listContainer}>
        <Skill skillIcon={"vscode-icons:file-type-html"} skillName={"HTML"} />
        <Skill skillIcon={"vscode-icons:file-type-css"} skillName={"CSS"} />
        <Skill
          skillIcon={"vscode-icons:file-type-js-official"}
          skillName={"Javascript"}
        />
        <Skill
          skillIcon={"vscode-icons:file-type-tailwind"}
          skillName={"Tailwindcss"}
        />
        <Skill skillIcon={"simple-icons:bootstrap"} skillName={"bootstrap"} iconColor={theme.background_1}/>{" "}
        <Skill skillIcon={"vscode-icons:file-type-git"} skillName={"Git"} />{" "}
        <Skill
          skillIcon={"ri:github-fill"}
          skillName={"Github"}
          iconColor={themes.colors.slate_100}
        />
        <Skill
          skillIcon={"vscode-icons:file-type-reactjs"}
          skillName={"React JS"}
        />
        <Skill
          skillIcon={"cib:redux"}
          skillName={"Redux"}
          iconColor={themes.colors.slate_100}
        />
        <Skill
          skillIcon={"vscode-icons:file-type-reactjs"}
          skillName={"React Native"}
        />
      </div>
    </div>
  );
}

export default SkillsList;
