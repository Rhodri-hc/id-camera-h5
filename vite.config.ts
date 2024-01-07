/*
 * @Description: Do not edit
 * @Autor: New
 * @Date: 2023-04-11 16:58:08
 * @LastEditTime: 2023-04-24 17:53:49
 */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';
import proxyServer from './config/proxy';
import postcssPxtorem from 'postcss-pxtorem';
export default defineConfig(({ command, mode, ...other }) => {
  const isProd = mode === 'production'; // build 独有配置

  return {
    base: 'h5/sunny-novel',
    resolve: {
      alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
    },
    server: {
      host: true,
      port: 8010,
      proxy: proxyServer,
    },
    plugins: [
      react(),
      tsConfigPaths(),
      // vitePluginImp({
      //   libList: [
      //     {
      //       libName: 'antd-mobile',
      //       style: (name: string) => `antd-mobile/es/${name}/style/css`,
      //     },
      //   ],
      // }),
      isProd &&
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
      {
        name: 'singleHMR',
        handleHotUpdate({ modules }) {
          modules.map((m) => {
            m.importedModules = new Set();
            m.importers = new Set();
          });
          return modules;
        },
      },
    ],
    css: {
      modules: {
        // css模块化 文件以.module.[css|less|scss]结尾
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
        localsConvention: 'camelCase',
        // test: /.(css|less|sass|scss|styl|stylus|pcss|postcss)/,
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/styles/common.scss';`,
        },
      },
      postcss: {
        plugins: [
          postcssPxtorem({
            rootValue: 100,
            propList: ['*'],
            unitPrecision: 5,
            exclude: /(node_module)/,
          }),
        ],
      },
    },
  };
});
