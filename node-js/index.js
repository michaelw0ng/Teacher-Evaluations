const http = require('http');
const mysql = require('mysql');

const server = http.createServer();
const port = 8080;

const { password } =

const db = mysql.createConnection({
   host: 'localhost',
   user: 'wm5614',
   password: 'secret',
   database: 'my_db'
});

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