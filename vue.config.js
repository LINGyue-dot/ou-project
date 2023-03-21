module.exports = {
  lintOnSave: true,
  devServer: {
    host: "127.0.0.1",
    port: 8084,
    proxy: {
      "/equip": {
        target: "192.168.0.102:8080",
        // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
        changeOrigin: true, //是否跨域
      },
    },
  },
};
