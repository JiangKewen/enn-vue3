# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## vite create vue 项目创建过程

- 选择vue-ts
- 修改vite.config.js、tsconfig.json:  添加路径别名(@)、allowJs、全局css预处理、proxy等、npm i --save-dev @types/node、yarn add @types/node -D
- 添加.env.development、.env.production: import.meta.env上可以获取相关信息，需要以VITE_开头
- yarn add eslint -D、npx eslint --init: 使用Airbnb、添加部分rules、globals（vue全局、ts全局）
- 添加.editorconfig
- 添加prettier、.prettierrc：npm i prettier -D
- 添加npm i eslint-plugin-prettier eslint-config-prettier -D处理eslint、prettier冲突
- 添加路由npm install vue-router@4、routes/index.ts
- 添加element-plus，按需引入： 部分特殊css需要手动引入，目前的icon需要手动引入;加入element-plus推荐的自动导入，产生auto-imports和components的声明文件

### import.meta.env

- import.meta.env.MODE: {string} 应用运行的模式。
- iimport.meta.env.BASE_URL: {string} 部署应用时的基本 URL。他由base 配置项决定。
- iimport.meta.env.PROD: {boolean} 应用是否运行在生产环境。
- iimport.meta.env.DEV: {boolean} 应用是否运行在开发环境 (永远与 import.meta.env.PROD相反)。
- 只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码
