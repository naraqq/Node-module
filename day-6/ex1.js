let os = require('os')

let cpus = JSON.stringify(os.cpus())
let arch = JSON.stringify(os.arch())
let freemem = JSON.stringify(os.freemem())
let devNull = JSON.stringify(os.devNull)
let endianness = JSON.stringify(os.endianness())
let totalmem = JSON.stringify(os.totalmem())

let http = require('http');

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Content-type': 'application/json'
};
console.log(cpus);
console.log(arch);
console.log(freemem);
http.createServer(function (request, repsonse) {
    repsonse.writeHead(200, headers);
    repsonse.write(arch)
    repsonse.write(freemem)
    repsonse.write(devNull)
    repsonse.write(endianness)
    repsonse.write(totalmem)
    repsonse.end(cpus);
}).listen(3000);
console.log("Server running at http://localhost:3000");