import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import Base from './rollup.base';
import pkg from '../package.json';

console.log(pkg, 1);

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


export default [
    {
        input: "./src/index.js",
        output: {
            file: `build/${pkg.name}.cjs.js`, // 导出文件
            format: 'cjs',
            name: "fecmj",
            exports: 'named',
        },
        plugins: [
            commonjs(),
            resolve(),
            filesize(),
            babel({
                exclude: "node_modules/**",
                babelHelpers: 'bundled',
            }),
        ],
    },
    {
        input: "./src/index.js",
        output: {
            file: `build/${pkg.name}.esm.js`, // 导出文件
            format: 'esm',
            name: "fecmj",
            exports: 'named',
        },
        plugins: [
            commonjs(),
            resolve(),
            filesize(),
            babel({
                exclude: "node_modules/**",
                babelHelpers: 'bundled',
            }),
        ],
    },

    {
        input: "./src/index.js",
        output: {
            file: `dist/${pkg.name}.js`, // 导出文件
            format: "umd", // 打包文件支持的形式
            name: pkg.name,
            exports: 'named',
        },
        plugins: [
            commonjs(),
            resolve(),
            babel({
                exclude: "node_modules/**",
                babelHelpers: 'bundled',
            }),
        ],
    },
    {
        input: "./src/index.js",
        output: {
            file: `dist/${pkg.name}.min.js`, // 导出文件
            format: "umd", // 打包文件支持的形式
            name: pkg.name,
            exports: 'named',
        },
        plugins: [
            commonjs(),
            resolve(),
            filesize(),
            babel({
                exclude: "node_modules/**",
                babelHelpers: 'bundled',
            }),
            terser()
        ],
    },
    
]