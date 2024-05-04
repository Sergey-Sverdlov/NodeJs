const Router = require('../framework/Router')

const router = new Router()
const users = [
    {id: 1, name: 'Serega'},
    {id: 2, name: "Alex"}
]
router.get('/users', (req, res) => {
    res.end(JSON.stringify(users))
})


module.exports = router