let https = require("https");
let http = require('http')




http.createServer(function (request, repsonse) {
    https
        .get(" https://ghibliapi.herokuapp.com/films", (Response) => {
            let data = [];
            Response.on("data", (chunk) => {
                data.push(chunk);
            });
            Response.on("end", () => {
                let fs = require("fs");
                const films = JSON.parse(Buffer.concat(data).toString());
                fs.writeFileSync("films.json", JSON.stringify(films));
            });
        })
        .on("err", (err) => {
            console.log("Error" + err.message);
        });



    repsonse.writeHead(200);
    repsonse.write("success!");
    repsonse.end();
}).listen(3001);
console.log("Server running at http://localhost:3001");