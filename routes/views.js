const router = require('koa-router')()
const ViewsController = require('../db/controller/ViewsController')

router
      .get('/', ViewsController.getIndexView)


module.exports = router
