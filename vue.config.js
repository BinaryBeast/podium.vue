const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": path.resolve(__dirname, "src/assets"),
        "components": path.resolve(__dirname, "src/components"),
        "store": path.resolve(__dirname, "src/store"),
        "styles": path.resolve(__dirname, "src/styles"),
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({
        removeAttributes: [
          "alt",
          "src",
          "svg-inline"
        ]
      });
  },
  css: {
    loaderOptions: {
      sass: {
        data: "@import 'styles/_base.scss';",
      },
    },
  },
};
