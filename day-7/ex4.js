let https = require("https");
let eventEmitter = require("events");
let filmEmitter = new eventEmitter();

filmEmitter.on("start", () => {
  https.get("https://ghibliapi.herokuapp.com/films", (res) => {
    let data = [];
    res.on("data", (file) => {
      data.push(file);
    });
  });
});
