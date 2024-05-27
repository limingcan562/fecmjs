import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
// import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

// let 
// IS_PRO = process.env.NODE_ENV.includes('pro') ? true : false,
// pluginsConfig = [
//     // 处理css
//     postcss({
//         minimize: true
//     }),

//     // 显示文件大小
//     filesize(),
//     // 编译es6
//     babel({
//         // babelHelpers: 'runtime',
//         exclude: 'node_modules/**'
//     }),
//     commonjs(),
//     resolve()
// ],
// compressPlugin = terser({
//     format: {
//         comments: RegExp(`${pkg.name}`)
//     }
// }),
// finalConfig = [];

// IS_PRO && pluginsConfig.push(compressPlugin);

// // 开始配置
// Base.config.forEach(item => {
//     const _config = {
//         input: item.input,
//         output: !IS_PRO ? item.devOutput : item.proOutput,
//         plugins: pluginsConfig
//     };
//     finalConfig.push(_config);

//     // console.log(!IS_PRO ? item.devOutput : item.proOutput);
// });

// // 输出配置
// export default finalConfig;

const bannerData =
`/**!
* ${pkg.name}: v${pkg.version}
* @author: ${pkg.author}
* @date: ${new Date().getFullYear()}.${parseInt(new Date().getMonth()+1)}.${new Date().getDate()}
* @issues: https://github.com/limingcan562/fecmjs/issues
*/`;

const defaultOutBase = {compact: true, banner: bannerData, name: pkg.name};
const cjOutBase = {...defaultOutBase, format: "cjs", exports: "named"};
const esmOutBase = {...defaultOutBase, format: "es", exports: "named"};
const umdOutBase = {...defaultOutBase, format: "umd", };
const minOutBase = {...defaultOutBase, plugins: [ terser() ], sourcemap: true};

export default [
    {
        input: "./src/index.js",
        output: [
            // {
            //     ...cjOutBase,
            //     file: `dist/${pkg.name}.cjs.js`,
            // },
            // {
            //     ...esmOutBase,
            //     file: `dist/${pkg.name}.esm.js`
            // },
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
]