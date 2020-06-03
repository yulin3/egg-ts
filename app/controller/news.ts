import { Controller } from 'egg';

export default class NewsController extends Controller {
  public async list() {
    const { ctx, app } = this;
    const pageSize = app.config.news.pageSize;
    const page = parseInt(ctx.query.page) || 1;

    // 获取新闻列表
    const newsList = await ctx.service.news.getList(page);
    // console.log(newsList)
    // 渲染模板
    await ctx.render('news/list.tpl', { list: newsList.data, page, pageSize });
  }
}
