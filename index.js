const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const PORT = 5001
const jsonParser = require('./framework/parseJson')
const app = new Application()

app.addRouter(userRouter)
app.use(jsonParser)
app.listen(PORT, () => console.log("Сервер работает на ПОРТУ № " + PORT))