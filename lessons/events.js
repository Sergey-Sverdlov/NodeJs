const Emitter = require('events')
const emitter = new Emitter()
const dotenv = require('dotenv')

dotenv.config()
emitter.once('message', (data, second, third) => {
    console.log('Вы прислали сообщение ' + data)
    console.log("Второй аргумент " + second)
})

const MESSAGE = process.env.MESSAGE || 'p'
console.log(MESSAGE)
if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123)
    emitter.emit('message', MESSAGE, 12)
    emitter.emit('message', MESSAGE, 1)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}