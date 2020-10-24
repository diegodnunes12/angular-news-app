const PROXY_CONFIG = [
    {
        context:['/api'],
        target: 'https://newsapi.org/v2/top-headlines/',
        secure: true,
        logLevel: 'debug',
        pathRewrite: {'^/api' : ''}
    }
];

module.exports = PROXY_CONFIG;