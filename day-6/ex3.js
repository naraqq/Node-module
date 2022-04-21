let https = require("https");
let http = require('http')




http.createServer(function (request, repsonse) {
    https
        .get("https://ghibliapi.herokuapp.com/films ", (Response) => {
            let data = [];
            Response.on("data", (chunk) => {
                data.push(chunk);
            });
            Response.on("end", () => {
                let fs = require("fs");
                const films = JSON.parse(Buffer.concat(data).toString());
                fs.writeFileSync("films.json", JSON.stringify(films));

                const title = films.map(e => e.title);
                const img = films.map(e => e.image)
                generateData(title, img)
            });
        })
        .on("err", (err) => {
            console.log("Error" + err.message);
        });

    function generateData(title, img) {
        // console.log(title, img);
        let titles = title.map(e => `<p>${e}</p>`)
        let imgs = img.map(e => `<img src="${e}"/></div>`)
        console.log(imgs);
        repsonse.writeHead(200);
        repsonse.write(`<div>${titles}${imgs} </div>`);
        repsonse.end();
    }



}).listen(3001);
console.log("Server running at http://localhost:3001");

