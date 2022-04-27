function printFilms(str) {
  const request = require("request");
  request("https://ghibliapi.herokuapp.com/films", function () {
    console.log(str);
  });
}

module.exports = printFilms;
