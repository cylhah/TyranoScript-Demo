
class ViewsController {
    //返回视图
    static async getIndexView(ctx) {
        await ctx.render('index')
    }
}

module.exports = ViewsController