const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json({
    message: "This is api using user end point",
  });
});

const port = process.env.port || 3000;

app.listen(port, function () {
  console.log("I am running");
});
