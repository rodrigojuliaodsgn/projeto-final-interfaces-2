var hero = document.getElementById("gradient");
var context = hero?.getContext("2d");

var col = function (x, y, r, g, b) {
  context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  context.fillRect(x, y, 1, 1);
};
var R = function (x, y, t) {
  return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
};

var G = function (x, y, t) {
  return Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
};

var B = function (x, y, t) {
  return Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
};

var t = 0;

var run = function () {
  for (x = 0; x <= 35; x++) {
    for (y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.02;
  window.requestAnimationFrame(run);
};

if (hero) {
  run();
}
