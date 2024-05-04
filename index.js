const http = require('http')
const dotenv = require('dotenv')
const EventEmitter = require('events')
const Router = require('./framework/Router')
dotenv.config()
const emitter = new EventEmitter()
const Application = require('./framework/Application')
const router = require('./src/user-router')
const PORT = 5001

const app = new Application()

app.addRouter(router)
app.listen(PORT, () => console.log("Сервер работает на ПОРТУ № " + PORT))