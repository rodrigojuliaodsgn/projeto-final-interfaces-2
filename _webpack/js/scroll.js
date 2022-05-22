import LocomotiveScroll from "locomotive-scroll";

const locScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.08,
});

export default locScroll;
