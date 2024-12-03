const express = require("express");
const app = express();

app.get("ap/get", (req, res) => {
  res.json({
    message: "This functionality implementd via CICD pipeline from github",
  });
});

app.get("ap/get_user_details", (req, res) => {
  res.json({
    message: "This functionality implementd via CICD pipeline from github",
  });
});

const port = 5003;

app.listen(port, () => {
  console.log('Server is running');
});

