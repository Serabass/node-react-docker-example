const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/node',
        createProxyMiddleware({
            target: 'http://app.docker:3000',
            changeOrigin: true,
            pathRewrite: {
                "^/api/node": "",
            },
        })
    )
}
