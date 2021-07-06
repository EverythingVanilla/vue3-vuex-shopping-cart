module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/globals.scss";`,
      },
    },
  },
};
