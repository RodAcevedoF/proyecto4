import "./Home.css";
import { Title } from "../../components/Title/Title";
import { FigAnimation } from "../../components/FigAnimation/FigAnimation";
import { ExpGrid } from "../../components/ExpGrid/ExpGrid";
import { VidContainer } from "../../components/VidContainer/VidContainer";
import { changePage } from "../../utils/changePage";
import { Extra } from "../Extra/Extra";

export const Home = () => {
  const main = document.querySelector("main");
  document.body.style.backgroundColor = "";
  main.innerHTML = `
      <section class="home">
        <div class="hero-div">
          ${Title(
            "FROM WRITING THE FIRST LINE TO EXPLORE EVERY ASPECT OF SOFTWARE ENGINEERING"
          )}
        </div>
        <article class="grid-container"></article>
        <article class="video-container">
        ${VidContainer}
        </article>
      </section>`;
  const heroDiv = main.querySelector(".hero-div");
  heroDiv.appendChild(FigAnimation());
  const gridContainer = main.querySelector(".grid-container");
  gridContainer.appendChild(ExpGrid());

  const easterEgg = document.querySelector(".brand-grid li:last-of-type a");
  easterEgg.target = "";
  easterEgg.rel = "";

  easterEgg.addEventListener("click", () => {
    changePage(Extra);
  });
};
