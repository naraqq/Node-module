const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
let fsFile = require("fs");
const fsRead = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/", (req, res) => {
  console.log("Got post request from client");

  let read = fsRead.readFileSync("user.json", "utf-8");
  let readToObj = JSON.parse(read);
  let content = req.body;
  let both = content.concat(readToObj);
  let final = JSON.stringify(both);
  fsFile.writeFileSync("user.json", final);
  console.log("file writed successfully!");
  res.send("Got the post request");
});
app
  .get("/users/:userId/books/:booksId", (req, res) => {
    console.log("server is working!!!");

    const data = fs.readFileSync("user.json", {
      encoding: "utf8",
      flag: "r",
    });
    const json = JSON.parse(data);
    const filteredData = json.filter((e) => e.id == req.params.userId);

    console.log(typeof req.params.userId);
    res.send(filteredData);
  })
  .listen(3000);
