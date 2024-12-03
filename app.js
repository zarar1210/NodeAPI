const express = require("express");
const app = express();

app.get("api/get", (req, res) => {
  res.json({
    message: "This functionality implementd via CICD pipeline from github",
  });
});

app.get("api/get_user_details", (req, res) => {
  res.json({
    message: "This functionality implementd via CICD pipeline from github",
  });
});

const port = 8000;

app.listen(port, () => {
  console.log('Server is running');
});

