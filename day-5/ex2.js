let object = {
    name: "Naraa",
    age: 23,
    gender: "male"
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
}).listen(3001);
console.log("Server running at http://localhost:3001");