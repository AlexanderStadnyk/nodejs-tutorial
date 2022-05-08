const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (obj) => {
    console.log(`data recieved user ${obj.name} with id: ${obj.id}`)
})
customEmitter.on('response', () => {
    console.log(`some other logic`)
})

customEmitter.emit('response', {name:'jhon', id:34})