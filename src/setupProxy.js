const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/authenticate",
    createProxyMiddleware({
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/**",
    createProxyMiddleware({
      target: "https://us.api.blizzard.com/",
      changeOrigin: true,
      pathRewrite: { "^/api/": "" },
    })
  );
};
