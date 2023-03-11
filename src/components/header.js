import ReactDOM from "react-dom/client";
import style from "./styles/header.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Header() {
  const theme = themes.lightTheme;
  const [info, setInfo] = useState({
    display: "none",
    iconName: "ion:menu",
    scroll: "auto",
  });

  const menuButtonClicked = () => {
    info.display == "none"
      ? setInfo({
          display: "flex",
          iconName: "material-symbols:close-rounded",
          scroll: "hidden",
        })
      : setInfo({
          display: "none",
          iconName: "ion:menu",
          scroll: "auto",
        });
  };

  document.body.style.overflow = info.scroll;
  return (
    <div className={style.header_container}>
      <h1 className={style.logo}>zed</h1>
      <ul className={style.linksContainer}>
        <li className={style.linkWrap}>
          <a href="#" className={style.link} style={{ color: theme.violet_1 }}>
            home
          </a>
        </li>
        <li className={style.linkWrap}>
          <a
            href="#services"
            className={style.link}
            style={{ color: theme.textColor_1 }}
          >
            services
          </a>
        </li>
        <li className={style.linkWrap}>
          <a
            href="#works"
            className={style.link}
            style={{ color: theme.textColor_1 }}
          >
            my works
          </a>
        </li>
        <li className={style.linkWrap}>
          <a
            href="#about"
            className={style.link}
            style={{ color: theme.textColor_1 }}
          >
            about
          </a>
        </li>
        <li className={style.linkWrap}>
          <a
            href="#contact"
            className={style.link}
            style={{ color: theme.textColor_1 }}
          >
            contact
          </a>
        </li>
      </ul>
      <Icon
        icon={info.iconName}
        color={theme.violet_1}
        className={style.menuIcon}
        onClick={menuButtonClicked}
      />
      {/* this list is just for mobile  */}
      <ul className={style.mobileLinks} style={{ display: info.display }} onClick={menuButtonClicked}>
        <div>
          Menu <div className={style.line} />{" "}
        </div>
        <li className={style.linkWrap}>
          <a href="#" className={style.link}>
            home
          </a>
        </li>
        <li className={style.linkWrap}>
          <a href="#services" className={style.link}>
            services
          </a>
        </li>
        <li className={style.linkWrap}>
          <a href="#works" className={style.link}>
            my works
          </a>
        </li>
        <li className={style.linkWrap}>
          <a href="#about" className={style.link}>
            about
          </a>
        </li>
        <li className={style.linkWrap}>
          <a href="#contact" className={style.link}>
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
