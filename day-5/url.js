let url = require('url')
let adr = "https://dev-api.mstars.mn/api/foods"
let q = url.parse(adr, true)

console.log(q.pathname);
console.log(q.host);