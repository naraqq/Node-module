const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    console.log("server side is working !");
    res.send("Cайн байна уу намайг Нармандах гэдэг.");
  })
  .listen(3000);
