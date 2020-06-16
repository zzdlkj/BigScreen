### 项目介绍

> 本项目是由vue-cli构建工具生成的，并自己添加了vue-resource和vue-router来实现数据请求与路由跳转

vue-cli生成方式

1. 首先全局安装vue-cli

  `npm install -g vue-cli`

2. 接下来就可以生成自己的项目了使用 `vue init <template-name> <project-name>`

    例如：`vue init webpack my-project`

3. 再安装vue-resource、vue-router和vuex

    `npm install -g vue-resource`

    `npm install -g vue-router`

    `npm install -g vue-router`

最后生成的目录如下

```
|-bulid   环境配置
|-config  环境配置
|-dist    通过 npm run build 生成的最终文件所在目录
|-node_modules  依赖模块
|-src
  |-api
    |-config 接口文件配置
  |- assets
  |- components 组件所在目录
    |-Breadcrumb.vue 面包屑组件
    |-EchartBar.vue echarts柱状图组件
    |-...
  |- routers 不同页面
    |-Login.vue 登陆页面
    |-index.vue 主页
    |-...
  |-vuex 状态管理
    |-modules 分块处理各种组件数据
      |- compare.js 对比
      |- login.js 登陆数据
      |-...
    |- actions.js 动作
    |- getters.js 获取store 中的数据
    |- store.js   全局数据
    |- types.js   命名
  |- App.vue 入口组件
  |- main.js 入口配置
  |- router.js 路由配置
|-static 静态文件 例如：font css js 等
|-tests 测评
|-index.html  入口
|-package.json 相关依赖
|-gitignore git上传忽略的文件

```
架构如下
```
  login - > index -> menu - > router
  ^          |       |        |
  |__ _ _ _ _|_ _ _ _|_ _ _ _ |

        token失效或者退出
```

## 权限处理

登陆时后端返回一个权限字符串`stu_info,.....`，将字符串分割后遍历我们在`vuex`中维护的权限树，将有的权限设置为`true`

在机构页面会请求当前用户对这个视图的权限，两个取交集，对vuex进行更新，需要注意的是自己的视图是自动获得最高权限

[项目组件介绍](./components.md)
[vue-router文档](http://router.vuejs.org/zh-cn/index.html)
[vue-resource使用方法](http://www.cnblogs.com/keepfool/p/5657065.html)
[vue周边](https://github.com/jsfront/src/blob/master/vuejs.md)
[服务端路由支持](http://readystate4.com/2012/05/17/nginx-and-apache-rewrite-to-support-html5-pushstate/)
[语法校验ESlint](https://github.com/y8n/ESLint-rules-docs-cn)
