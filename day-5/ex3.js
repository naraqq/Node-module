let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile('ex03.html', (error, data) => {
        if (error) {
            throw error;
        } else {
            console.log('Day-5 operation success !!!');
            response.end(data);
        }
    })


}).listen(3002)

console.log('server is started at local host 3002');