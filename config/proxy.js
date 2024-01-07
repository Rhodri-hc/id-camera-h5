/*
 * @Description: Do not edit
 * @Autor: New
 * @Date: 2023-04-11 16:01:03
 * @LastEditTime: 2023-04-11 16:43:52
 */
const urlPaths = {
  dev: 'https://sunny-test.careduka.com', // 开发环境
  test: 'https://sunny-test.careduka.com', // 测试环境
  prod: 'https://sunny-test.careduka.com', // 正式环境
};
const baseUrl = urlPaths[process.env.REACT_APP_ENV];
export default {
  '/api': {
    target: 'https://mbti.careduka.com/',
    changeOrigin: true,
  },
  '/sunny': {
    target: 'https://sunny-test.careduka.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/sunny/, ''),
  },
};
