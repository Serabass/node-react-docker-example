const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/node',
    createProxyMiddleware({
      target: 'http://app.docker',
      changeOrigin: true,
      pathRewrite: {
        "^/api/node": "",
      },
    })
  )
  app.use(
    '/api/python',
    createProxyMiddleware({
      target: 'http://py.docker',
      changeOrigin: true,
      pathRewrite: {
        "^/api/python": "",
      },
    })
  )
  app.use(
    '/api/php',
    createProxyMiddleware({
      target: 'http://php.docker',
      changeOrigin: true,
      pathRewrite: {
        "^/api/php": "",
      },
    })
  )
}
