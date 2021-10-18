module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "./src/pages/Home/main.ts",
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    "about/index": {
      entry: "./src/pages/About/main.ts",
      template: "public/index.html",
      title: "About",
      chunks: ["chunk-vendors", "chunk-common", "about/index"],
    },
    "contact/index": {
      entry: "./src/pages/Contact/main.ts",
      template: "public/index.html",
      title: "Contact",
      chunks: ["chunk-vendors", "chunk-common", "contact/index"],
    },
  },
};
