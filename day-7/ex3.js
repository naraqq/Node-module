let http = require("http");
let https = require("https");
let fs = require("fs");
const EventEmitter = require("events");

const testEmitter = new EventEmitter();

http
  .createServer(function (request, response) {
    if (request.url === "/films") {
      testEmitter.emit("start");
    }

    response.writeHead(200);
    response.write("<h1>Hello Node!!!</h1>\n");
    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");

testEmitter.on("start", () => {
  https
    .get(" https://ghibliapi.herokuapp.com/films", (Response) => {
      let data = [];
      Response.on("data", (chunk) => {
        data.push(chunk);
      });
      Response.on("end", () => {
        const films = JSON.parse(Buffer.concat(data).toString());
        const title = films.map((e) => {
          e.title;
        });
        const pic = films.map((e) => {
          e.image;
        });
        const content = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body>
            <div>
              <table>
                <tr>
                  <th>${title}</th>
                  <th>${pic}</th>
                </tr>
              </table>
            </div>
          </body>
        </html>
        `;

        fs.writeFileSync("films.html", content);
      });
    })
    .on("err", (err) => {
      console.log("Error" + err.message);
    });
});
