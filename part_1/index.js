// Including the http module
const http = require("http");

// Creating the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(" Hello from the Server! ");
  res.end();
});

//Listening to the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening to requests on port 8000");
});

// Run - node index.js to see the server running !
