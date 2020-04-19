// next.config.js
require('dotenv').config();

const env = process.env.NODE_ENV; // 'dev' or 'test'

module.exports = {
    serverRuntimeConfig: { // Will only be available on the server side
        mySecret: 'secret',
        version: process.env.VERSION,
        env: process.env.NODE_ENV
    },

    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static',
        version: process.env.VERSION,
        env: process.env.NODE_ENV
    }
};