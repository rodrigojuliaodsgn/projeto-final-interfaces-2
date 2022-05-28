import gsap from "gsap";
const post = document.querySelectorAll(".post *");
const projects = document.querySelectorAll(".projects *");
const posts = document.querySelectorAll(".posts *");

const animArray = [post, projects, posts];

animArray.forEach((p) => {
  p &&
    gsap.from(p, {
      scrollTrigger: p,
      y: 50,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 0.4,
    });
});
