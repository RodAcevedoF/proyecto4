import "./MailBtn.css";

export const MailBtn = (email, txt) =>
  `<a href="mailto:${email}" class="mail-btn">${txt}<span></span></a>`;
