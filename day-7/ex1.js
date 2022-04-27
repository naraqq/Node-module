let http = require("http");
const EventEmitter = require("events");

const testEmitter = new EventEmitter();
http
  .createServer(function (request, response) {
    testEmitter.emit("start");
    response.writeHead(200);
    response.write("<h1>Hello Node!!!</h1>\n");
    response.end();
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");

testEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээж авлаа!!!");
});
