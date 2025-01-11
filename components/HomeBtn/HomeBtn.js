import "./HomeBtn.css";

export const HomeBtn = (icon, txt) => {
  const btn = document.createElement("button");
  btn.setAttribute("id", "home-btn")
  btn.innerHTML = `<img src="${icon}" alt="${txt} icon">
                   <span>${txt}</span>`;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return btn;                                    
}
