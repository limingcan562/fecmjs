# fecmjs
前端常用方法集合

## 特点
1. 前端常用方法收集集合，方便平时开发（部分方法来自网上）
2. 模块化开发，方便引用
3. 支持`tree shaking`，以便减少打包体积

## 模块
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

## <a id="Date">Date模块</a>

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
