// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNews from '../../../app/controller/news';

declare module 'egg' {
  interface IController {
    news: ExportNews;
  }
}
