let fs = require('fs')
let content = 'this is the content of the file sync'

fs.writeFileSync('message.txt', content)

console.log('File written successfully');
