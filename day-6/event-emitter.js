const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on("start", () => {
    if (true) {
        console.log('started');
    } else {
        console.log("endede");
    }
})


eventEmitter.emit('start')