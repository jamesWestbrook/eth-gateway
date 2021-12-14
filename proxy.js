const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = process.env.PORT;
const API_URI = process.env.API_URI;
const GAME_URI = process.env.GAME_URI;


app.use('/api', createProxyMiddleware({ 
    target: API_URI, 
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
}));

app.use('*', createProxyMiddleware({ 
    target: GAME_URI, 
    changeOrigin: true,
}));

app.listen(PORT);