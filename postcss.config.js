module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("autoprefixer"),
    ...(process.env.JEKYLL_ENV == "production" ? [require("cssnano")({ preset: "default" })] : []),
  ],
};
