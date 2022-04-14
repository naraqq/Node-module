let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile('index.html', (error, data) => {
        if (error) {
            throw error;
        } else {
            console.log('Operation success!!');
            response.end(data);
        }
    })


}).listen(3000)

console.log('server is started at local host 3000');