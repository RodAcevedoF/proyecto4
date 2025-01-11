import "./Resume.css";
import { data } from "../../data/data";
import { MailBtn } from "../MailBtn/MailBtn";
import { ContactBtn } from "../ContactBtn/ContactBtn";

export const Resume = () => {
  const resume = document.createElement("article");
  resume.classList.add("resume");

  const bioDiv = document.createElement("div");
  bioDiv.classList.add("bio-div");
  const p = document.createElement("p");
  p.textContent = data.aboutMe;
  p.classList.add("bio");
  const downloadCV = document.createElement("button");
  downloadCV.classList.add("download-btn");
  downloadCV.innerHTML = `
    <span class="cv-txt">DOWNLOAD RESUME</span>
    <span class="cv-line"></span>
  `;
  bioDiv.appendChild(p);
  bioDiv.appendChild(downloadCV);
  resume.appendChild(bioDiv);

  const ulDiv = document.createElement("div");
  ulDiv.classList.add("ed-exp");

  const headerEdu = document.createElement("h4");
  headerEdu.textContent = "EDUCATION";
  headerEdu.classList.add("headers");
  ulDiv.appendChild(headerEdu);

  const ulEdu = document.createElement("ul");
  ulEdu.classList.add("education-list");
  data.education.forEach((diploma) => {
    const newLi = document.createElement("li");
    newLi.classList.add("education-item");
    newLi.innerHTML = `
      <p>${diploma.degree}</p>
      <p>${diploma.university}, ${diploma.graduationYear}\n${diploma.honors}</p>
    `;

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = `
      <h5>Relevant Courses:</h5>
      <ul>${diploma.relevantCourses
        .map((course) => `<li>${course}</li>`)
        .join("")}</ul>
    `;

    newLi.appendChild(tooltip);

    newLi.addEventListener("mouseover", () => {
      tooltip.classList.add("visible");
    });
    newLi.addEventListener("mouseout", () => {
      tooltip.classList.remove("visible");
    });

    ulEdu.appendChild(newLi);
  });
  ulDiv.appendChild(ulEdu);

  const headerExp = document.createElement("h4");
  headerExp.textContent = "EXPERIENCE";
  headerExp.classList.add("headers");
  ulDiv.appendChild(headerExp);

  const ulExp = document.createElement("ul");
  ulExp.classList.add("experience-list");
  data.workExperience.forEach((job) => {
    const newLi = document.createElement("li");
    newLi.classList.add("experience-item");
    newLi.innerHTML = `
      <p>${job.position}</p>
      <p>${job.company}, ${job.startDate} - ${job.endDate}</p>
    `;

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerHTML = `
      <h5>Description:</h5>
      <p>${job.description}</p>
    `;
    newLi.appendChild(tooltip);

    newLi.addEventListener("mouseover", () => {
      tooltip.classList.add("visible");
    });
    newLi.addEventListener("mouseout", () => {
      tooltip.classList.remove("visible");
    });

    ulExp.appendChild(newLi);
  });
  ulDiv.appendChild(ulExp);

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-newdiv");
  const headerContact = document.createElement("h4");
  headerContact.textContent = "CONTACT";
  headerContact.classList.add("headers");
  contactDiv.appendChild(headerContact);

  const divBtns = document.createElement("div");
  divBtns.classList.add("contact-resume");
  divBtns.innerHTML = `
    ${ContactBtn("LinkedIn", "https://linkedin.com")}
    ${ContactBtn("GitHub", "https://github.com")}
  `;
  contactDiv.appendChild(divBtns);

  const mailDiv = document.createElement("div");
  mailDiv.classList.add("mail-div");
  mailDiv.innerHTML = `${MailBtn("raacevedof@gmail.com", "EMAIL")}`;
  contactDiv.appendChild(mailDiv);

  ulDiv.appendChild(contactDiv);
  resume.appendChild(ulDiv);

  return resume;
};
