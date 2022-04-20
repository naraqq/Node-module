let https = require("https");

https
    .get("https://dev-api.mstars.mn/api/foods", (Response) => {
        let data = [];
        Response.on("data", (chunk) => {
            data.push(chunk);
        });
        Response.on("end", () => {
            let fs = require("fs");
            const foods = JSON.parse(Buffer.concat(data).toString());
            fs.writeFileSync("foods.json", JSON.stringify(foods));
        });
    })
    .on("err", (err) => {
        console.log("Error" + err.message);
    });
