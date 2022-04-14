var fs = require('fs')

var contentName = "content.txt"
var content = fs.readFileSync(fileName);

console.log("Content: " + content);