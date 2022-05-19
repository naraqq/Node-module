const express = require("express");
const app = express();
const logStuff = require("./logStuff");

app.get("arrayuser/:id", logStuff, (req, res, next) => {
  res.send("User info ");
});
app.listen(3000);
