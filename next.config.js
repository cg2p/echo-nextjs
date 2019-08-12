// next.config.js
require('dotenv').config();

module.exports = {
    serverRuntimeConfig: { // Will only be available on the server side
        mySecret: 'secret'
    },

    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static',
        version: process.env.VERSION
    }
};