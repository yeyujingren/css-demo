const http = require('http');
const path = require('path');
const chalk = require('chalk');

const conf = require('./config');
const route = require('./route');

const server = http.createServer((req, res) => {
  let filePath;
  if (req.url === '/') {
    filePath = path.join(conf.root, '/index.html');
  } else {
    filePath = path.join(conf.root, req.url);
  }
  route(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`;
  console.info(`Server started at${chalk.red(addr)}`);
});
