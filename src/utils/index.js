import cookies from 'js-cookie'; // Cookie类
import axios from 'axios'; // Axios Http请求类
import util from './util';

export default {
  axios,
  cookies,
  // 引入全局扩展工具函数
  ...util
};
