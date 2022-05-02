const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/static", express.static("public"));

app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book");
  })
  .post(function (req, res) {
    res.send("Add a book");
    console.log(req.body);
  })
  .put(function (req, res) {
    res.send("Update the book");
    console.log(req.body);
  });
app
  .get("/library", (req, res) => {
    console.log("server is working!!!");

    const data = fs.readFile("library.json", (err, data) => {
      if (err) {
        throw err;
      } else {
        req.send(data);
        // console.log(data);
      }
    });
  })
  .listen(3000);
