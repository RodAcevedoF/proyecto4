import "./Footer.css";
import { ContactBtn } from "../ContactBtn/ContactBtn";
import { MailBtn } from "../MailBtn/MailBtn";
import { TopBtn } from "../TopBtn/TopBtn";
export const Footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `<article>
                          <h3>GET IN TOUCH</h3>
                          <div class="contact-div">
                          ${ContactBtn("X", "https://x.com")}
                          ${ContactBtn("LinkedIn", "https://linkedin.com")}
                          ${ContactBtn("Instagram", "https://instagram.com")}
                          ${ContactBtn("GitHub", "https://github.com")}
                          ${ContactBtn("Facebook", "https://facebook.com")}
                          </div>
                        </article>
                        <article class="mail-article">
                          <div>
                            <h3>Want to move forward?</h3>
                            ${MailBtn("raacevedof@gmail.com", "DROP A LINE")}
                          </div>
                        </article>`;

  const container = document.querySelector(".mail-article");
  container.appendChild(TopBtn());
};
