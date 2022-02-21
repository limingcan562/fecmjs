import pkg from '../package.json';
import path from 'path';

// banner 数据
const bannerData =
`/**!
 * fecmjs: - v${pkg.version}
 * ${pkg.repository.url.split('+')[1]}
 * @author: ${pkg.author}
 * @date: ${new Date().getFullYear()}.${parseInt(new Date().getMonth()+1)}.${new Date().getDate()}
 * @contact: leemimgcan@gmail.com
 */`;

const getDirSrc = src => path.resolve(__dirname, '../', src);


export default {
    config: [
        {
            input: getDirSrc('src/index.js'),
            devOutput: [
                {
                    file: pkg.main,
                    format: 'cjs',
                    banner: bannerData
                },
                {
                    file: pkg.module,
                    format: 'esm',
                    banner: bannerData
                },
                {
                    file: getDirSrc('dist/fecmjs.js'),
                    format: 'umd',
                    name: 'Fecmjs',
                    banner: bannerData
                },
            ],
            proOutput: [
                {
                    file: getDirSrc('dist/fecmjs.min.js'),
                    format: 'umd',
                    name: 'Fecmjs',
                    banner: bannerData
                },
            ]
        },
        
        {
            input: getDirSrc('src/plugin/ajax.js'),
            devOutput: [
                {
                    file: getDirSrc('libs/plugin/ajax.esm.js'),
                    format: 'esm',
                },
                {
                    file: getDirSrc('dist/ajax.js'),
                    format: 'umd',
                    name: 'ajax'
                },
            ],
            proOutput: [
                {
                    file: getDirSrc('dist/ajax.min.js'),
                    format: 'umd',
                    name: 'ajax'
                },
            ]
        },
    ]
    
}