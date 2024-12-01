const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "This is api using user end point",
  });
});

const port = 5003;

app.listen(port, function () {
  console.log(`I am running on ${port} `);
});
