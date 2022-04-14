let fs = require('fs')

let content = '\nWe are appending this file synchronously using node.js'

fs.appendFileSync('message.txt', content);
console.log('file appended successfully!');