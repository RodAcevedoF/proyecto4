import "./FigAnimation.css";

export const FigAnimation = () => {
  const container = document.createElement("div");
  container.classList.add("lines-container");

  for (let i = 0; i < 11; i++) {
    const span = document.createElement("span");
    span.classList.add("line");
    container.appendChild(span);
  }

  container.addEventListener('click', () => {
    document.body.classList.toggle('custom-bg');
  });

  return container;
};
