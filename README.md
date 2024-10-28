# fecmjs
Front end common method collection

English | [中文](README_CN.md)

## Features
1. Front-end commonly used methods collection collection , to facilitate the usual development ( part of the method from the Internet )
2. Modular development, easy to reference
3. support `tree shaking`, in order to reduce the size of the package

## Modules
This tool is currently divided into four modules  
1. [`Date`: some methods for Date wrapping](#Date)
2. [`Device`: some methods for devices](#Device)
3. [`Dom`: some methods for `Dom` operations](#Dom)
4. [`File`: Wrapping some methods around `File`](#File)
5. [`Format`: some method wrappers for formatting](#Format)
6. [`Object`: Wrapping some methods around `object`](#Object)
7. [`Storage`: Wrappers for `Storage` methods](#Storage)
8. [`Url`: Some methods around `Url`](#Url)
9. [`Validate`: Wrapping some methods around validation](#Validate)
10. [`Wechat`: Some method wrappers for `Wechat`](#Wechat)

Translated with DeepL.com (free version)

## Usage
- use the `npm` method

````npm
npm i fecmjs
````

````javascript
// 1. Use all modules
import * as Fecmjs from 'fecmjs';
const flag = Fecmjs.isEmail('limingcan562@163.com');
console.log(flag); // true
````

````javascript
// 2. When you only need to use some functions, you can import some modules (recommended)
import {isEmail} from 'fecmjs';
const flag = isEmail('limingcan562@163.com');
console.log(flag); // true
````

- Use `<script></script>` to import

```html
<script src="https://cdn.xxxx/fecmjs.min.js"></script>
<script>
    var flag = fecmjs.checkEmail('limingcan562@163.com');
    console.log(flag); // true
</script>
````

## <a id="Date">`Date`</a>module

### `getCurrentTimestamp` 
#### Get current timestamp

example: 
```javascript
import {getCurrentTimestamp} from 'femcjs';
console.log(getCurrentTimestamp()) // 1730129184412
```

### `getDateByFewdays` 
#### Depending on the time of day, get the date a few days before or a few days after that time

parameter name | description | default value
------| ----| -----
`fewdays`| The number of days to the target day to be acquired  |  `0` 
`time`| target time  |  `new Date().getTime()` 

Example:
````javascript
// Get the first 30 days of 2024-10-28
import {getCurrentTimestamp} from 'femcjs';
console.log(-30, '2024-10-28'); // 2024-09-28

// Get the last 30 days of 2024-10-28
console.log(30, '2024-10-28'); // 2024-11-27
````

### `getDateByTimestamp` 
### Get the time based on the incoming timestamp

parameter name | description | default value
------| ----| -----
`timestamp`| timestamp  | 
`needHMS`| Whether you need to return hours, minutes and seconds  | `false` 

Example:
```javascript
import {getDateByTimestamp} from 'femcjs';
console.log(fecmjs.getDateByTimestamp('1730129184412')); // 2024-10-28
console.log(fecmjs.getDateByTimestamp('1730129184412', true)); // 2024-10-28 23:26:24
```

### `getTimestamp` 
#### Get timestamp  

#### 备注：
1. Returns the timestamp of the current time by default
2. The form of the input parameter is the same as the `new Date()` method.

Example:
```javascript
import {getTimestamp} from 'femcjs';
console.log(getTimestamp()); // 1730131646512
console.log(getTimestamp('2024-10-29')); // 1730160000000
console.log(getTimestamp('2024-10-29 01:30')); // 1730136600000
```