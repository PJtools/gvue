// using with vue-i18n in CDN
/*eslint-disable */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (!isServer) {
        if (typeof window.gvue !== 'undefined') {
            if (!('langs' in gvue)) {
              gvue.langs = {};
            }
          gvue.langs[lang.g.locale] = lang;
        }
    }
};
/*eslint-enable */
