const express = require("express");
const app = express();

const port = process.env.port || 3000;
app.listen(port, function () {
  console.log("I am running don't worry, VERSION -6");
});
