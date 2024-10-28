# fecmjs
前端常用方法集合

## 特点
1. 前端常用方法收集集合，方便平时开发（部分方法来自网上）
2. 模块化开发，方便引用
3. 支持`tree shaking`，以便减少打包体积

## 模块
此工具目前一共分四个模块  
1. [`Date`：关于日期的一些方法封装](#Date)
2. [`Device`：关于设备的一些方法封装](#Device)
3. [`Dom`：`Dom`操作一些方法封装](#Dom)
4. [`File`：关于`File`的一些方法封装](#File)
5. [`Format`: 关于格式化的一些方法封装](#Format)
6. [`Object`: 关于`Object`的一些方法封装](#Object)
7. [`Storage`: 关于`Storage`的一些方法封装](#Storage)
8. [`Url`: 关于`Url`的一些方法封装](#Url)
9. [`Validate`: 关于校验的一些方法封装](#Validate)
10.[ `Wechat`: 关于`Wechat`的一些方法封装](#Wechat)



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

## <a id="Date">`Date`</a>模块

### `getCurrentTimestamp` 
#### 获取当前时间戳

示例:
```javascript
import {getCurrentTimestamp} from 'femcjs';
console.log(getCurrentTimestamp()) // 1730129184412
```

### `getDateByFewdays` 
#### 根据时间，获取该时间的前几天或后几天日期

参数名 | 说明  | 默认值
------| ----| -----
`fewdays`| 要获取的距离目标日子的多少天  |  `0` 
`time`| 目标时间  |  `new Date().getTime()` 

示例:
```javascript
// 获取2024-10-28日的前30天
import {getCurrentTimestamp} from 'femcjs';
console.log(-30, '2024-10-28'); // 2024-09-28

// 获取2024-10-28日的后30天
console.log(30, '2024-10-28'); // 2024-11-27
```

### `getDateByTimestamp` 
### 根据传入的时间戳获取时间

参数名 | 说明  | 默认值
------| ----| -----
`timestamp`| 时间戳  | 
`needHMS`| 是否需要返回时分秒  | `false` 

示例:
```javascript
import {getDateByTimestamp} from 'femcjs';
console.log(fecmjs.getDateByTimestamp('1730129184412')); // 2024-10-28
console.log(fecmjs.getDateByTimestamp('1730129184412', true)); // 2024-10-28 23:26:24
```

### `getTimestamp` 
#### 获取时间戳  

#### 备注：
1. 默认返回当前时间的时间戳
2. 入参形式与`new Date()`方法相同

示例:
```javascript
import {getTimestamp} from 'femcjs';
console.log(getTimestamp()); // 1730131646512
console.log(getTimestamp('2024-10-29')); // 1730160000000
console.log(getTimestamp('2024-10-29 01:30')); // 1730136600000
```

## `Form` 模块

### `checkID(ID)` 验证身份证

参数名 | 说明  | 默认值
------| ----| -----
`ID`|  身份证（只支持大陆身份证） | `''` 

示例:
```javascript
const flag = Form.checkID('441522xxxxxxxxxxxx');
// 身份证格式正确
if (flag) {

} 
// 身份证格式错误
else {

}
```

### `checkEmail(email)` 验证邮箱

参数名 | 说明  | 默认值
------| ----| -----
`email`| 邮箱 | `''` 

示例:
```javascript
const flag = Form.checkEmail('xxxx@gmail.com');
// 邮箱格式正确
if (flag) {

} 
// 邮箱格式错误
else {

}
```

### `isPhoneNum(phone)` 验证手机号码

参数名 | 说明  | 默认值
------| ----| -----
`phone`| 手机号码（只支持大陆手机） | `''` 

示例:
```javascript
const flag = Form.isPhoneNum('1581xxxxx81');
// 手机号码格式正确
if (flag) {

} 
// 手机号码格式错误
else {

}
```


### `rangeRandom(min, max)` 生成范围随机整数

参数名 | 说明  | 默认值
------| ----| -----
`min`| 生成的最小数值 | `0` 
`max`| 生成的最大数值 | `0` 

示例:
```javascript
// 会生成1——10的随机数
const num = Form.isPhoneNum(1, 10);
```

### `removeEmoji(content)` 删除字符串中的表情

参数名 | 说明  | 默认值
------| ----| -----
`content`| 字符串内容 | `` 

示例:
```javascript
const str = Form.removeEmoji('hello,I am 🍁');
console.log(str); // hello,I am  
```

### `allChinese(val)` 判断是不是纯中文（不包括空格，特殊字符）

参数名 | 说明  | 默认值
------| ----| -----
`val`| 字符串内容 | `''` 

示例:
```javascript
const str = Form.allChinese('你好吗？');
console.log(str); // false，因为有特殊字符问号  
```

### `allEnglish(val)` 判断是不是纯英文（不包括空格，特殊字符）

参数名 | 说明  | 默认值
------| ----| -----
`val`| 字符串内容 | `''` 

示例:
```javascript
const str = Form.allEnglish('hello world');
console.log(str); // false，因为有空格 
```

### `hasSpecialCharacters(str)` 判断是不是有特殊字符

参数名 | 说明  | 默认值
------| ----| -----
`str`| 字符串内容 | `''` 

示例:
```javascript
const str = Form.allEnglish('？？！');
console.log(str); // true 
```

### `removeSpaceSrt(str)` 去掉字符串里面的空格

参数名 | 说明  | 默认值
------| ----| -----
`str`| 字符串内容 | `''` 

示例:
```javascript
const str = Form.allEnglish('hello, I am lMC');
console.log(str); // hello, IamlMC 
```

## `Info` 模块

属性名 |  说明 | 值说明
------| ---- | ----
`platform`| 是移动端还是`pc`端。 | `pc`：pc端<br>`mobile`：移动端
`screenType`|  手机屏幕类型 | `X`：全面屏<br> `normal`：普通屏幕（iphone5, 6, 7）<br> `short`：比普通屏幕还要小的屏幕
`sysTem`|  设备系统 | `ios`：`ios`系统 <br> `android`：`android`安卓系统 <br> `not moblie`：当前非移动端
`isWechat`|  当前是不是微信环境 | `true`：当前为微信环境 <br> `false`：当前为非微信环境

## `Ajax` 模块

### `Ajax`module导出的是一个类

> 相当于一个全局配置  

参数名 | 说明  | 默认值
------| ----| -----
`config.type`| 请求类型| `POST` 
`config.debug`| 是否开启接口打印信息（生产环境建议关闭）| `0` 
`config.debugStep`| 是否开启xhr连接4个步骤的打印，方便调试| `0` 
`config.headers`| 设置请求头。<br>`GET`请求时，值为：`application/x-www-form-urlencoded; charset=UTF-8`；<br>`POST`请求时，值为：`application/x-www-form-urlencoded; charset=UTF-8`；<br>当传递的`data`为`FormData`类型时，改设置会失效| `{}` 
`config.url`| 请求地址| `''` 
`config.data`| 请求参数| `{}` 
`config.timeout`| 接口超时时间| `3000` 
`config.success`| 状态码`200` 成功回调，`res`为接口返回的`result` | `res => {}` 
`config.fail`| 状态码非`200` 失败回调，`res`为接口返回的`result` | `res => {}` 
`config.always`| 成功失败都会触发的回调，`res`为接口返回的`result` | `res => {}` 
`config.timeoutFn`| 接口超时回调，`res`原生事件回调对象 | `res => {}` 
`config.error`| 接口出错回调，`res`原生事件回调对象 | `res => {}` 
`config.fieldName`| 后端返回的代表状态码的字段 | `ret` 
`config.successCode`| 后端返回的成功状态值 | `0` 
`config.responseDataName`| 后端数据字段名 | `data` 

示例:
```javascript
import {Ajax} from 'fecmjs';
const ajax = new Ajax({
    debug: 0,
    url: 'xxxxx',
    timeout: 2000
});
ajax.base({
    success: res => {
        console.log('状态码200 成功');
        if (ret.ret === 0) {
            // do someting
        } else {
            // fail
        }
    },
    fail: res => {
        console.log('状态码非200 失败');
    }
});
```

### `base(config)` 请求方法
入参与可传入默认的全局参数的里有的参数，再次传入，则会覆盖默认的全局参数

示例:
```javascript
ajax.base({
    type: 'get',
    debug: 0,
    url: 'xxxxx',
    timeout: 2000,
    success: res => {
        console.log('状态码200 成功');
        if (ret.ret === 0) {
            // do someting
        } else {
            // fail
        }
    },
    fail: res => {
        console.log('状态码非200 失败');
    }
});
```

### `rebuild(config)` 封装`base`方法
- 此方法是根据后端返回的数据格式，用`base`方法再次封装了一次。所以要用时，需要在`new Ajax()`时配置`fieldName`，`successCode`，`failCode`，`responseDataName`。  
- 当状态码为`200`的时候，并且满足后端返回的成功状态，这时函数是成功的，返回一个`Promise`，`then`函数里面的参数，就是后台返回的数据
- 当状态码为`200`的时候，并且满足后端返回的非成功状态，或者调用接口时触发了，`timeFn`，`error`，都会触发`catch`函数
- 入参`config`只接受以下参数
  - `data`
  - `url`
  - `type`
  - `headers`
  - `timeout`
  - `debug`
  - `debugStep`

> 当进入到`catch`函数，可以根据`catch`函数的形参`err`来判断当前出错是什么类型

`catch`函数`err._type`（形参）的可能值：
 可能的值 | 值说明
---- | ----
`connect error` | 连接错误
`connect timeout` | 连接超时
`connect fail` | 连接失败
`interface fail` | 连接成功，接口返回非成功状态码
`other errors`| 其他错误，可能是自己的代码书写有误


示例：
```javascript
// 1. 假设后端成功返回的数据为格式为：
/**
 * @ret 为config.fieldName
 * @success 为config.successCode
 * @data 为config.responseDataName
 */
{
    ret: 'success',
    data: {
        name: 'lmc', 
        age: 27
    }
}

// 2. 初始化配置
const ajax = new Ajax({
    fieldName: 'ret',
    successCode: 'success',
    responseDataName: 'data'
});

// 3. 调用
ajax.rebuild({
    type: 'get',
    debug: 0,
    url: 'xxxxx',
    timeout: 2000,
})
// 接口成功
.then(res => {
    // res ==> data: {name: 'lmc', age: 27}
})
// 如果ret !== 'success'，则失败（包含timeFn，error，都会触发catch）
.catch(err => {
    // connect error
    if (err._type === 'connect error') {

    }
    // connect timeout
    else if (err._type === 'connect timeout') {

    }
    // interface fail
    else if (err._type === 'interface fail') {
        
    }
    // other errors
    else if (err._type === 'other errors') {
        
    }
})
```

## 其他
在`dis/ajax.min.js`里，有单独抽出的`Ajax`类模块，也可以直接用

```javascript
import Ajax from 'fecmjs/plugin/ajax.esm';

const ajax = new Ajax({
    debug: 0,
    url: 'xxxxx',
    timeout: 2000
});

ajax.base({
    type: 'get',
    url: 'xxxx',
    data: {
        type: 5,
    },
    timeout: 1000,
    success: res => {
        console.log('succss', res);
    },
    fail: res => {
        console.log('fail', res);
    }
});
```

```html
<script src="./ajax.min.js"></script>
<script>
    const ajax = new Ajax({
        debug: 0,
        url: 'xxxxx',
        timeout: 2000
    });

    ajax.rebuild({
        type: 'get',
        url: 'xxxx',
        data: {
            type: 5,
        },
        timeout: 1000,
    })
    .then(res => {
        console.log('succss', res);
    })
    .catch(res => {
        console.log('fail', res);
    });
</script>
```







