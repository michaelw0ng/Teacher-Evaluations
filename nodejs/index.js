const http = require('http');

const server = http.createServer();
const port = 3000;

server.on("listening", () => {});

server.on("request", (req, res) => {
   if (req.url === "/")
   {
      console.log("hello");
   }
});

server.listen(port);