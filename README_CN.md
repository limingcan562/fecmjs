# fecmjs
前端常用方法集合

## 特点
1. 前端常用方法收集集合，方便平时开发（部分方法来自网上）
2. 模块化开发，方便引用
3. 支持`tree shaking`，以便减少打包体积

## <a id="Module">模块</a>
- [`Date`：关于日期的一些方法封装](#Date)
- [`Dom`：`Dom`操作一些方法封装](#Dom)
- [`Device`：关于设备的一些方法封装](#Device)
- [`File`：关于`File`的一些方法封装](#File)
- [`Format`: 关于格式化的一些方法封装](#Format)
- [`Object`: 关于`Object`的一些方法封装](#Object)
- [`Storage`: 关于`Storage`的一些方法封装](#Storage)
- [`Url`: 关于`Url`的一些方法封装](#Url)
- [`Validate`: 关于校验的一些方法封装](#Validate)
- [`Animation`: 关于`css`，`vue`可使用的动画](#Animation)




## 用法
- 使用`npm`方式  

```npm 
npm i fecmjs
```
```javascript 
// 1. 使用所有模块
import * as Fecmjs from 'fecmjs';
const flag = Fecmjs.isEmail('limingcan562@163.com');
console.log(flag); // true
```

```javascript 
// 2. 当你只需要用部分功能的时候，可以引入部分模块（推荐）
import {isEmail} from 'fecmjs';
const flag = isEmail('limingcan562@163.com');
console.log(flag); // true
```

- 使用`<script></script>`方式引入  

```html
<script src="https://cdn.xxxx/fecmjs.min.js"></script>
<script>
    var flag = fecmjs.checkEmail('limingcan562@163.com');
    console.log(flag); // true
</script>
``` 

## <a id="Date">`Date`</a>

- ### `getCurrentTimestamp` 

    > #### 获取当前时间戳

    示例:
    ```javascript
    import {getCurrentTimestamp} from 'femcjs';
    console.log(getCurrentTimestamp()) // 1730129184412
    ```

- ### `getDateByFewdays` 

    > #### 根据时间，获取该时间的前几天或后几天日期

    参数名 | 说明  | 默认值
    ------| ----| -----
    `fewdays`| 要获取的距离目标日子的多少天  |  `0` 
    `time`| 目标时间  |  `new Date().getTime()` 

    ##### 备注：
    1. 当`fewdays`为正整数，则获取目标日期的后几天
    2. 当`fewdays`为负整数，则获取目标日期的前几天

    示例:
    ```javascript
    // 获取2024-10-28日的前30天
    import {getCurrentTimestamp} from 'femcjs';
    console.log(getCurrentTimestamp(-30, '2024-10-28')); // 2024-09-28

    // 获取2024-10-28日的后30天
    console.log(getCurrentTimestamp(30, '2024-10-28')); // 2024-11-27
    ```

- ### `getDateByTimestamp` 
    > #### 根据传入的时间戳获取时间

    参数名 | 说明  | 默认值
    ------| ----| -----
    `timestamp`| 时间戳  | 
    `needHMS`| 是否需要返回时分秒  | `false` 

    示例:
    ```javascript
    import {getDateByTimestamp} from 'femcjs';
    console.log(getDateByTimestamp('1730129184412')); // 2024-10-28
    console.log(getDateByTimestamp('1730129184412', true)); // 2024-10-28 23:26:24
    ```

- ### `getTimestampByDate` 

    > #### 根据具体日期获取时间戳  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `time`| 具体日期。格式与`new Date()`传入的格式一样  | `new Date().getTime()`

    ##### 备注：
    1. 默认返回当前时间的时间戳
    2. 入参形式与`new Date()`方法相同

    示例:
    ```javascript
    import {getTimestampByDate} from 'femcjs';
    console.log(getTimestampByDate()); // 1730131646512
    console.log(getTimestampByDate('2024-10-29')); // 1730160000000
    console.log(getTimestampByDate('2024-10-29 01:30')); // 1730136600000
    ```

## <a id="Dom">`Dom`</a>

- ### `$` 

    > #### 返回`Dom`对象

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| `css`选择器 | 

    ##### 备注：
    1. 如果有多个`Dom`，则返回数组
    2. 如果只有一个`Dom`，则返回单个`Dom`


- ### `addClass` 

    > #### 给某个`Dom`对象增加类名

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| `css`选择器或者是`dom`对象 |
    `nameList`| 要添加的类名 | 

    ##### 备注：
    1. 想添加多个类名时，`nameList`可传入数组
    2. 想添加单个类名时，`nameList`可传入字符串

    示例:
    ```javascript
    import {addClass} from 'femcjs';
    addClass('#dom', ['name1', 'name2', 'nam3']);
    ```

- ### `getClass` 

    > #### 获取某个`Dom`对象类名

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| `css`选择器或者是`dom`对象 |

    ##### 备注：
    返回该对象类名组成的数组

- ### `removeClass` 

    > #### 删除某个`Dom`对象一个或多个类名

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| `css`选择器或者是`dom`对象 |
    `nameList`| 要删除的类名 | 

    ##### 备注：
    1. 想删除多个类名时，`nameList`可传入数组
    2. 想删除单个类名时，`nameList`可传入字符串

- ### `setStyle` 

    > #### 设置某个`Dom`对象的样式

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| `css`选择器或者是`dom`对象 |
    `style`| 要设置的样式 | 

    ##### 备注：
    1. 想设置多个样式时，`style`可传入对象
    2. 想设置单个样式时，`style`可传入字符串

    示例:
    ```javascript
    import {setStyle} from 'femcjs';
    setStyle('#dom', {color: 'red', backgroundColor: '#000'}); // 设置多个样式
    setStyle('#dom', 'color: red'); // 设置单个样式
    ```

- ### `getDomInfo` 

    > #### 获取某个`dom`的信息，或者获取某组`NodeList`的信息

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| `css`选择器或者是`dom`对象，或者是一组`NodeList` |

    ##### 备注：
    1. 如果`selectName`是一组`NodeList`，则返回这个`NodeList`组成的信息数组

    示例:
    ```javascript
    import {setStyle} from 'femcjs';
    console.log(getDomInfo($('li'))); // [DOMRect, DOMRect]
    ```

- ### `isExceedParentHeight` 

    > #### 判断子元素是否超出父元素高度

    参数名 | 说明  | 默认值
    ------| ----| -----
    `parentSelectName`| 父元素类名选择器或者是`dom`对象 |
    `childSelectName`| 子元素类名选择器或者是`dom`对象 | 

    ##### 备注：
    父元素得设置高度

- ### `isShowOnVisualArea` 

    > #### 判断某个元素是否出现在可视区

    参数名 | 说明  | 默认值
    ------| ----| -----
    `selectName`| 元素类名选择器或者是`dom`对象 |

- ### `setPageNoScroll` 

    > #### 设置页面不能滚动

- ### `restorePageScroll` 

    > #### 恢复页面滚动

## <a id="Device">`Device`</a>

- ### `isAndroid` 

    > #### 当前是不是安卓系统

- ### `isIos` 

    > #### 当前是不是ios系统

- ### `isIpad` 

    > #### 当前是不是ipad设备

- ### `isIphone` 

    > #### 当前是不是iphone设备

- ### `isMoblie` 

    > #### 当前是否为移动端

- ### `isPc` 

    > #### 当前是否为pc端

- ### `isWechat` 

    > #### 当前是否为微信环境

## <a id="File">`File`</a>
- ### `getFileName` 

    > #### 获取上传的`file`名字

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| `file`对象 | 

- ### `getFileSuffix` 

    > #### 获取上传的`file`文件后缀

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| `file`对象 | 

- ### `getFilePreviewSrc` 

    > #### 获取上传的`file`预览地址

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| `file`对象 | 

    ##### 备注：
    1. 主要用于预览上传的图片
    2. 注意使用`revokeObjectURL`方法回收内存

    示例:
    ```javascript
    import {getFilePreviewSrc, $} from 'femcjs';
    const previewSrc = getFilePreviewSrc(file);
    $('#preview_img').src = previewSrc;
    ```

- ### `isFileAudioType` 

    > #### 上传的文件是不是音频类型

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| `file`对象 | 

- ### `isFilePicType` 

    > #### 上传的文件是不是图片类型

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| `file`对象 | 

- ### `isFileVideoType` 

    > #### 上传的文件是不是视频类型

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| `file`对象 | 

- ### `isContentSrtFormat` 

    > #### 内容格式是不是srt文件格式

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本 | 



## <a id="Object">`Object`</a>
- ### `emptyObj` 

    > #### 当前对象是否没有值

- ### `isArr` 

    > #### 当前是否为`array`类型

- ### `isDate` 

    > #### 当前是否为`Date`类型

- ### `isFn` 

    > #### 当前是否为`function`类型

    
- ### `isNull` 

    > #### 当前是否为`null`

- ### `isNum` 

    > #### 当前是否为`number`类型

- ### `isObj` 

    > #### 当前是否为`object`类型

- ### `isStr` 

    > #### 当前是否为`string`类型

- ### `isUndefined` 

    > #### 当前是否为`Undefined`类型

- ### `isHtmlObj` 

    > #### 当前是否为`htmlDom`对象

- ### `isNodeList` 

    > #### 当前是否为`NodeList`对象


## <a id="Storage">`Storage`</a>
- ### `getLocalStorage` 

    > #### 获取本地储存某个值

    参数名 | 说明  | 默认值
    ------| ----| -----
    `key`| 要获取的key值 | 

    ##### 备注：
    1. 如果获取的`key`值是对象，则直接返回`key`值对应的对象
    2. 否则返回`key`值对应的字符串

    示例:
    ```javascript
    // 如果localStorage存储了info: {"name":"lee","age":29}, name: test
    import {getLocalStorage} from 'femcjs';
    console.log(getLocalStorage(info)); // {name: lee, age} 对象
    console.log(getLocalStorage(name)); // test 字符串
    ```

- ### `setLocalStorage` 

    > #### 设置本地储存某个值

    参数名 | 说明  | 默认值
    ------| ----| -----
    `key`| 要设置的`key`值 | 
    `val`| 要设置的`key`对应的值 | 


    ##### 备注：
    `val`可以为对象，也可以为字符串

    示例:
    ```javascript
    import {setLocalStorage} from 'femcjs';
    setLocalStorage('info', {name: 'lee', age: 29}); // info ->  {"name":"lee","age":29}
    ```


- ### `removeLocalStorage` 

    > #### 删除本地储存某个或多个值

    参数名 | 说明  | 默认值
    ------| ----| -----
    `key`| 要删除的`key`值 | 

    ##### 备注：
    1. 如果`key`为数组，则可以删除多个对应的`key`值
    2. 如果`key`为字符串，则删除单个值

    示例:
    ```javascript
    import {removeLocalStorage} from 'femcjs';
    console.log(removeLocalStorage(['info', 'test'])); // 将删除info,test对应的值
    ```

- ### `clearLocalStorage` 

    > #### 清除本地存储  

    示例:
    ```javascript
    import {clearLocalStorage} from 'femcjs';
    console.log(clearLocalStorage());
    ```


## <a id="Url">`Url`</a>

- ### `getUrlValue` 

    > #### 获取`url`的参数的值  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `key`| 要获取的值的`key`  | `''`
    `url`| 要获取的`url`链接  | `window.location.href` 

    ##### 备注：
    1. 当`key`为空，会返回`url`所有的参数对应值组成的对象
    2. 当`key`为某个值，则返回`url`这个`key`的值

    示例:
    ```javascript
    import {getUrlValue} from 'femcjs';
    const url = 'http://localhost:5501/test/?name=lee&age=29'
    console.log(getUrlValue('', url)); // {name: 'lmc', age: 29}
    console.log(getUrlValue('name', url)); // 'lmc'
    ```

- ### `setUrlWithNorefresh` 

    > #### 设置url，并且不刷新页面

    参数名 | 说明  | 默认值
    ------| ----| -----
    `value`| 要设置的值  | `{}`

    示例:
    ```javascript
    import {setUrlWithNorefresh} from 'femcjs';
    console.log(setUrlWithNorefresh({name: 'lmc', age: 29}); // http://localhost:5501/test/?name=lmc&age=29
    ```


## <a id="validate">`validate`</a>
- ### `containCN` 

    > #### 是否包含中文  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本  | 

    ##### 备注：
    只要有中文，就返回`true`

- ### `containEN` 

    > #### 是否包含英文  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本  | 

    ##### 备注：
    只要有英文，就返回`true`

- ### `containCNSpecialChar` 

    > #### 是否包含中文特殊字符  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本  | 

    ##### 备注：
    只要有中文特殊字符，就返回`true`

- ### `containENSpecialChar` 

    > #### 是否包含英文特殊字符  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本  |

    ##### 备注：
    只要有英文特殊字符，就返回`true`

- ### `isAllCN` 

    > #### 是否全是中文  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本  |

    ##### 备注：
    是否为纯中文（含中文特殊字符和数字；不含英文和特殊英文字符）

- ### `isAllEN` 

    > #### 是否全是英文  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `textStr`| 内容文本  |

    ##### 备注：
    是否纯英文 （含英文特殊字符和数字；不含英文和特殊英文字符）

- ### `isEmail` 

    > #### 是不是邮件格式  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `email`| 邮件  |

- ### `isPhoneNum` 

    > #### 是不是手机号格式

    参数名 | 说明  | 默认值
    ------| ----| -----
    `phoneNumber`| 手机号码  |

    ##### 备注：
    验证中国大陆手机号

- ### `isIntlPhone` 

    > #### 是不是国际手机号码

    参数名 | 说明  | 默认值
    ------| ----| -----
    `phoneNumber`| 国际手机号码  |

## <a id="Format">`Format`</a>
- ### `formatFileSize` 

    > #### 格式化文件大小  

    参数名 | 说明  | 默认值
    ------| ----| -----
    `file`| 文件对象  | `{}`

    示例:
    ```javascript
    import {formatFileSize} from 'femcjs';
    console.log(formatFileSize(file)); // 1.37KB
    ```

- ### `formatVideoDuration` 

    > #### 格式化视频时长

    参数名 | 说明  | 默认值
    ------| ----| -----
    `totalSeconds`| 视频时长  | `0`

    示例:
    ```javascript
    import {formatVideoDuration} from 'femcjs';
    console.log(formatVideoDuration(3600)); // 01:00:00
    ```

## <a id="Animation">`Animation`</a>
- ### `vue`动画  

    #### 支持的动画有：
    - `fade-in`：淡入
    - `fade-right-to-left`：从右往左淡入
    - `fade-top-to-bottom`：从上往下淡入
    - `fade-zoom-in`：放大淡入


    示例:
    ```html
    <Transition name="fade-right-to-left">
        <components v-if="show" />
    </Transition>
    ```
- ### `css`动画

    ##### 备注：
    具体可查看`dist/styles/css-ani.css`
   

    示例:
    ```html
    <!-- 该元素将会延迟500ms，以750ms，进行循环闪烁动画 -->
    <div class="shine time750 delay500"></div>
    ```