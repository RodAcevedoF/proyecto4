export const changePage = (PageComponent) => {
  const main = document.querySelector("main");
  if (!main) return;

  main.style.transition = "transform 0.4s ease, opacity 0.4s ease";
  main.style.transform = "translateX(0)";
  main.style.opacity = "1";

  main.style.transform = "translateX(-100%)";
  main.style.opacity = "0";

  setTimeout(() => {
    main.innerHTML = "";
    PageComponent();

    main.style.transition = "none";
    main.style.transform = "translateX(100%)";

    setTimeout(() => {
      main.style.transition = "transform 0.4s ease, opacity 0.4s ease";
      main.style.transform = "translateX(0)";
      main.style.opacity = "1";
    }, 10);
  }, 400);
};
