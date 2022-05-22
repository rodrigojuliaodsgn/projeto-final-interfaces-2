import gsap from "gsap";

const toggleButton = document.querySelector(".nav__button");
const menuList = document.querySelector(".nav__list");
let queryMatch = window.matchMedia("(min-width: 480px)").matches;

if (!queryMatch) {
  console.log("Javascript Media Query Matches");
  gsap.set(menuList, { xPercent: 100 });
  const menuAnimation = gsap.to(menuList, { xPercent: 0, autoAlpha: 1, paused: true });

  toggleButton.addEventListener("click", () => {
    if (menuList.classList.contains("hidden")) {
      menuAnimation.play();
      gsap.fromTo(
        ".nav__list .page-link",
        {
          x: 200,
          autoAlpha: 0,
        },
        {
          x: 0,
          duration: 0.5,
          autoAlpha: 1,
          stagger: 0.15,
        }
      );
      menuList.classList.toggle("hidden");
    } else {
      menuAnimation.reverse().then(() => menuList.classList.toggle("hidden"));
    }
  });
} else {
  console.log("Javascript Media Query Doesn't Match");
  menuList.classList.remove("hidden");
}
