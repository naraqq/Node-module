// Node js file core module
// fs trying to use fs module

var file = require('fs')


// read content of data by using this module
file.readFile('message.txt', (error, data) => {
    // if error accored
    if (error) {
        console.log("error is happening");
        throw error;
    } else {
        // if eth goes right
        console.log('Context: ' + data);
    }
})