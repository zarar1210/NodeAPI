
const express = require("express");
const app = express();

// Corrected path: added leading slash ("/")
app.get("/api/get", (req, res) => {
  res.json({
    message: "This functionality implemented via CICD pipeline from Docker finally.",
  });
});

// Corrected path: added leading slash ("/")
app.get("/api/get_user_details", (req, res) => {
  res.json({
    message: "This functionality implemented via CICD pipeline from Docker",
  });
});

const port = 5000;

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
