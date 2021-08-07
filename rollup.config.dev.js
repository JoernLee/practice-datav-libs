const path = require('path');
// 引入resolve插件
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');


// 配置rollup打包时输入和输出路径
const inputPath = path.resolve(__dirname, './src/index.js');
const outputUmdPath = path.resolve(__dirname, './dist/imooc.datav.js');
const outputEsPath = path.resolve(__dirname, './dist/imooc.datav.es.js');

module.exports = {
    input: inputPath,
    output: [{
        file: outputUmdPath,
        format: 'umd', // 导出umd格式的模块
        name: 'imoocDatav', // umd格式必须要有name
        globals: {
            vue: "Vue",
        }
    }, {
        file: outputEsPath,
        format: 'es'
    }],
    plugins: [
        // 通过node-resolve插件，允许我们将本地项目和其中依赖的第三方模块进行混合打包（例如index.js中引入的sam-test）
        resolve(),
        // 可以识别commonjs语法
        vue(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
            plugins:[
                [
                    '@babel/transform-runtime',{
                    regenerator: true
                }]
            ]
        }),
        json(),
        postcss({
            plugins: []
        })
    ],
    external: [
        'vue'
    ]
};
