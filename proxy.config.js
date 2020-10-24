const PROXY_CONFIG = [
    {
        context:['/api'],
        target: 'https://newsapi.org/v2/top-headlines',
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/api' : ''}
    }
];

module.exports = PROXY_CONFIG;