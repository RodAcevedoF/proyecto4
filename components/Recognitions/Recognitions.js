import "./Recognitions.css";
import { data } from "../../data/data";

export const Recognitions = () => {
  const recognArticle = document.createElement("article");
  recognArticle.classList.add("recogn-article");
  recognArticle.innerHTML = `
        <h3>RECOGNITIONS</h3> 
        <div class="recogn-div"></div>
    `;
  const recognDiv = recognArticle.querySelector(".recogn-div");
  const recognUl = document.createElement("ul")
  data.recognitions.forEach((elem) => {
    let newLi = document.createElement("li")
    let nameP = document.createElement("p")
    let entityP = document.createElement("p")
    let yearP = document.createElement("p")
    nameP.textContent = elem.name;
    entityP.textContent = elem.entity;
    yearP.textContent = elem.year;
    newLi.appendChild(nameP)
    newLi.appendChild(entityP)
    newLi.appendChild(yearP)
    recognUl.appendChild(newLi)
  })
  recognDiv.appendChild(recognUl);
  return recognArticle; 
};
