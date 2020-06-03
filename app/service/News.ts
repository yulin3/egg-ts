import { Service } from 'egg';

// 对象嵌套数组的类型怎么写?例如对象嵌套数组

// 这里没定义的属性后续就不能用
export interface NewsItem {
  data: object;
}

// News Api Service
export class News extends Service {
  /**
   * request 591news api
   * @param api - Api name
   * @param opts - urllib options
   */
  public async request(api: string, opts?: object) {
    const options = Object.assign({
      method: 'GET',
      dataType: 'json',
      timeout: ['30s', '30s'],
    }, opts);

    const result = await this.ctx.curl(`${this.config.news.serverUrl}/${api}`, options);
    console.log(options)
    
    return result.data;
  }

  /**
   * getList 新闻列表
   * @param.page - 当前页
   */
  public async getList(page: number): Promise<NewsItem> {
    let opts = {
      data: {
        page: page || 1
      }
    }
    return await this.request(`news/newslist`, opts);
  }
}

export default News;
