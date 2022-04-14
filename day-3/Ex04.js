var obj = {
    success: false,
    Data: [
        {
            name: 'MyName',
            Age: 23
        }, {
            name: "NextName",
            Age: 26
        },
        {
            name: 'MyName',
            Age: 23
        }, {
            name: "NextName",
            Age: 26
        }
    ]
}

let jsonData = JSON.stringify(obj)

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