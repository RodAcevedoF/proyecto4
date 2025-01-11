import "./TopBtn.css";

export const TopBtn = () => {
  const topBtn = document.createElement("button");
  topBtn.classList.add("top-btn");
  topBtn.innerText = "Back to Top";
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return topBtn;
};
