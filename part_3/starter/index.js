// Including the http module
const http = require("http");
const url = require("url");
// Creating the server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });

    res.end("This is the OVERVIEW !");

    // Product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end("This is the product");

    // API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json"
    });
    res.end("This is the API");

    // Not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world"
    });
    res.end("<h1>Page not found!</h1>");
  }

  console.log(url.parse(req.url, true));
  res.end("Hello I am the OVERVIEW !");
});

//Listening to the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening to requests on port 8000");
});

// Run - node index.js to see the server running !