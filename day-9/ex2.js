const express = require("express");
const request = require("request");
const app = express();

app
  .get("/", (req, res) => {
    console.log("server side is working !");

    request("https://ghibliapi.herokuapp.com/films", (err, response, body) => {
      const json = JSON.parse(body);
      res.send(json);
    });
  })
  .listen(3001);
