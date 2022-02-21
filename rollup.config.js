import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

let 
timeDate = new Date(),
IS_PRO = process.env.NODE_ENV.includes('pro') ? true : false,
input = path.resolve(__dirname, './', 'src/index.js'),
output = [],
plugins = [
    // 处理css
    postcss({
        minimize: true
    }),

    // 显示文件大小
    filesize(),
    // 编译es6
    babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve()
],
bannerStr = `
/**!
 * fecmjs: - v${pkg.version}
 * @repository: ${pkg.repository.url.split('+')[1]}
 * @author': ${pkg.author}
 * @date: ${timeDate.getFullYear()}.${parseInt(timeDate.getMonth()+1)}.${timeDate.getDate()}
 * @contact: leemimgcan@gmail.com
 */`,
proDirName = 'dist';


// 非生产环境
if (!IS_PRO) {
    output = [
        {
            file: pkg.main,
            format: 'cjs',
            banner: bannerStr
        },
        {
            file: pkg.module,
            format: 'esm',
            banner: bannerStr
        },
        {
            file: `./${proDirName}/fecmjs.js`,
            format: 'umd',
            name: 'Fecmjs',
            banner: bannerStr
        }
    ];
}
else {
    output = {
        file: `${proDirName}/${pkg.name}.min.js`,
        format: 'umd',
        name: 'Fecmjs',
        banner: bannerStr
    };

    plugins.push(
        terser({
            format: {
                comments: RegExp(`${pkg.name}`)
            }
        })
    );
}


// 输出配置
export default {
    input,
    output,
    plugins
}