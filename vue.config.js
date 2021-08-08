// this is the config file for vue-markdown loader

module.exports = {
  chainWebpack(config) {
    config.module
      .rule("md")
      // test if file ends with markdown extention
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
      });
  },
};
