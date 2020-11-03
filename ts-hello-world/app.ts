// https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
//
// This is a line-by-line translation of the hello world web app from the node
// documentation

//const http = require('http');
import http = require('http');

//const hostname = '127.0.0.1';
const hostname: string = '127.0.0.1';
//const port = 3000;
const port: number = 3000;

//const server = http.createServer((req, res) => {
const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
