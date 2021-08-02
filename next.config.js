require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` });

module.exports = {
    env: {
        SERVER_URL: process.env.SERVER_URL,
        BASE_PATH: process.env.BASE_PATH,
        DOMAIN: process.env.DOMAIN,
        FB_APP_ID: process.env.FB_APP_ID,
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
            },
        });
        return config;
    },
};
