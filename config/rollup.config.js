import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import {uglify} from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import pkg from '../package.json';

let 
IS_PRO = process.env.NODE_ENV.includes('pro') ? true : false,
output = [];


if (!IS_PRO) {
    output = [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'esm',
        }
    ];
} 
else {
    const disDirName = 'dist';
    output = [
        {
            file: `${disDirName}/${pkg.name}.min.js`,
            format: 'umd',
            name: 'Fecmjs'
        }
    ];
}

export default {
    input: path.resolve(__dirname, '../', 'src/index.js'),
    output,
    plugins: [
        // 处理css
        postcss({
            minimize: true
        }),

        // 显示文件大小
        filesize(),
        // 编译es6
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**'
        }),
        commonjs(),
        resolve(),
        IS_PRO && uglify()
    ]
}