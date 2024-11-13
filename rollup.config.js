import babel from '@rollup/plugin-babel';
// import path from 'path';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const bannerData =
`/**!
* ${pkg.name}
*
* @version: ${pkg.version}
* @date: ${new Date().getFullYear()}.${parseInt(new Date().getMonth()+1)}.${new Date().getDate()}
* @copyright: ${pkg.author}
* @issues: ${pkg.bugs.url}
*/`;

const defaultOutBase = {compact: true, banner: bannerData, name: pkg.name};
const cjOutBase = {...defaultOutBase, format: "cjs", exports: "named"};
const esmOutBase = {...defaultOutBase, format: "es", exports: "named"};
const umdOutBase = {...defaultOutBase, format: "umd", esModule: false, /* , exports: "named" */};
const minOutBase = {...defaultOutBase, plugins: [ terser() ], sourcemap: true};

export default [
    {
        input: './src/index.js',
        output: [
            {
                ...cjOutBase,
                file: `dist/${pkg.name}.cjs.js`
            },
            {
                ...esmOutBase,
                file: `dist/${pkg.name}.esm.js`
            },
            {
                ...umdOutBase,
                file: `dist/${pkg.name}.js`
            },
            {
                ...umdOutBase,
                ...minOutBase,
                file: `dist/${pkg.name}.min.js`
            },
        ],
        plugins: [
            filesize(),
            babel({
                exclude: "node_modules/**",
                babelHelpers: 'bundled',
            }),

            // 如果源码使用commonjs规范编写，则需要开启
            // resolve(), 
            // commonjs()
        ]
    },

    {
        input: './src/styles/vue-ani.less',
        output: {
            file: `dist/styles/vue-ani.css`
        },
        plugins: [
            postcss({
                extract: true
            })
        ]
    },
    {
        input: './src/styles/css-ani.less',
        output: {
            file: `dist/styles/css-ani.css`
        },
        plugins: [
            postcss({
                extract: true
            })
        ]
    }
]