!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define("gvue/locale",["vue"],e):"object"==typeof exports?exports["gvue/locale"]=e(require("vue")):t["gvue/locale"]=e(t.Vue)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/locale/",e(e.s=42)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(6),o=n(7);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(e,n){e.exports=t},function(t,e,n){"use strict";e.__esModule=!0;var r=n(11),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(12),__esModule:!0}},function(t,e,n){n(13),t.exports=n(4).Object.assign},function(t,e,n){var r=n(14);r(r.S+r.F,"Object",{assign:n(24)})},function(t,e,n){var r=n(0),o=n(4),u=n(15),i=n(17),c=function(t,e,n){var f,a,l,s=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,y=t&c.B,m=t&c.W,h=p?o:o[e]||(o[e]={}),x=h.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(f in n)(a=!s&&g&&void 0!==g[f])&&f in h||(l=a?g[f]:n[f],h[f]=p&&"function"!=typeof g[f]?n[f]:y&&a?u(l,r):m&&g[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?u(Function.call,l):l,v&&((h.virtual||(h.virtual={}))[f]=l,t&c.R&&x&&!x[f]&&i(x,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(16);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(18),o=n(23);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(19),o=n(20),u=n(22),i=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(2)&&!n(3)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(1);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(25),o=n(36),u=n(37),i=n(38),c=n(6),f=Object.assign;t.exports=!f||n(3)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r})?function(t,e){for(var n=i(t),f=arguments.length,a=1,l=o.f,s=u.f;f>a;)for(var p,d=c(arguments[a++]),v=l?r(d).concat(l(d)):r(d),y=v.length,m=0;y>m;)s.call(d,p=v[m++])&&(n[p]=d[p]);return n}:f},function(t,e,n){var r=n(26),o=n(35);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(27),o=n(5),u=n(29)(!1),i=n(32)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=i&&r(c,n)&&a.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~u(a,n)||a.push(n));return a}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5),o=n(30),u=n(31);t.exports=function(t){return function(e,n,i){var c,f=r(e),a=o(f.length),l=u(i,a);if(t&&n!=n){for(;a>l;)if((c=f[l++])!=c)return!0}else for(;a>l;l++)if((t||l in f)&&f[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(8),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(33)("keys"),o=n(34);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){u||void 0!==window.gvue&&("langs"in gvue||(gvue.langs={}),gvue.langs[t.g.locale]=t)};var r=n(9),o=function(t){return t&&t.__esModule?t:{default:t}}(r),u=o.default.prototype.$isServer},,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10),u=r(o),i=n(39),c=r(i),f=n(43),a=r(f),l=(0,u.default)({},a.default,{g:{locale:"zh-CN",message:{validate:{no_empty:"{0}不能为空.",min_len:"{0}长度不能小于{1}位.",max_len:"{0}长度不能大于{1}位."},placeholder:"请输入{0}...",error:{auth:"Token令牌失效或不正确，请重新登录.",grant:"身份验证不通过，无权限访问，请重新登录.",args:"[{0}]方法输入参数错误.",login_non_exist:"用户名不存在或密码错误."}},noun:{login:"登录",username:"用户名",pwd:"密码"}}});(0,c.default)(l),e.default=l},function(t,e,n){!function(e,r){t.exports=r(n(9))}(0,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/locale/",e(e.s=18)}({0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){u||void 0!==window.iview&&("langs"in iview||(iview.langs={}),iview.langs[t.i.locale]=t)};var r=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(r),u=o.default.prototype.$isServer},1:function(e,n){e.exports=t},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(r),u={i:{locale:"zh-CN",select:{placeholder:"请选择",noMatch:"无匹配数据",loading:"加载中"},table:{noDataText:"暂无数据",noFilteredDataText:"暂无筛选结果",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部"},datepicker:{selectDate:"选择日期",selectTime:"选择时间",startTime:"开始时间",endTime:"结束时间",clear:"清空",ok:"确定",datePanelLabel:"[yyyy年] [m月]",month:"月",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",year:"年",weekStartDay:"0",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},months:{m1:"1月",m2:"2月",m3:"3月",m4:"4月",m5:"5月",m6:"6月",m7:"7月",m8:"8月",m9:"9月",m10:"10月",m11:"11月",m12:"12月"}},transfer:{titles:{source:"源列表",target:"目的列表"},filterPlaceholder:"请输入搜索内容",notFoundText:"列表为空"},modal:{okText:"确定",cancelText:"取消"},poptip:{okText:"确定",cancelText:"取消"},page:{prev:"上一页",next:"下一页",total:"共",item:"条",items:"条",prev5:"向前 5 页",next5:"向后 5 页",page:"条/页",goto:"跳至",p:"页"},rate:{star:"星",stars:"星"},tree:{emptyText:"暂无数据"}}};(0,o.default)(u),e.default=u}})})}])});