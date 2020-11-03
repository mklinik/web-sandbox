// https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
//
// This is an extension of the hello world web app from the node documentation
// https://nodejs.org/en/docs/guides/getting-started-guide/

import http = require('http');

const hostname: string = '127.0.0.1';
const port: number = 3000;

type Person = { name: string, age: number };
type Pet = { name: string, legs: number };

const elvis: Person = { name: "elvis", age: 23 };
const snuffles: Pet = { name: "snuffles", legs: 4 };

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  if( req.url == "/person" ) {
    res.end(JSON.stringify(elvis));
  }
  else {
    res.end(JSON.stringify(snuffles));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
