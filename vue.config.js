const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "components": path.resolve(__dirname, "src/components"),
                "styles": path.resolve(__dirname, "src/styles"),
            },
        },
    },
    css: {
        loaderOptions: {
            sass: {
                data: "@import 'styles/_base.scss';",
            },
        },
    },
};
