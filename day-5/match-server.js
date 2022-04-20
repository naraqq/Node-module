let http = require('http');
let host = "127.0.01";
let port = 3000;
let file = require('fs')
let fileimg = require('fs')
let queryString = require('querystring')

let data = require('fs')

let object = {
    name: "Naraa",
    age: 23,
    gender: "male"
}


let jsonData = JSON.stringify(object)
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Content-type': 'application/json'
};


let server = http.createServer((req, res) => {

    if (req.url === "/q?data=pdf") {
        res.writeHead(200, 'Content-Type: image/pdf')
        res.write(file.readFileSync(`steak.png`))
        res.end()
    }

    else if (req.url === "/q?data=html") {
        res.writeHead(200)
        res.write(file.readFileSync(`ex03.html`))
        res.end()
    } else if (req.url === "/q?data=json") {
        res.writeHead(200, headers);
        res.end(jsonData);
    } else if (req.url.match(/^\/q/)) {
        const value = req.url.split('=')
        console.log(value);

        if (value[1] == 'hi') {
            res.writeHead(200)
            res.write(`<h1>Bye</h1>`)
        } else {
            res.write(`<h1>Doesn't matter</h1>`)
        }
        res.end();
    }

    else {
        res.writeHead(200, 'Content-Type: text/plain')
        res.write('Not Found')
        res.end()
    }



}).listen(port)
