const os = require('os')

// console.log(os)

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.hostname());

let object = {
    type: os.type(),
    homedir: os.homedir(),
    uptime: os.uptime(),
    hostname: os.hostname()
}


let jsonData = JSON.stringify(object)

let http = require('http');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Content-type': 'application/json'
};

http.createServer(function (request, repsonse) {
    repsonse.writeHead(200, headers);
    repsonse.end(jsonData);
}).listen(3000);
console.log("Server running at http://localhost:3000");

console.log(os);