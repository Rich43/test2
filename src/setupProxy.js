const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.qualsafe.com/getCourses.php?action=getUnpaid',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api': '/'
            },
            logLevel: 'debug'
        })
    );
};
