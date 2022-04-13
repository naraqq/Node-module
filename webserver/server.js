let http = require('http');

http.createServer(function (request, repsonse) {
    repsonse.writeHead(200);
    repsonse.write("<h1>Hello Node!!!</h1>\n");
    repsonse.end();
}).listen(3001);
console.log("Server running at http://localhost:3001");