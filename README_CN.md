# fecmjs

## 特点
1. 前端常用方法收集集合，方便平时开发
2. 适用于移动端，`PC`端，移动端优先（部分方法来自网上）
3. 模块化开发，方便引用
4. 支持`tree shaking`，以便减少打包体积

## 介绍
此工具目前一共分三个模块  
1. `Common`：里面包含移动端开发时，经常会用到的一些方法
2. `Form`：里面包含通用的表单验证方法，用户输入信息的字符判断等方法
3. `Info`：里面包含当前手机设备的一些信息

## 用法
- 使用`npm`方式  

```npm 
npm i fecmjs
```
```javascript 
// 1. 使用所有模块
import * as Fecmjs from 'fecmjs';
const {Form, Normal, Info} = Fecmjs;
const flag = Form.checkEmail('limingcan562@163.com');
console.log(flag); // true
```

```javascript 
// 2. 当你只需要用部分功能的时候，可以引入部分模块（推荐）
import {Form, Normal, Info} from 'fecmjs';
const flag = Form.checkEmail('limingcan562@163.com');
console.log(flag); // true
```

- 使用`<script></script>`方式引入  

```html
<script src="https://cdn.xxxx/fecmjs.min.js"></script>
<script>
    var Form = Fecmjs.Form;
    var flag = Form.checkEmail('limingcan562@163.com');
    console.log(flag); // true
</script>
``` 

## `Common` 模块

### `loadImage(src)` 加载图片

参数名 | 说明  | 默认值
------| ----| -----
`src`| 要加载的图片地址  |  `''` 

示例:
```javascript
Common
.loadImage('http://xxxx')
// 加载成功
.then(img => {
    
})
// 加载失败
.catch(err => {
    
});
```

### `wait(delay)` 延时

参数名 | 说明  | 默认值
------| ----| -----
`delay`| 延时的时间  |  `500` 

示例:
```javascript
Common
.wait(1000)
// 延时1s后执行
.then( => {
    
});
```

### `showTips({})` 显示提示弹窗

参数名 | 说明  | 默认值
------| ----| -----
`autoClose`| 是否自动关闭  | `true` 
`delay`| 多少秒后自动关闭  | `1000` 
`text`| 提示文案  | `loading...` 
`closedFn`| 关闭后的回调  | `() => {}` 

示例:
```javascript
Common
.showTips({
    autoClose: false,
    delay: 2000,
    text: 'please waiting',
    closedFn: () => {
        console.log('closed');
    }
});
```

### `closeTips()` 关闭提示弹窗  

说明：适用于，当`showTips`的`autoClose: false`的情况 

示例:
```javascript
Common.closeTips();
```

### `isPartOfElementInViewport(domEle)` 元素是否出现在可视区

参数名 | 说明  | 默认值
------| ----| -----
`domEle`| `dom`元素  | `{}` 

示例:
```javascript
const dom = document.getElementById('ele');
const isShow = Common.isPartOfElementInViewport(dom);
// 元素在可视区内
if (isShow) {

} 
// 元素不在可视区内
else {

}
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










