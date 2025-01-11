import { NavBar } from "./components/NavBar/NavBar";
import { changePage } from "./utils/changePage";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/Footer/Footer";

NavBar();
Footer();
changePage(Home);

document.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 80;
  document.body.classList.toggle("scrolled", scrolled);
});
