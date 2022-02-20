# fecmjs

English | [中文](https://github.com/limingcan562/fecmjs/blob/main/README_CN.md)

## Features

1. Collection of common front-end methods to facilitate normal development

2. Applicable to mobile terminal (some methods come from the Internet)

3. Modular development for easy reference

4. Support `tree shaking` to reduce packing volume


## Introduce
This tool is currently divided into three modules
1. `Form`: It contains general form validation methods, character judgment of user input information, etc.
2. `Common`: It contains some methods that are often used in mobile terminal development
3. `Info`: It contains some information about the current mobile device

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

### `isPartOfElementInViewport(domEle)` Whether the element appears in the viewport

parameter name | description | default value
------| ----| -----
`domEle` | `dom` element | `{}`

Example:
````javascript
const dom = document.getElementById('ele');
const isShow = Common.isPartOfElementInViewport(dom);
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