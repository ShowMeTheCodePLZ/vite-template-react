# React Template⚡️

⚡️A base React Vite starter template

## Branch State

| 分支名          | 依赖列表                                                              |
| --------------- | --------------------------------------------------------------------- |
| master          | react 18+ts+react-router-dom v6+axios+vite+eslint+prettier+commitizen |
| pro             | (master)+ahooks+tailwind                                              |
| full-stack-nest | (pro)+(nestjs template)+tailwind                                      |
| full-stack-koa  | (pro)+koa2+koa-body+koa-json-error+koa-router+koa-static+tailwind     |

## Dependencies

- react 18
- typescript
- react-router-dom v6
- axios
- vite
- eslint
- prettier
- commitizen
- ahooks
- koa2
- koa-body
- koa-json-error
- koa-router
- koa-static
- tailwind

## Getting Started

```shell
npm install degit -g

# yarn
npx degit ShowMeTheCodePLZ/vite-template-react#full-stack-koa myapp
cd myapp
yarn
git init
npx husky install
cd koa
yarn

# npm
npx degit ShowMeTheCodePLZ/vite-template-react#full-stack-koa myapp
cd myapp
npm i
git init
npx husky install
cd koa
yarn

```

### Prerequisites

- `npm` should be installed.
- `git` should be installed (recommended v2.4.11 or higher)

## File directory

### src:

- api —— 请求接口
- assets/static —— 存放一些静态资源、如 icon、图片
- components —— 存放通用组件
- styles/design —— 存放全局样式
- enums —— 存放全局 ts 字典
- hooks —— 存放封装的自定义 hook
- layouts —— 存放布局方案
- lib/vendor —— 存放第三方库
- pages/views —— 存放项目的页面
- routes —— 存放路由组件
- settings —— 存放一些全局的设置
- store —— 存放状态管理相关
- utils —— 存放通用的工具类函数

### koa/src:

- assets/static —— 存放一些静态资源、如 icon、图片
- controllers —— 存放控制器
- models —— 存放数据模型
- config —— 配置文件信息
- constants —— 全局常量
- jobs —— 高并发下队列处理
- routes —— 路由
- tasks —— 定时任务
- templates —— 页面模板
- utils —— 存放通用的工具类函数
