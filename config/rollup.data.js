import {version, name, author, repository} from '../package.json';

// banner 数据
const bannerData =
`/**!
* ${name}: - v${version}
* ${repository.url.split('+')[1]}
* @author: ${author}
* @date: ${new Date().getFullYear()}.${parseInt(new Date().getMonth()+1)}.${new Date().getDate()}
* @issues: https://github.com/limingcan562/fecmjs/issues
*/`;

export default {
    // banner 数据
    bannerData,

    // 存放压缩文件的文件夹
    compressedFiles: 'build',
}