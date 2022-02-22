import pkg from '../package.json';

export default {
    // banner 数据
    bannerData: 
    `/**!
    * fecmjs: - v${pkg.version}
    * ${pkg.repository.url.split('+')[1]}
    * @author: ${pkg.author}
    * @date: ${new Date().getFullYear()}.${parseInt(new Date().getMonth()+1)}.${new Date().getDate()}
    * @contact: leemimgcan@gmail.com
    */`,

    // 存放压缩文件的文件夹
    compressedFiles: 'dist',

    // 存放插件的文件夹
    pluginFiles: 'plugin'
}