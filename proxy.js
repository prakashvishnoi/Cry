const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Proxy configuration for CoinDCX
app.use('/coindcx', createProxyMiddleware({
    target: 'https://api.coindcx.com',
    changeOrigin: true,
    pathRewrite: {
        '^/coindcx': '', // Remove "/coindcx" prefix
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});

