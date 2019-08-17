// Require express

const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

// Middleware
app.use((req, res, next) => {
  console.log("Hello from the middleware !");
  next();
});

// Listening to server
const port = 3000;
app.listen(3000, () => {
  console.log(`App running on port ${port}`);
});

// Routes

app.get("/", (req, res) =>
  res
    .status(200)
    .json({ message: "Hello from the server !", app: "Express-Routes" })
);

// Middleware
app.use((req, res, next) => {
  console.log("Hello from the middleware defined after the route !");
  next();
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "Success !", data: { body: req.body } });
});
