import "./Skills.css";
import { data } from "../../data/data";

export const Skills = () => {
  const skillsArticle = document.createElement("article");
  skillsArticle.classList.add("skill-article");
  skillsArticle.innerHTML = `
        <h3>SKILLS</h3> 
        <div class="skill-div"></div>
    `;

  const skillsDiv = skillsArticle.querySelector(".skill-div");

  const techDiv = document.createElement("div");
  techDiv.innerHTML = `<h4>Techs</h4>
                        <p>Technology is the backbone of every impactful web development project, they bring ideas to life, enhance user experiences and drive innovation in every line of code.</p>`;
  const ulTech = document.createElement("ul");
  data.skills.tech.forEach((elem) => {
    const newLi = document.createElement("li");
    newLi.textContent = elem;
    ulTech.appendChild(newLi);
  });
  techDiv.appendChild(ulTech);

  const softDiv = document.createElement("div");
  softDiv.innerHTML = `<h4>Abilities</h4>
                        <p>Soft skills are the foundation of every successful project. With the right abilities teamwork thrives and every challenge becomes an opportunity for growth.</p>`;
  const ulSoft = document.createElement("ul");
  data.skills.extra.forEach((elem) => {
    const newLi = document.createElement("li");
    newLi.textContent = elem;
    ulSoft.appendChild(newLi);
  });
  softDiv.appendChild(ulSoft);

  const langDiv = document.createElement("div");
  langDiv.innerHTML = `<h4>Languages</h4>
                        <p>Mastering multiple languages opens doors to effective communication, fosters collaboration across diverse teams, and ensures a deeper understanding of client needs.</p>`;
  const ulLang = document.createElement("ul");
  data.skills.langs.forEach((elem) => {
    const newLi = document.createElement("li");
    newLi.textContent = elem;
    ulLang.appendChild(newLi);
  });
  langDiv.appendChild(ulLang);

  skillsDiv.appendChild(techDiv);
  skillsDiv.appendChild(softDiv);
  skillsDiv.appendChild(langDiv);
  return skillsArticle;
};
