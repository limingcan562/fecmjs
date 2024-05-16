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
                    file: pkg.module,
                    format: 'esm',
                    banner: Data.bannerData
                },
            ],
            proOutput: [
                {
                    file: getDirSrc(`${Data.compressedFiles}/fecmjs.min.js`),
                    format: 'umd',
                    name: 'fecmjs',
                    banner: Data.bannerData,
                    exports: 'named',
                },
            ]
        },
    ]
}