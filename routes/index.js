const views = require('./views')

function useRoutes(app) {
    app.use(views.routes(), views.allowedMethods())
}

module.exports = useRoutes