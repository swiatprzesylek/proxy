const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();
const cors = require('cors');
const fs = require('fs');
const https = require('https');
const path = require('path');
const port = process.env.SERVER_PORT || 3000;


app.use(cors());

app.use('/', createProxyMiddleware({
    target: process.env.TARGET_DOMAIN,
    changeOrigin: true,
    followRedirects: true,
    secure: false
}));


if (process.env.ENABLE_HTTPS) {
	let key = fs.readFileSync('/etc/ssl/private/express-selfsigned.key');
    let cert = fs.readFileSync('/etc/ssl/certs/express-selfsigned.crt');

    https.createServer({key, cert}, app).listen(port);

    console.log(`[HTTPS] Listening on 0.0.0.0:${port}...`);
    console.log('[Google Chrome users warning] To allow https on localhost go to chrome://flags/#allow-insecure-localhost');
}
else{
	app.listen(port);
	console.log(`[HTTP] Listening on 0.0.0.0:${port}...`);
}