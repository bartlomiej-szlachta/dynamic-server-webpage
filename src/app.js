const http = require('http');
const express = require('express');
const device = require('express-device');
const path = require('path');

const app = express();

app.use(device.capture());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const getDirectoryName = (req) => {
  switch (req.device.type.toUpperCase()) {
    case 'DESKTOP':
      return 'desktop';
    case 'TABLET': // TODO: przetestować, czy nazwa typu dla tabletu jest właśnie taka
      return 'tablelt';
    case 'PHONE':
      return 'mobile';
    default:
      return 'none';
  }
};

app.get('/index.html', (req, res) => {
  console.log(req.headers['user-agent']);

  res.sendFile(path.resolve(__dirname, '..', 'public', getDirectoryName(req), 'index.html'));
});

app.get('/index.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', getDirectoryName(req), 'index.js'));
});

app.get('/index.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', getDirectoryName(req), 'index.css'));
});

app.get('/*', (req, res) => res.sendStatus(404));

const server = http.createServer(app);
const port = 8000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
