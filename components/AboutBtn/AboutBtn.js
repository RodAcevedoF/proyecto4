import "./AboutBtn.css";
import { Home } from "../../pages/Home/Home";
import { About } from "../../pages/About/About";
import { changePage } from "../../utils/changePage";

export const AboutBtn = (txt) => {
  const container = document.createElement("button");
  container.setAttribute("id", "about-btn");
  container.classList.add("about-button");
  container.innerHTML = `
    <span class="span-txt">${txt}</span>
    <span class="span-line"></span>
  `;

  let isAboutPage = txt.toUpperCase() === "ABOUT";

  container.addEventListener("click", () => {
    const txtContainer = container.querySelector(".span-txt");
    const spanLine = container.querySelector(".span-line");

    container.classList.add("clicked");
    txtContainer.classList.add("hidden");

    setTimeout(() => {
      if (isAboutPage) {
        txtContainer.textContent = "ABOUT";
        spanLine.classList.remove("portfolio");
        container.classList.remove("home-button");
        container.classList.add("about-button");
        changePage(Home);
      } else {
        txtContainer.textContent = "PROJECTS";
        spanLine.classList.add("portfolio");
        container.classList.remove("about-button");
        container.classList.add("home-button");
        document.body.classList.remove("extra-back")
        changePage(About);
      }

      txtContainer.classList.remove("hidden");
    }, 200);

    setTimeout(() => {
      container.classList.remove("clicked");
    }, 400);

    isAboutPage = !isAboutPage;
  });

  return container;
};
