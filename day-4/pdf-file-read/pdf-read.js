let http = require('http');
let host = "127.0.01";
let port = 3000;
let file = require('fs')

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/pdf" });

    file.readFile('server-js.test.pdf', (error, data) => {
        if (error) {
            console.log("error is happening");
            throw error;
        } else {
            console.log('working');
            res.end(data);
        }
    })
}).listen(port)