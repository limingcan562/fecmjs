import pkg from '../package.json';

// banner 数据
const bannerData =
`/**!
* fecmjs: - v${pkg.version}
* ${pkg.repository.url.split('+')[1]}
* @author: ${pkg.author}
* @date: ${new Date().getFullYear()}.${parseInt(new Date().getMonth()+1)}.${new Date().getDate()}
* @contact: leemimgcan@gmail.com
*/`;

export default {
    // banner 数据
    bannerData,

    // 存放压缩文件的文件夹
    compressedFiles: 'dist',

    // 存放插件的文件夹
    pluginFiles: 'plugin'
}