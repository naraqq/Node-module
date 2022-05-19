const express = require("express");
const app = express();
let router = express.Router();
app.use("/user", router);

router.get("/userinfo/:id", (req, res, next) => {
  res.send("User info with id");
});
router.use("/user", (req, res, next) => {
  res.send("User Info");
});
router.get("/userid/:id", (req, res, next) => {
  const id = req.params.id;
  if (id < 0) {
    const err = new Error("Can't find user with this ID!");
    err.status = "Fail";
    err.statusCode = 500;
    return next(err);
  }
  res.send("User Info with ID" + id);
});

app.listen(3000);
