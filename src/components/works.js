import React from "react";
import ReactDOM from "react-dom/client";
import style from "./styles/works.module.css";
import themes from "../config/theme";
import { Icon } from "@iconify/react";
import Title from "./title";
import Template from "./template";
import image_1 from "../images/app_1.png";
import image_2 from "../images/app_2.png";
import image_3 from "../images/app_3.png";
import image_4 from "../images/app_4.png";

function Works() {
  const theme = themes.lightTheme;
  const Templates = {
    template_1: {
      image_src: image_1,
      image_alt: "Image Number 1",
      title: "Template Number 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse tempora consequuntur? Facilis quibusdam, eos nisi culpa error provident dolor qui dolore sed, voluptates alias perferendis quam minus distinctio at.",
    },
    template_2: {
      image_src: image_2,
      image_alt: "Image Number 2",
      title: "Template Number 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse tempora consequuntur? Facilis quibusdam, eos nisi culpa error provident dolor qui dolore sed, voluptates alias perferendis quam minus distinctio at.",
    },
    template_3: {
      image_src: image_3,
      image_alt: "Image Number 3",
      title: "Template Number 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse tempora consequuntur? Facilis quibusdam, eos nisi culpa error provident dolor qui dolore sed, voluptates alias perferendis quam minus distinctio at.",
    },
    template_4: {
      image_src: image_4,
      image_alt: "Image Number 4",
      title: "Template Number 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse tempora consequuntur? Facilis quibusdam, eos nisi culpa error provident dolor qui dolore sed, voluptates alias perferendis quam minus distinctio at.",
    },
  };

  if (window.innerWidth > 480) {
    return (
      <div className={style.container} id="works">
        <div className={style.worksList}>
          <Template info={Templates.template_1} />
          <Template info={Templates.template_2} />
        </div>
        <div className={style.worksList}>
          <Title title={"Previous work"} />
          <Template info={Templates.template_3} />
          <Template info={Templates.template_4} />
        </div>
      </div>
    );
  } else if (window.innerWidth <= 480) {
    return (
      <div className={style.container} id="works">
          <Title title={"Previous work"} />
          <Template info={Templates.template_1} />
          <Template info={Templates.template_2} />
          <Template info={Templates.template_3} />
          <Template info={Templates.template_4} />
      </div>
    );
  }
}

export default Works;
