const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "This response coming from via Jenkins",
  });
});

const port = 5003;

app.listen(port, '0.0.0.0', () => {
  console.log('Server is running');
});

