import "./About.css";
import { Title } from "../../components/Title/Title";
import { FigAnimation } from "../../components/FigAnimation/FigAnimation";
import { Resume } from "../../components/Resume/Resume";
import { Skills } from "../../components/Skills/Skills";
import { Recognitions } from "../../components/Recognitions/Recognitions";

export const About = () => {
  const main = document.querySelector("main");
  document.body.style.backgroundColor = "";
  main.innerHTML = `
      <section class="about">
        <div class="about-div">
          <div class="in-div">
            ${Title("COMMITMENT AND CREATIVITY RUNS IN HIS VEINS.")}
            <img src="/images/portrait.png" alt="drawn portrait" class="portrait">
          </div>
        </div>
      </section>`;

  const aboutDiv = main.querySelector(".about-div");
  aboutDiv.appendChild(FigAnimation());

  const aboutSect = main.querySelector(".about");
  aboutSect.appendChild(Resume());
  aboutSect.appendChild(Skills());
  aboutSect.appendChild(Recognitions());
  const img = document.querySelector(".portrait");
  document.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 80;
    img.classList.toggle("filter", scrolled);
  }); 
};
