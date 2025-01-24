import "./Extra.css";
import { Title } from "../../components/Title/Title";
import { changePage } from "../../utils/changePage";
import { Home } from "../Home/Home";

export const Extra = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
      <section class="extra">
          ${Title("Oops...not yet!")}
          <img src="/videos/simsponsgif.gif" alt="under construction image">
          <button type="button">Go back</button>
      </section>`;
    
    const btn = main.querySelector("button")
    btn.addEventListener("click", () => {
        document.body.classList.remove("extra-back")
        changePage(Home);
    });
}

    