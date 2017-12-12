import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

import locale from './locale/index';
import filters from './filters/index';
import utils from './utils/index';

import { Menu, Submenu, MenuItem, MenuItemGroup, Tree, Table } from 'element-ui';
import iView from 'iview';

const components = {

};

const gvue = {
  ...components
};

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  // 按需注册Element UI组件
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Tree);
  Vue.use(Table);

  // 注册整个iView组件，同时解决i18n国际化问题
  Vue.use(iView, {
    i18n: opts.i18n
  });

  // 注册组件
  Object.keys(gvue).forEach(key => {
    Vue.component(key, gvue[key]);
  });

  // 注册过滤器
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION,
  locale: locale.use,
  i18n: locale.i18n,
  install,
  utils,
  ...components
};

API.lang = (code) => {
  const langObject = window['gvue/locale'].default;
  if (code === langObject.i.locale) locale.use(langObject);
  else console.log(`The ${code} language pack is not loaded.`);
};

module.exports.default = module.exports = API;
