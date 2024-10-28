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


## `Form` module

### `checkID(ID)` Verify ID

parameter name | description | default value
------| ----| -----
`ID`| ID card (only supports mainland ID cards) | `''`

Example:
````javascript
const flag = Form.checkID('441522xxxxxxxxxxxx');
// ID card format is correct
if (flag) {

}
// wrong ID format
else {

}
````

### `checkEmail(email)` Verify email

parameter name | description | default value
------| ----| -----
`email`| mailbox | `''`

Example:
````javascript
const flag = Form.checkEmail('xxxx@gmail.com');
// Email format is correct
if (flag) {

}
// Email format error
else {

}
````

### `isPhoneNum(phone)` Verify phone number

parameter name | description | default value
------| ----| -----
`phone`| mobile phone number (only supports mainland mobile phones) | `''`

Example:
````javascript
const flag = Form.isPhoneNum('1581xxxxx81');
// phone number format is correct
if (flag) {

}
// Wrong format of phone number
else {

}
````


### `rangeRandom(min, max)` generate range random integers

parameter name | description | default value
------| ----| -----
`min`| minimum value to generate | `0`
`max`| maximum value to generate | `0`

Example:
````javascript
// will generate random numbers from 1 to 10
const num = Form.isPhoneNum(1, 10);
````

### `removeEmoji(content)` remove the emoji from the string

parameter name | description | default value
------| ----| -----
`content`| String content | ``

Example:
````javascript
const str = Form.removeEmoji('hello,I am 🍁');
console.log(str); // hello,I am
````

### `allChinese(val)` Determine whether it is pure Chinese (excluding spaces, special characters)

parameter name | description | default value
------| ----| -----
`val`| string content | `''`

Example:
````javascript
const str = Form.allChinese('How are you?');
console.log(str); // false because there is a special character question mark
````

### `allEnglish(val)` to determine whether it is pure English (excluding spaces, special characters)

parameter name | description | default value
------| ----| -----
`val`| string content | `''`

Example:
````javascript
const str = Form.allEnglish('hello world');
console.log(str); // false because of spaces
````

### `hasSpecialCharacters(str)` to determine whether there are special characters

parameter name | description | default value
------| ----| -----
`str`| string content | `''`

Example:
````javascript
const str = Form.allEnglish('??!');
console.log(str); // true
````

### `removeSpaceSrt(str)` remove spaces from the string

parameter name | description | default value
------| ----| -----
`str`| string content | `''`

Example:
````javascript
const str = Form.allEnglish('hello, I am lMC');
console.log(str); // hello, IamlMC
````

## `Info` module

attribute name | description | value description
------| ---- | ----
`platform`| is the mobile terminal or the `pc` terminal. | `pc`: pc side<br>`mobile`: mobile side
`screenType`| mobile phone screen type | `X`: full screen<br> `normal`: normal screen (iphone5, 6, 7)<br> `short`: smaller screen than normal screen
`sysTem`| device system | `ios`: `ios` system <br> `android`: `android` Android system <br> `not moblie`: current non-mobile terminal
`isWechat`| Is the current WeChat environment | `true`: the current WeChat environment <br> `false`: the current non-WeChat environment


## `Ajax` module

### `Ajax` module exports a class

> Equivalent to a global configuration

parameter name | description | default value
------| ----| -----
`config.type` | request type | `POST`
`config.debug`| Whether to enable interface printing information (recommended to be disabled in production environment) | `0`
`config.debugStep`| Whether to enable printing of the four steps of xhr connection for debugging | `0`
`config.headers`| Set request headers. <br>`GET` request, the value is: `application/x-www-form-urlencoded; charset=UTF-8;`<br>`POST` request, the value is: `application/x-www-form-urlencoded; charset=UTF-8`;<br>When passed ` When data` is of type `FormData`, the setting will be invalid| `{}`
`config.url`| request URL| `''`
`config.data` | request parameters | `{}`
`config.timeout` | interface timeout | `3000`
`config.success`| Status code `200` Successful callback, `res` is the `result` returned by the interface | `res => {}`
`config.fail`| The status code is not `200` The failure callback, `res` is the `result` returned by the interface | `res => {}`
`config.always`| A callback triggered on success or failure, `res` is the `result` returned by the interface | `res => {}`
`config.timeoutFn`| Interface timeout callback, `res` native event callback object | `res => {}`
`config.error`| interface error callback, `res` native event callback object | `res => {}`
`config.fieldName`| The field representing the status code returned by the backend | `ret`
`config.successCode`| The success status value returned by the backend | `success`
`config.responseDataName`| backend data field name | `data`

Example:
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

## `base(config)` request method
Enter some of the parameters that can be passed in to the default global parameters. If they are passed in again, the default global parameters will be overwritten.

Example:
````javascript
ajax.base({
    type: 'get',
    debug: 0,
    url: 'xxxxx',
    timeout: 2000,
    success: res => {
        console.log('status code 200 success');
        if (ret.ret === 0) {
            // do something
        } else {
            // fail
        }
    },
    fail: res => {
        console.log('Failure with status code other than 200');
    }
});
````

## `rebuild(config)` wraps the `base` method
- This method is encapsulated once again with the `base` method according to the data format returned by the backend. So when you want to use it, you need to configure `fieldName`, `successCode`, `failCode` and `responseDataName` in the `new Ajax()` method
- When the status code is `200` and the success status returned by the backend is satisfied, then the function is successful and returns a `Promise`. The parameters in the `then` function are the data returned by the backend
- When the status code is `200`, and the non-successful status returned by the backend is satisfied, or it is triggered when the interface is called, `timeFn`, `error` will trigger the `catch` function
- The input parameter `config` only accepts the following parameters
  - `data`
  - `url`
  - `type`
  - `headers`
  - `timeout`
  - `debug`
  - `debugStep`

> When entering the `catch` function, you can judge the type of the current error according to the `err` parameter of the `catch` function

Possible values for the `catch` function `err._type` (parameter):
  possible values | value description
---- | ----
`connect error` | connection error
`connect timeout` | connection timeout
`connect fail` | connection fail
`interface fail` | The connection is successful, the interface returns a non-success status code
`other errors`| Other errors, possibly due to your own code writing errors

Example:
````javascript
// 1. Suppose the data returned by the backend successfully is in the format:
/**
 * @ret is config.fieldName
 * @success is config.successCode
 * @data is config.responseDataName
 */
{
    ret: 'success',
    data: {
        name: 'lmc',
        age: 27
    }
}

// 2. Initialize configuration
const ajax = new Ajax({
    fieldName: 'ret',
    successCode: 'success',
    responseDataName: 'data'
});

// 3. call
ajax.rebuild({
    type: 'get',
    debug: 0,
    url: 'xxxxx',
    timeout: 2000,
})
// interface succeeded
.then(res => {
    // res ==> data: {name: 'lmc', age: 27}
})
// If ret !== 'success', fail (including timeFn, error, will trigger catch)
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
````

## other
In `dis/ajax.min.js`, there are `Ajax` modules extracted separately, which can also be directly used


````javascript
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
````

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
````