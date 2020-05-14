module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        // 全局引用此scss
        prependData: `
          @import "@/style/main.scss";
        `
      }
    }
  }
};
