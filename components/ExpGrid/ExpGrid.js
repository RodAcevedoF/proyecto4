import "./ExpGrid.css";
import { brands } from "../../data/brands";
import { lightenColor } from "../../utils/lightenColor";

export const ExpGrid = () => {
  const container = document.createElement("ul");
  container.classList.add("brand-grid");

  brands.forEach(({ name, logo, bgImage, color, url }) => {
    const listItem = document.createElement("li");
    listItem.classList.add(name);
    listItem.style.setProperty("--hover-bg-color", color);

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.classList.add("grid-link");

    const img = document.createElement("img");
    img.src = logo;
    img.alt = `${name} logo`;

    link.appendChild(img);
    listItem.appendChild(link);

    const beforeStyle = document.createElement("style");
    beforeStyle.innerHTML = `
      .brand-grid li.${name}::before {
        background-image: url('${bgImage}');
      }
    `;
    document.head.appendChild(beforeStyle);

    document.addEventListener("scroll", () => {
      const scrolled = window.scrollY > 150;
      const liGroup = document.querySelectorAll(".brand-grid li");
      liGroup.forEach((li) => {
        li.classList.toggle("dark", scrolled);
      });
    });

    listItem.addEventListener("mouseenter", () => {
      document.body.style.backgroundColor = color;

      const lightColor = lightenColor(color, 20);
      document.querySelectorAll(".brand-grid li").forEach((li) => {
        li.style.backgroundColor = lightColor;
      });
      listItem.style.backgroundColor = color;
    });

    listItem.addEventListener("mouseleave", () => {
      document.body.style.backgroundColor = "";
      document.querySelectorAll(".brand-grid li").forEach((li) => {
        li.style.backgroundColor = "";
      });
    });
    container.appendChild(listItem);
  });
  return container;
};
