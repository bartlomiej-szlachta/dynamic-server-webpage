const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => setTimeout(next, 3000 * Math.random()));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const getDir = (req) => {
  // TODO: wybór katalogu w zależności od urządzenia
  switch (req.headers['user-agent']) {
    case '?':
      return '?';
    case '??':
      return '??';
    default:
      return 'desktop';
  }
};

app.get('/index.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', getDir(req), 'index.html'));
});

app.get('/index.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', getDir(req), 'index.js'));
});

app.get('/index.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', getDir(req), 'index.css'));
});

app.get('/*', (req, res) => res.sendStatus(404));

const server = http.createServer(app);
const port = 8000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
