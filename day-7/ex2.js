let http = require("http");
let https = require("https");
const EventEmitter = require("events");
let fs = require("fs");

const testEmitter = new EventEmitter();
let content = "\n,[We are appending this file synchronously using node.js]";
https
  .get(" https://ghibliapi.herokuapp.com/films", (Response) => {
    let data = [];
    Response.on("data", (chunk) => {
      data.push(chunk);
    });
    Response.on("end", () => {
      let fs = require("fs");
      const films = JSON.parse(Buffer.concat(data).toString());
      fs.writeFileSync("films.json", JSON.stringify(films));
    });
    console.log(data);
  })
  .on("err", (err) => {
    console.log("Error" + err.message);
  });
http
  .createServer(function (request, response) {
    testEmitter.emit("start");
    response.writeHead(200);
    response.write("<h1>Hello Node!!!</h1>\n");
    response.end();
    if (request.url === "/films") {
      fs.appendFileSync("films.json", content);
      console.log("file appended successfully!");
    }
  })

  .listen(3001);
console.log("Server running at http://localhost:3001");

testEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээж авлаа!!!");
});
