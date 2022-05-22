import locScroll from "./scroll";
const nav = document.querySelector(".site-header");

console.log(window.location);
if (window.location.pathname == "/projeto-final-interfaces-2//") {
  nav.classList.add("fixed", "is-scrolling");
  locScroll.on("scroll", (e) => {
    if (e.scroll.y < 200) {
      nav.classList.add("is-scrolling");
    } else {
      nav.classList.remove("is-scrolling");
    }
  });
}
