const express = require('express');
const fs = require('fs');
const {render} = require('./render');
const server = express();

server.get('/login', async function(req, res) {
    res.send(render("login.html")).end();
});

server.post('/login', async function(req, res) {
  console.log(req.body);
  res.end();
});

server.get('/register', async function(req, res) {
    res.send(render("register.html")).end();
});

server.listen(3000, '0.0.0.0');
