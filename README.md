# fecmjs
Front end common method collection

English | [中文](README_CN.md)

## Features
1. Front-end commonly used methods collection collection , to facilitate the usual development ( part of the method from the Internet )
2. Modular development, easy to reference
3. support `tree shaking`, in order to reduce the size of the package

## Modules
- [`Date`: some methods for Date wrapping](#Date)
- [`Device`: some methods for devices](#Device)
- [`Dom`: some methods for `Dom` operations](#Dom)
- [`File`: Wrapping some methods around `File`](#File)
- [`Format`: some method wrappers for formatting](#Format)
- [`Object`: Wrapping some methods around `object`](#Object)
- [`Storage`: Wrappers for `Storage` methods](#Storage)
- [`Url`: Some methods around `Url`](#Url)
- [`Validate`: Wrapping some methods around validation](#Validate)
- [`Wechat`: Some method wrappers for `Wechat`](#Wechat)

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

## <a id="Date">`Date`</a>

- ### `getCurrentTimestamp` 
    #### Get current timestamp

    Example: 
    ```javascript
    import {getCurrentTimestamp} from 'femcjs';
    console.log(getCurrentTimestamp()) // 1730129184412
    ```

- ### `getDateByFewdays` 
    #### Depending on the time of day, get the date a few days before or a few days after that time

    parameter name | description | default value
    ------| ----| -----
    `fewdays`| The number of days to the target day to be acquired  |  `0` 
    `time`| target time  |  `new Date().getTime()` 

    ##### Note：
    1. When `fewdays` is a positive integer, get the next few days of the target date
    2. When `fewdays` is a negative integer, get the first few days of the target date

    Example:
    ````javascript
    // Get the first 30 days of 2024-10-28
    import {getCurrentTimestamp} from 'femcjs';
    console.log(-30, '2024-10-28'); // 2024-09-28

    // Get the last 30 days of 2024-10-28
    console.log(30, '2024-10-28'); // 2024-11-27
    ````

- ### `getDateByTimestamp` 
    #### Get the time based on the incoming timestamp

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

- ### `getTimestamp` 
    #### Get timestamp  

    #### Note:
    1. Returns the timestamp of the current time by default
    2. The form of the input parameter is the same as the `new Date()` method.

    Example:
    ```javascript
    import {getTimestamp} from 'femcjs';
    console.log(getTimestamp()); // 1730131646512
    console.log(getTimestamp('2024-10-29')); // 1730160000000
    console.log(getTimestamp('2024-10-29 01:30')); // 1730136600000
    ```

## <a id="Device">`Device`</a>

- ### `isAndroid` 

    #### Is it currently Android

- ### `isIos` 

    #### Is the current system ios

- ### `isIpad` 

    #### Currently is not an ipad device

- ### `isIphone` 

    #### Currently not an iphone device

- ### `isMoblie` 

    #### Is it currently mobile
    
- ### `isPc` 

    #### Is it currently a pc

- ### `isWechat` 

    #### Whether the current environment is WeChat


## <a id="Format">`Format`</a>
- ### `formatFileSize` 

    #### Formatting File Size  

    parameter name | description | default value
    ------| ----| -----
    `file`| file object  | `{}`

    Example:
    ```javascript
    import {formatFileSize} from 'femcjs';
    console.log(formatFileSize(file)); // 1.37KB
    ```

- ### `formatVideoDuration` 

    #### Formatted Video Duration

    parameter name | description | default value
    ------| ----| -----
    `totalSeconds`| video duration  | `0`

    Example:
    ```javascript
    import {formatVideoDuration} from 'femcjs';
    console.log(formatVideoDuration(3600)); // 01:00:00
    ```

## <a id="Storage">`Storage`</a>
- ### `getLocalStorage` 

    #### Getting a value from local storage

    parameter name | description | default value
    ------| ----| -----
    `key`| The key value to get  | 


    ##### Note：
    1. if the `key` value is an object, return the object corresponding to the `key` value directly
    2. otherwise, return the string corresponding to the `key` value.

    Example:
    ```javascript
    // If localStorage stores info: {“name”: “lee”, “age”:29}, name: test
    import {getLocalStorage} from 'femcjs';
    console.log(getLocalStorage(info)); // {name: lee, age} objects
    console.log(getLocalStorage(name)); // test string
    ```

- ### `setLocalStorage` 

    #### Setting a LocalStorage value

    parameter name | description | default value
    ------| ----| -----
    `key` | The value of the `key` to be set | 
    `val`| The value corresponding to the `key` to be set | 

    ##### Note:
    `val` can be an object or a string

    Example:
    ```javascript
    import {setLocalStorage} from 'femcjs';
    setLocalStorage('info', {name: 'lee', age: 29}); // info ->  {"name":"lee","age":29}
    ```

- ### `removeLocalStorage` 

    #### Delete one or more locally stored values

    parameter name | description | default value
    ------| ----| -----
    `key` | value of `key` to be deleted | 

    ##### Note：
    1. if `key` is an array, multiple corresponding `key` values can be removed
    2. if `key` is a string, then a single value is removed


    Example:
    ```javascript
    import {removeLocalStorage} from 'femcjs';
    console.log(removeLocalStorage(['info', 'test'])); // 将删除info,test对应的值
    ```

- ### `clearLocalStorage` 

    #### Clear Local Storage  

    Example:
    ```javascript
    import {formatFileSize} from 'femcjs';
    console.log(formatFileSize(file)); // 1.37KB
    ```



## <a id="Url">`Url`</a>
- ### `getUrlValue` 

    #### Get the value of the `url` parameter

    parameter name | description | default value
    ------| ----| -----
    `key`| The key of the value to get  | `''`
    `url`| The `url` link to get  | `window.location.href` 

    ##### Note：
    1. When `key` is empty, an object consisting of the values of all the arguments of `url` is returned.
    2. When `key` is a value, the value of `url` as `key` is returned.

    Example:
    ```javascript
    import {getUrlValue} from 'femcjs';
    const url = 'http://localhost:5501/test/?name=lee&age=29'
    console.log(getUrlValue('', url)); // {name: 'lmc', age: 29}
    console.log(getUrlValue('name', url)); // 'lmc'
    ```

- ### `setUrlWithNorefresh` 

    #### Setting the url and not refreshing the page

    parameter name | description | default value
    ------| ----| -----
    `key`| Value to be set  | `{}`

    Example:
    ```javascript
    import {setUrlWithNorefresh} from 'femcjs';
    console.log(setUrlWithNorefresh({name: 'lmc', age: 29}); // http://localhost:5501/test/?name=lmc&age=29
    ```