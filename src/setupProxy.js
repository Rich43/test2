const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost/api', // Workaround as the website is broken, run prod locally, see readme.
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': '/'
            },
            logLevel: 'debug'
        })
    );
};
