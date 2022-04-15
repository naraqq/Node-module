let http = require('http');
let host = "127.0.01";
let port = 3000;
let file = require('fs')
let fileimg = require('fs')
let queryString = require('querystring')

let data = require('fs')

let server = http.createServer((req, res) => {

    if (req.url === "/pdf") {
        res.writeHead(200, 'Content-Type: application/pdf')
        res.write(file.readFileSync(`server-js.test.pdf`))
        res.end()
    }

    else if (req.url === "/img") {
        res.writeHead(200, 'Content-Type: image/png')
        res.write(fileimg.readFileSync(`img/detoxsalad.png`))
        res.end()
    } else if (req.url === "/q?a=3&b=4&c=5") {
        const { a, b, c } = queryString.parse(req.url.slice(3));
        const sum = parseInt(a) + parseInt(b) + parseInt(c)
        console.log(sum);
        res.end(`${sum}`)
    } else if (req.url === "/q?question=why") {
        console.log('doesn"t matter');
        req.end()
    } else if (req.url === "/q?question=hi") {
        console.log('bye');
        req.end()
    }

    else {
        res.writeHead(200, 'Content-Type: text/plain')
        res.write('Not Found')
        res.end()
    }



}).listen(port)