let http = require('http');
let fs = require('fs');

http.createServer(function (request, response) {

    response.writeHead(200);
    const data = fs.readFileSync('test.html');
    response.end(data)

})
    .listen(3000)

// var fs = require('fs')

// var contentName = "content.txt"
// var content = fs.readFileSync(fileName);


console.log('server is started at local host 3000');