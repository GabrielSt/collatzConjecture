const http = require("http");
const collatzSequence = require("./collatzSequence");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Collatz Conjecture!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  collatzSequence.LongestCollatzSequence();
  collatzSequence.LongestCollatzSequenceCached();
});
