
// 解析 node_modules 中的模块
import resolve from '@rollup/plugin-node-resolve';
// 转换 CJS -> ESM, 通常配合上面一个插件使用
import commonjs from '@rollup/plugin-commonjs';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
// import { terser } from 'rollup-plugin-terser';

const dist = './dist/';
const name = 'runtime';

export default {
  input: './src/runtime.js',
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
      format: 'umd',
      name: name
    }
  ],
  plugins: [
    // commonjs(),
    babel({
      babelHelpers: 'runtime',
      presets: [[
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: '> 1%, IE 11, not op_mini all, not dead',
            node: 8
          },
          corejs: 3,
          useBuiltIns: 'usage'
        }
      ]],
      plugins: [
        ['@babel/plugin-transform-runtime',
          {
            useESModules: true,
            corejs: {
              version: 3,
              proposals: true
            }
          }
        ]
      ]
    }),
  ],
};