import Data from './rollup.data';
import pkg from '../package.json';
import path from 'path';

// 获取当前路径方法
const getDirSrc = src => path.resolve(__dirname, '../', src);

export default {
    config: [
        {
            input: getDirSrc('src/index.js'),
            devOutput: [
                {
                    file: pkg.main,
                    format: 'cjs',
                    banner: Data.bannerData
                },
                {
                    file: pkg.module,
                    format: 'esm',
                    banner: Data.bannerData
                },
                {
                    file: getDirSrc(`${Data.compressedFiles}/fecmjs.js`),
                    format: 'umd',
                    name: 'Fecmjs',
                    banner: Data.bannerData
                },
            ],
            proOutput: [
                {
                    file: getDirSrc(`${Data.compressedFiles}/fecmjs.min.js`),
                    format: 'umd',
                    name: 'Fecmjs',
                    banner: Data.bannerData
                },
            ]
        },
        
        {
            input: getDirSrc('src/plugin/ajax.js'),
            devOutput: [
                {
                    file: getDirSrc(`${Data.pluginFiles}/ajax.esm.js`),
                    format: 'esm',
                },
                {
                    file: getDirSrc(`${Data.compressedFiles}/ajax.js`),
                    format: 'umd',
                    name: 'ajax'
                },
            ],
            proOutput: [
                {
                    file: getDirSrc(`${Data.compressedFiles}/ajax.min.js`),
                    format: 'umd',
                    name: 'ajax'
                },
            ]
        },
    ]
    
}