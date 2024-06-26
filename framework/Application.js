const http = require('http')
const EventEmitter = require('events')
module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer()
        this.middlewares = []
    }

    use(middleware) {
        this.middlewares.push(middleware)
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    addRouter(router) {
        console.log(router)
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method]
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {

                    handler(req, res)
                })
            })

        })
    }

    _createServer() {
        const server = http.createServer((req, res) => {
            let body = ""
            req.on('data', chunk => {
                body += chunk;
            })
            req.on('end', () => {
                if (body) {
                    req.body = JSON.parse(body)
                }
                this.middlewares.forEach(middleware => middleware(req, res))
                console.log(req.params)
                const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
                if (!emitted)
                    res.end()
            })

        })
        return server
    }

    _getRouteMask(url, method) {
        return `[${url}]:[${method}]`
    }
}