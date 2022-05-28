// import locScroll from "./scroll";
const nav = document.querySelector(".site-header");

if (window.location.pathname == "/projeto-final-interfaces-2//") {
  nav.classList.add("fixed", "is-scrolling");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < 200) {
      nav.classList.add("is-scrolling");
    } else {
      nav.classList.remove("is-scrolling");
    }
  });
}
