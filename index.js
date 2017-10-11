const express = require('express');
const fs = require('fs');

const server = express();

server.use('/test', async function(req, res) {
    const content = fs.readFileSync('html/test.html', {encoding: 'utf-8'});
    res.send(content).end();
});

server.listen(3000, '0.0.0.0');
