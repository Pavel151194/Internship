import url from 'url'

export class RotesHandler {
    constructor(router) {
        this.routes = router.routes
    }

    handleRequest(req, res) {
        const urlParse = url.parse(req.url, true)
        const pathname = urlParse.pathname.split('/')

        let route = this.getRoute(pathname)

        if (!route) {
            res.statusCode = 404
            res.end('No such route')
            return
        }

        const cb = route[req.method] || route[''][req.method]
        cb(req, res)
    }

    getRoute(pathname) {
        let route = this.routes

        pathname.forEach((path, i) => {
            if (i) route = route[path]
        })

        return route
    }
}