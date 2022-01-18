/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite' // 帮手函数，这样不用 jsdoc 注解也可以获取类型提示
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/ npm i --save-dev @types/node
export default () =>
  defineConfig({
    plugins: [
      // 配置需要使用的插件列表
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    // 开发或生产环境服务的公共基础路径 默认： /
    base: './',
    // 静态资源服务的文件夹
    publicDir: 'public',
    resolve: {
      alias: [
        // 配置别名
        { find: '@', replacement: resolve(__dirname, 'src') }
      ],
      // 导入时想要省略的扩展名列表
      // 不建议使用 .vue 影响IDE和类型支持
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    // css
    css: {
      // 指定传递给 css 预处理器的选项
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: `$injectedColor:orange;`
      //   },
      //   less: {
      //     javascriptEnabled: true,
      //     additionalData: `@import "${resolve(__dirname, './src/assets/styles/global.less')}";`
      //   }
      // }
    },
    // 本地运行配置，以及反向代理配置
    server: {
      host: 'localhost',
      https: false, // 是否启用 http 2
      cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
      open: true, // 服务启动时自动在浏览器中打开应用
      port: 9000,
      proxy: {
        '/api': {
          target: 'https://xxxx.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    // 打包配置
    build: {
      // 浏览器兼容性  "esnext"|"modules"
      target: 'modules',
      // 指定输出路径
      outDir: 'dist',
      // 生成静态资源的存放路径
      assetsDir: 'assets'
    }
  })
