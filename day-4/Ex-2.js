let http = require('http');

http.createServer(function (request, repsonse) {
    repsonse.writeHead(200);
    repsonse.write(`<h1>Hello Node!!!</h1>\n
    <p> Random text for paragraph/ p element!</p>
    <ol>
        <li>Random Ul text</li>
        <li>Random Ul text2</li>
        <li>Random Ul text3</li>
        <li>Random Ul text4</li>
    </ol>
    `);
    repsonse.end();
}).listen(3001);
console.log("Server running at http://localhost:3001");