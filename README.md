# fecmjs

English | [中文](https://github.com/limingcan562/fecmjs/blob/main/README_CN.md)

## Features

1. Collection of common front-end methods to facilitate normal development

2. Applicable to mobile terminal, `PC` terminal, mobile terminal first (some methods come from the Internet)

3. Modular development for easy reference

4. Support `tree shaking` to reduce packing volume


## Introduce
This tool is currently divided into four modules
1. `Form`: It contains general form validation methods, character judgment of user input information, etc.
2. `Common`: It contains some methods that are often used in mobile terminal development
3. `Info`: It contains some information about the current mobile device
4. `Ajax`: It contains the encapsulated `ajax` request method

## Usage
- use the `npm` method

````npm
npm i fecmjs
````

````javascript
// 1. Use all modules
import * as Fecmjs from 'fecmjs';
const {Form, Normal, Info} = Fecmjs;
const flag = Form.checkEmail('limingcan562@163.com');
console.log(flag); // true
````

````javascript
// 2. When you only need to use some functions, you can import some modules (recommended)
import {Form, Normal, Info} from 'fecmjs';
const flag = Form.checkEmail('limingcan562@163.com');
console.log(flag); // true
````

- Use `<script></script>` to import

```html
<script src="https://cdn.xxxx/fecmjs.min.js"></script>
<script>
    var Form = Fecmjs.Form;
    var flag = Form.checkEmail('limingcan562@163.com');
    console.log(flag); // true
</script>
````

## `Common` module

### `loadImage(src)` load images

parameter name | description | default value
------| ----| -----
`src`| URL of the image to load | `''`

Example:
```javascript
Common
.loadImage('http://xxxx')
// loaded successfully
.then(img => {
    
})
// Failed to load
.catch(err => {
    
});
```

### `wait(delay)` delay

parameter name | description | default value
------| ----| -----
`delay`| delay time | `500`

Example:
````javascript
Common
.wait(1000)
// Execute after a delay of 1s
.then( => {
    
});
````

### `showTips({})` Show tips popup

parameter name | description | default value
------| ----| -----
`autoClose`| Whether to close automatically | `true`
`delay`| how many seconds after which to automatically close | `1000`
`text`| prompt text | `loading...`
`closedFn`| closed callback | `() => {}`

Example:
````javascript
Common
.showTips({
    autoClose: false,
    delay: 2000,
    text: 'please waiting',
    closedFn: () => {
        console.log('closed');
    }
});
````

### `closeTips()` close the prompt popup

Description: Applicable when `autoClose: false` of `showTips`

Example:
````javascript
Common.closeTips();
````

### `isVisibleArea(domEle)` Whether the element appears in the viewport

parameter name | description | default value
------| ----| -----
`domEle` | `dom` element | `{}`

Example:
````javascript
const dom = document.getElementById('ele');
const isShow = Common.isVisibleArea(dom);
// element is in viewport
if (isShow) {

}
// element is not in viewport
else {

}
````

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

### `init(config)` initialize configuration

> Equivalent to a global configuration

parameter name | description | default value
------| ----| -----
`config.type` | request type | `POST`
`config.debug`| Whether to enable interface printing information (recommended to be disabled in production environment) | `1`
`config.headers`| Set request headers. <br>`GET` request, it will not be set;<br>`POST` request, the value is: `application/x-www-form-urlencoded; charset=UTF-8`;<br>When passed ` When data` is of type `FormData`, the setting will be invalid| `{}`
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
Ajax.int({
    debug: 0,
    url: 'xxxxx',
    timeout: 2000
});
```

## `base(config)` request method
The input parameters are the same as those in the `init` method. If you pass them in again, the configuration of the `init` method will be overwritten.

Example:
````javascript
Ajax.base({
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
- This method is encapsulated once again with the `base` method according to the data format returned by the backend. So when you want to use it, you need to configure `fieldName`, `successCode`, `failCode`, `responseDataName` in the `init` method.
- The input parameters are the same as those in the `init` method. If you pass them in again, the configuration of the `init` method will be overwritten.
- When the status code is `200` and the success status returned by the backend is satisfied, then the function is successful and returns a `Promise`. The parameters in the `then` function are the data returned by the backend
- When the status code is `200`, and the non-successful status returned by the backend is satisfied, or it is triggered when the interface is called, `timeFn`, `error` will trigger the `catch` function

> When entering the `catch` function, you can judge the type of the current error according to the `err` parameter of the `catch` function

Possible values for the `catch` function `err._type` (parameter):
  possible values | value description
---- | ----
`connect error` | connection error
`connect timeout` | connection timeout
`interface success` | The connection is successful, the interface returns success
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
Ajax.int({
    fieldName: 'ret',
    successCode: 'success',
    responseDataName: 'data'
});

// 3. call
Ajax.rebuild({
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
In `dis/ajax.min.js`, there is a separate `Ajax` module, which can also be used directly

````javascript
import Ajax from 'fecmjs/plugin/ajax.esm';
Ajax.base({
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
    Ajax.rebuild({
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