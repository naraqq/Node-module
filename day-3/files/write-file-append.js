var fs = require('fs')
var content = '\nthis data will be appended at the end of the file'

fs.appendFile('message.txt', content, (error) => {
    if (error) {
        throw error;
    } else {
        console.log('the new content is appended successfully');
    }
})