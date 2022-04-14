var fs = require('fs')
var content = 'this is the content in the file'

fs.writeFile('message.txt', content, (error) => {
    if (error) {
        throw err;
    } else {
        console.log('it is saved');
    }
})
