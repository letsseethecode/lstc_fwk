const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix
  .js("src/js/index.js", "dist/js/app.js")
  .postCss("src/css/styles.css", "css/styles.css", [
    tailwindcss("./tailwind.config.js"),
  ])
  .copy("index.html", "dist")
  .copyDirectory('src/assets/images', 'dist/assets/images') 
  .setPublicPath("dist")
  .browserSync({
    proxy: false,
    server: "dist",
    port: 8888,
  });
