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
    app.use(
        '/api/python',
        createProxyMiddleware({
            target: 'http://py.docker:8111',
            changeOrigin: true,
            pathRewrite: {
                "^/api/python": "",
            },
        })
    )
}
