const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Replace this with your Riot ID (encode # as %23)
const riotIdEncoded = 'amikarorna%23vain';

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://tracker.gg',
    changeOrigin: true,
    pathRewrite: {
      '^/': `/valorant/profile/riot/${riotIdEncoded}/overview`,
    },
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
