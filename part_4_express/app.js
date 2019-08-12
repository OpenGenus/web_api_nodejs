// Require express

const express = require("express");
const app = express();

app.use(express.json());

// Listening to server
const port = 3000;
app.listen(3000, () => {
  console.log(`App running on port ${port}`);
});

// Routes

app.post("/data", (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "Success !", data: { body: req.body } });
});
app.get("/", (req, res) =>
  res
    .status(200)
    .json({ message: "Hello from the server !", app: "Express-Routes" })
);
app.get("*", (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);

// Start up the server
