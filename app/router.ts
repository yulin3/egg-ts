import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.redirect('/', '/news');
  router.get('/news', controller.news.list);
};
