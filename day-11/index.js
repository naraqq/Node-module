console.log("test");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const json = require("body-parser/lib/types/json");
var file = require("fs");

app.use("/static", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/404", (req, res) => {
  res.render("404", { message: "error!!!" });
});
app.get("/js", (req, res) => {
  file.readFile("views/donats.json", (error, data) => {
    if (error) {
      console.log("error is happening");
      throw error;
    } else {
      let newStr = JSON.parse(data);
      // console.log(newStr);
      res.render("js", { json: newStr });
    }
  });
});

app
  .post(
    "/register",
    body("email").isEmail(),
    body("phone").isLength({ min: 8, max: 8 }),
    (req, res) => {
      const errors = validationResult(req);

      if (errors.isEmpty()) {
        return res.json("register ok!");
      } else {
        return res.status(400).json({ errors: errors.array() });
      }
    }
  )
  .listen(3000);
