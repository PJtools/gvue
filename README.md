# gvue
基于Vue2.x + vue-router + Vuex进行扩展封装，提供脚手架进行依赖注入.

## 说明
提取封装通用代码，减少Vue开发全家桶重复代码，只关注工程项目业务代码开发.

## 开发
```bash
    # 安装
    npm install gvue --save
```

## 目录结构
```shell
├── src
│   ├── components             // 全局公用组件库
│   ├── directive              // 全局指令
│   ├── filters                // 全局过滤接口
│   ├── locale                 // 全局多语言集
│   ├── mixins                 // Vue mixins
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用函数/方法
│   └── index.js               // 整体导出入口
```

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017, PJtools
