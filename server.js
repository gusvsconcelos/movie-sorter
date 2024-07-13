const express = require("express");
const app = express();
const path = require("path");

app.use(express.st atic(path.join()));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
