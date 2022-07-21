# React Template⚡️

⚡️A base React Vite starter template

## Branch State

| 分支名     | 依赖列表                                                              |
| ---------- | --------------------------------------------------------------------- |
| master     | react 18+ts+react-router-dom v6+axios+vite+eslint+prettier+commitizen |
| pro        | (master)+ahooks+tailwind                                              |
| ssr        | (nextjs template)+prettier+commitizen+tailwind                        |
| full-stack | (pro)+(nestjs template)+typeorm+tailwind                              |

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
- tailwind
- nestjs
- typeorm

## Getting Started

```shell
npm install degit -g

# yarn
npx degit ShowMeTheCodePLZ/vite-template-react#full-stack myapp
cd myapp
yarn
git init
npx husky install
cd nest
yarn

# npm
npx degit ShowMeTheCodePLZ/vite-template-react#full-stack myapp
cd myapp
npm i
git init
npx husky install
cd nest
npm i
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

### nest/src:

- common —— 通用模块
- common/decorators —— 装饰器
- common/filters —— 过滤器
- common/guards —— 守卫
- common/interceptors —— 拦截器
- common/middleware —— 中间件
- common/pipes —— 管道
- config —— 配置文件信息
- constants —— 全局常量
- jobs —— 高并发下队列处理
- modules —— 业务代码
- tasks —— 定时任务
- templates —— 页面模板
- utils —— 存放通用的工具类函数
