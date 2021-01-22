/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-01-21 14:13:54
 * @LastEditTime: 2021-01-22 14:46:21
 */
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';

const dist = './dist/';
const name = 'preset';

export default {
  input: './preset.env.js',
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
  plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: '> 1%, IE 11, not op_mini all, not dead',
                node: 8
              },
              useBuiltIns: 'usage'
            }
          ]
        ]
      }),
      commonjs(),
      // terser()
  ]
};