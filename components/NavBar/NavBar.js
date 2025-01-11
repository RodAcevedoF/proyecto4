import "./NavBar.css";
import { HomeBtn } from "../HomeBtn/HomeBtn";
import { AboutBtn } from "../AboutBtn/AboutBtn";

export const NavBar = () => {
  const header = document.querySelector("header");
  header.innerHTML = `<nav class="nav-bar"></nav>`;

  const NavBar = document.querySelector(".nav-bar");
  NavBar.appendChild(HomeBtn("/icons/letter-r.png","Rod Acevedo"));
  NavBar.appendChild(AboutBtn("ABOUT"));
  document.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 100;
    const homeBtnImg = document.querySelector("#home-btn img");
    const homeBtnSpan = document.querySelector("#home-btn span");
    const aboutBtn = document.querySelector("#about-btn span:first-of-type");
    homeBtnImg.classList.toggle("dark", scrolled);
    homeBtnSpan.classList.toggle("dark-letter", scrolled);
    aboutBtn.classList.toggle("dark", scrolled);
  });
};
