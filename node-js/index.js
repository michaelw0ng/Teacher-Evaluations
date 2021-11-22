const http = require('http');
const { chunk } = require('lodash');

const server = http.createServer();
const port = 8080;

server.on("listening", () => {});

server.on("request", (req, res) => {
   if (req.url === "/")
   {
      let data = "";
      req.on("data", (chunk) => {
         data += chunk;
      });
      req.on("end", () => {
         console.log(data);
      });
      res.end("response");
   }
});

server.listen(port);