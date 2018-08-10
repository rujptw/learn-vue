#### babel-polyfill
1. 原因:解决某些浏览器不兼容js新语法的问题，babel-polyfill可以模拟ES6使用的环境，可以使用ES6的所有新方法
2. 如何使用
    * npm install --save babel-polyfill
    * 在 Webpack/Browserify/Node中使用
        ```
        在webpack.base.conf.js文件中，使用

        module.exports = {
        entry: {
        app: ["babel-polyfill", "./src/main.js"]
          }
        };
        ```