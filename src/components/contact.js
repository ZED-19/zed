import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/contact.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";
import Title from "./title";
import { Player } from "@lottiefiles/react-lottie-player";
import anim from "../images/message_anim.json";

function Contact() {
  const theme = themes.lightTheme;

  return (
    <div className={style.container}>
      <Title title="contact me" id="contact" />
      <div className={style.childContainer}>
        <div className={style.txtXrap}>
          <div className={style.txt}>
            <p>
              Interested in
              <br /> working together?
            </p>
            <h3>
              Let’s talk <Icon icon="tabler:message-circle-2" />
            </h3>
          </div>
          <div className={style.mailBox}>
            <h3>Feel free to drop us a line at</h3>
            <a href="mailto:zedmb19@gmail.com" target={"_blank"}>
              zedmb19@gmail.com
            </a>
          </div>
        </div>
        <Player src={anim} loop autoplay className={style.anim} />
      </div>
      <div className={style.networks}>
        <h3>You can find me on social networks</h3>
        <ul>
          <li>
            <a href="#">
              <Icon icon={"ri:whatsapp-fill"} className={style.icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon={"basil:viber-solid"} className={style.icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon={"mdi:twitter"} className={style.icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon={"uil:instagram-alt"} className={style.icon} />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon={"ic:baseline-facebook"} className={style.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
