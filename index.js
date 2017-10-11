const express = require('express');

const server = express();

server.use('/test', async function(req, res) {
    res.send(`<html>
    <head></head>
    <body><h1>test</h1></body>
    </html>`).end();
});

server.listen(3000, '0.0.0.0');
