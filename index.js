const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const PORT = 5001
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const app = new Application()

app.addRouter(userRouter)
app.use(jsonParser)
app.use(parseUrl('http://localhost:5000'))
app.listen(PORT, () => console.log("Сервер работает на ПОРТУ № " + PORT))