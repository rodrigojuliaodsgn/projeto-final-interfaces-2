import LocomotiveScroll from "locomotive-scroll";

const locScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.1,
});

export default locScroll;
