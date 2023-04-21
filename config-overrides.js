const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = (config, env) => {
  config.plugins = config.plugins.concat([
    new PrerenderSPAPlugin({ // 打包成多页面
      routes: [
        '/',
        '/main/industry',
        '/main/manage',
        '/regist',
        '/finance',
        '/approve/*/*',
        '/account/*',
        '/fiscal',
        '/about',
      ],
      staticDir: path.join(__dirname, 'build'),
    }),
  ]);
  return config;
}