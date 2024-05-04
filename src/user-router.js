const Router = require('../framework/Router')

const router = new Router()
const users = [
    {id: 1, name: 'Serega'},
    {id: 2, name: "Alex"}
]
router.get('/users', (req, res) => {
    if (req.params.id) {
        console.log(req.params.id)
        return res.send(users.find(user => user.id === +req.params.id))
    }
    res.send(users)
})

router.post('/users', (req, res) => {
    const user = req.body
    users.push(user)
    res.send(users)
})

module.exports = router