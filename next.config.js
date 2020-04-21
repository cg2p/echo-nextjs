// next.config.js
require('dotenv').config();

const env = process.env.NODE_ENV; // 'dev' or 'test'

module.exports = {
    serverRuntimeConfig: { // Will only be available on the server side
        mySecret: 'secret'
    },

    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static',
        version: process.env.VERSION,
        env: process.env.NODE_ENV,
        // listen on host and port
        port: process.env.CLIENT_APP_PORT || 3000,
        host: process.env.CLIENT_APP_HOST || '0.0.0.0',
 
        // service host, port and api to call
        service_port: process.env.SERVICE_PORT || 3001,
        service_host: process.env.SERVICE_HOST || 'localhost',
        service_api: process.env.SERVICE_API || '',
    }
};