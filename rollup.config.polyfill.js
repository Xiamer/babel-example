/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-01-19 10:58:43
 * @LastEditTime: 2021-02-01 15:09:47
 */
// 解析 node_modules 中的模块
import resolve from '@rollup/plugin-node-resolve';
// 转换 CJS -> ESM, 通常配合上面一个插件使用
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';


const dist = './dist/';
const name = 'polyfill';

export default {
    input: './src/polyfill.js',
    output: [
      {
        file: `${dist}${name}.cjs.js`,
        format: 'cjs'
      },
      {
        file: `${dist}${name}.esm.js`,
        format: 'esm'
      },
      {
        file: `${dist}${name}.umd.js`,
        format: 'umd'
      }
    ],
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
    ],
}

