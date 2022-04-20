let http = require("http");
let host = "127.0.01";
let port = 3000;
let file = require("fs");
let fileimg = require("fs");
let queryString = require("querystring");

let data = require("fs");

let object = {
    name: "Naraa",
    age: 23,
    gender: "male",
};

let jsonData = JSON.stringify(object);
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000,
    "Content-type": "application/json",
};

let server = http
    .createServer((req, res) => {
        if (req.url.match(/^\/data/)) {
            const value = req.url.split("=");
            console.log(value);

            if (value[1] == "html") {
                res.writeHead(200);
                res.write(file.readFileSync(`ex03.html`));
                res.end();
            } else if (value[1] == "png") {
                res.writeHead(200, "Content-Type: image/pdf");
                res.write(file.readFileSync(`steak.png`));
                res.end();
            } else if (value[1] == "json") {
                res.writeHead(200, headers);
                res.end(jsonData);
            }
            res.end();
        } else {
            res.writeHead(200, "Content-Type: text/plain");
            res.write("Not Found");
            res.end();
        }
    })
    .listen(port);
