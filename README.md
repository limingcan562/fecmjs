# fecmjs
Front end common method collection

![npm](https://img.shields.io/npm/v/fecmjs?logo=npm)
![download](https://img.shields.io/npm/dm/fecmjs)
![license](https://img.shields.io/npm/l/fecmjs)

English | [中文](README_CN.md)



## Features
1. Front-end commonly used methods collection collection , to facilitate the usual development ( part of the method from the Internet )
2. Modular development, easy to reference
3. support `tree shaking`, in order to reduce the size of the package

## Modules
- [`Date`: some methods for Date wrapping](#Date)
- [`Dom`: some methods for `Dom` operations](#Dom)
- [`Device`: some methods for devices](#Device)
- [`File`: Wrapping some methods around `File`](#File)
- [`Format`: some method wrappers for formatting](#Format)
- [`Object`: Wrapping some methods around `object`](#Object)
- [`Array`: Some method encapsulation on `array`](#Array)
- [`Storage`: Wrappers for `Storage` methods](#Storage)
- [`Url`: Some methods around `Url`](#Url)
- [`Validate`: Wrapping some methods around validation](#Validate)
- [`Other`: Wrapping some methods around validation](#Validate)
- [`Animation`: about `css`, `vue` usable animations]( #Animation )

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
    > #### Get current timestamp

    Example: 
    ```javascript
    import {getCurrentTimestamp} from 'femcjs';
    console.log(getCurrentTimestamp()) // 1730129184412
    ```

- ### `getDateByFewdays` 
    > #### Depending on the time of day, get the date a few days before or a few days after that time

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
    > #### Get the time based on the incoming timestamp

    parameter name | description | default value
    ------| ----| -----
    `timestamp`| timestamp  | 
    `needHMS`| Whether you need to return hours, minutes and seconds  | `false` 

    Example:
    ```javascript
    import {getDateByTimestamp} from 'femcjs';
    console.log(getDateByTimestamp('1730129184412')); // 2024-10-28
    console.log(getDateByTimestamp('1730129184412', true)); // 2024-10-28 23:26:24
    ```

- ### `getTimestampByDate` 
    > #### Get timestamps based on specific dates  

    parameter name | description | default value
    ------| ----| -----
    `time`| Specific date. The format is the same as that passed in by `new Date()`  | `new Date().getTime()`

    > #### Note:
    1. Returns the timestamp of the current time by default
    2. The form of the input parameter is the same as the `new Date()` method.

    Example:
    ```javascript
    import {getTimestampByDate} from 'femcjs';
    console.log(getTimestampByDate()); // 1730131646512
    console.log(getTimestampByDate('2024-10-29')); // 1730160000000
    console.log(getTimestampByDate('2024-10-29 01:30')); // 1730136600000
    ```

## <a id="Device">`Device`</a>

- ### `isAndroid` 

    > #### Is it currently Android

- ### `isIos` 

    > #### Is the current system ios

- ### `isIpad` 

    > #### Currently is not an ipad device

- ### `isIphone` 

    > #### Currently not an iphone device

- ### `isMoblie` 

    > #### Is it currently mobile
    
- ### `isPc` 

    > #### Is it currently a pc

- ### `isWechat` 

    > #### Whether the current environment is WeChat


## <a id="Dom">`Dom`</a>

- ### `$` 

    > #### Returns the `Dom` object

    parameter name | description | default value
    ------| ----| -----
    `selectName`| `css` selector |

    ##### Note：
    1. if there is more than one `Dom`, then return an array
    2. if there is only one `Dom`, return a single `Dom`.
    
    
- ### `addClass` 

    > #### Adds a class name to a `Dom` object.

    parameter name | description | default value
    ------| ----| -----
    `selectName`| `css` selector or `dom` object |
    `nameList`| The name of the class to be added | 

    ##### Note：
    1. `nameList` can be passed as an array when you want to add multiple class names.
    2. `nameList` can be passed as a string if you want to add a single class name.

    Example:
    ```javascript
    import {addClass} from 'femcjs';
    addClass('#dom', ['name1', 'name2', 'nam3']);
    ```

- ### `getClass` 

    > #### Get the class name of a `Dom` object

    parameter name | description | default value
    ------| ----| -----
    `selectName`| `css` selector or `dom` object |

    ##### Note：
    Returns an array of the object's class names


- ### `removeClass` 

    > #### Remove one or more class names from a `Dom` object.

    parameter name | description | default value
    ------| ----| -----
    `selectName`| `css` selector or `dom` object |
    `nameList`| Class name to be deleted | 

    ##### Note：
    1. `nameList` can be passed as an array if you want to delete multiple class names.
    2. `nameList` can be passed as a string if you want to delete a single class name.


- ### `setStyle` 

    > #### Setting the style of a `Dom` object

    parameter name | description | default value
    ------| ----| -----
    `selectName`| `css` selector or `dom` object |
    `style`| The style to be set | 

    ##### Note：
    1. `style` can be passed as an object when you want to set multiple styles.
    2. `style` can be passed as a string when you want to set a single style.

    Example:
    ```javascript
    import {setStyle} from 'femcjs';
    setStyle('#dom', {color: 'red', backgroundColor: '#000'}); // set multiple styles
    setStyle('#dom', 'color: red'); // set a single style
    ```

- ### `getDomInfo` 

    > #### Get information about a `dom`, or a `NodeList`.

    parameter name | description | default value
    ------| ----| -----
    `selectName`| A `css` selector or a `dom` object, or a set of `NodeList`s.

    ##### Note：
    1. If `selectName` is a set of `NodeList`s, return an array of information consisting of the `NodeList`s.

    Example:
    ```javascript
    import {setStyle} from 'femcjs';
    console.log(getDomInfo($('li'))); // [DOMRect, DOMRect]
    ```

- ### `isExceedParentHeight` 

    > #### Determine if a child element exceeds the height of the parent element

    parameter name | description | default value
    ------| ----| -----
    `parentSelectName`| Parent element class name selector or `dom` object |
    `childSelectName`| Child element class name selector or `dom` object | 

    ##### Note：
    The parent element has to set the height


- ### `isShowOnVisualArea` 

    > #### Determine if an element appears in the visual area

    parameter name | description | default value
    ------| ----| -----
    `selectName`| Element class name selector or `dom` object |

- ### `setPageNoScroll` 

    > #### Setting the page not to scroll

- ### `restorePageScroll` 

    > #### Resume page scrolling


## <a id="Format">`Format`</a>
- ### `formatFileSize` 

    > #### Formatting File Size  

    parameter name | description | default value
    ------| ----| -----
    `file`| file object  | `{}`

    Example:
    ```javascript
    import {formatFileSize} from 'femcjs';
    console.log(formatFileSize(file)); // 1.37KB
    ```

- ### `formatVideoDuration` 

    > #### Formatted Video Duration

    parameter name | description | default value
    ------| ----| -----
    `totalSeconds`| video duration  | `0`

    Example:
    ```javascript
    import {formatVideoDuration} from 'femcjs';
    console.log(formatVideoDuration(3600)); // 01:00:00
    ```

## <a id="File">`File`</a>
- ### `getFileName` 

    > #### Get the name of the `file` uploaded

    parameter name | description | default value
    ------| ----| -----
    `file`| `file` objects | 

    
- ### `getFileSuffix` 

    > #### Get the suffix of the uploaded `file` file

    parameter name | description | default value
    ------| ----| -----
    `file`| `file` objects | 

- ### `getFilePreviewSrc` 

    > #### Get the address of the uploaded `file` preview

    parameter name | description | default value
    ------| ----| -----
    `file`| `file` objects | 

    ##### Note：
    1. Mainly used for previewing uploaded images
    2. Note the use of the `revokeObjectURL` method to reclaim memory.

    Example:
    ```javascript
    import {getFilePreviewSrc, $} from 'femcjs';
    const previewSrc = getFilePreviewSrc(file);
    $('#preview_img').src = previewSrc;
    ```

    
- ### `isFileAudioType` 

    > #### Is the uploaded file an audio type

    parameter name | description | default value
    ------| ----| -----
    `file`| `file` objects | 

- ### `isFilePicType` 

    > #### Is the uploaded file an image type

    parameter name | description | default value
    ------| ----| -----
    `file`| `file` objects | 

- ### `isFileVideoType` 

    > #### Is the uploaded file an video type

    parameter name | description | default value
    ------| ----| -----
    `file`| `file` objects | 

- ### `isContentSrtFormat` 

    > #### Is the content format an srt file format

    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text | 


## <a id="Object">`Object`</a>
- ### `emptyObj` 

    > #### Whether the current object has no value

- ### `isArr` 

    > #### Whether the current type is `array` or not

- ### `isDate` 

    > #### Whether the current type is `Date` or not

- ### `isFn` 

    > #### Whether the current type is `function` or not

- ### `isNull` 

    > #### Whether the current is `null` or not

- ### `isNum` 

    > #### Whether the current type is `number` or not

- ### `isObj` 

    > #### Whether the current type is `Object` or not

- ### `isStr` 

    > ####  Whether the current type is `String` or not

- ### `isUndefined` 

    > #### Whether the current type is `Undefined` or not

    
- ### `isHtmlObj` 

    > #### Whether the current object is an `htmlDom` object.

- ### `isNodeList` 

    > #### Whether the current object is `NodeList` or not.

    
## <a id="Array">`Array`</a>
- ### `chunkArrBySize` 

    > #### Returns an array grouped according to a specified size.


    parameter name | description | default value
    ------| ----| -----
    `array`| array being manipulated | 
    `size`| Size to specify | 

    Example:
    ```javascript
    import {chunkArrBySize} from 'femcjs';
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const SIZE = 3;
    console.log(chunkArrBySize(arr, SIZE)); // [[1,2,3], [4,5,6], [7,8]]
    ```

    
- ### `removeArrayItem` 

    > #### Deleting an item in an array

    parameter name | description | default value
    ------| ----| -----
    `array`| array being manipulated | 
    `item`| Items to be deleted |
    `newone` | Whether to return a new array without changing the size of the original array |  `false`

    ##### Note：
    1. `item` can only be of type **string** or **numeric**.
    2. if `newone = false`; changes the size of the original array
    3. if `newone = true`; does not change the size of the original array, returns a new target array

    Example:
    ```javascript
    import {removeArrayItem} from 'femcjs';
    const arr = [1, 2, 3, 4, 'hello', 'lee', 7, 8];
    console.log(removeArrayItem(arr, 'hello', true)); // [1, 2, 3, 4, 'lee', 7, 8];
    console.log(arr); // [1, 2, 3, 4, 'hello', 'lee', 7, 8];
    ```



## <a id="Storage">`Storage`</a>
- ### `getLocalStorage` 

    > #### Getting a value from local storage

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

    > #### Setting a LocalStorage value

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

    > #### Delete one or more locally stored values

    parameter name | description | default value
    ------| ----| -----
    `key` | value of `key` to be deleted | 

    ##### Note：
    1. if `key` is an array, multiple corresponding `key` values can be removed
    2. if `key` is a string, then a single value is removed


    Example:
    ```javascript
    import {removeLocalStorage} from 'femcjs';
    console.log(removeLocalStorage(['info', 'test'])); // The values of info,test will be deleted.
    ```

- ### `clearLocalStorage` 

    > #### Clear Local Storage  

    Example:
    ```javascript
    import {clearLocalStorage} from 'femcjs';
    clearLocalStorage();
    ```


## <a id="validate">`validate`</a>
- ### `containCN` 

    > #### Does it contain Chinese  

    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text  | 

    ##### Note:
    Returns `true` whenever there is a Chinese character.

- ### `containEN` 

    > #### Does it contain English  

    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text  | 

    ##### Note:
    Returns `true` whenever there is English.

    - ### `containCNSpecialChar` 

    > #### Whether to include Chinese special characters  
    
    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text  | 

    ##### Note:
    Returns `true` whenever there are Chinese special characters.

- ### `containENSpecialChar` 

    > #### Whether to include English special characters  

    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text  | 

    ##### Note:
    Returns `true` whenever there is an English special character.

- ### `isAllCN` 

    > #### Is it all in Chinese?  

    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text  | 

    ##### Note:
    Is it in pure Chinese （Contains Chinese special characters and numbers; Excluding English and special English characters）

- ### `isAllEN` 

    > #### Is it all in English?  

    parameter name | description | default value
    ------| ----| -----
    `textStr`| Contents text  | 

    ##### Note:
    Is it in pure English （Contains English special characters and numbers; Excluding English and special English characters）

- ### `isEmail` 

    > #### Is it a mail format?  

    parameter name | description | default value
    ------| ----| -----
    `email`| email  | 

- ### `isPhoneNum` 

    > #### Is it a cell phone number format

    parameter name | description | default value
    ------| ----| -----
    `phoneNumber`| mobile telephone number  | 

    ##### Note:
    Verify Mainland China Cell Phone Number

- ### `isIntlPhone` 

    > #### Is it an international cell phone number format

    parameter name | description | default value
    ------| ----| -----
    `phoneNumber`| international cell phone number  |


## <a id="Url">`Url`</a>
- ### `getUrlValue` 

    > #### Get the value of the `url` parameter

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

    > #### Setting the url and not refreshing the page

    parameter name | description | default value
    ------| ----| -----
    `key`| Value to be set  | `{}`

    Example:
    ```javascript
    import {setUrlWithNorefresh} from 'femcjs';
    console.log(setUrlWithNorefresh({name: 'lmc', age: 29}); // http://localhost:5501/test/?name=lmc&age=29
    ```

## <a id="Other">`Other`</a>
- ### `getRandomInt` 

    > #### Generate random integers between [min, max]

    parameter name | description | default value
    ------| ----| -----
    `min`| minimum value  | 
    `max`| maximum value  | 

    Example:
    ```javascript
    import {getRandomInt} from 'femcjs';
    //Example: Generate a random integer between 1 and 10
    const randomNum = getRandomInt(1, 10);
    console.log(randomNum); // Possible outputs are 1, 2 .. Any number in 10
    ```


## <a id="Animation">`Animation`</a>
- ### `vue` animation    

    #### Supported animations are
    - `fade-in`: fade-in
    - `fade-right-to-left`: fade in from right to left
    - `fade-top-to-bottom`: fade in from top to bottom
    - `fade-zoom-in`: zoom in


    Example:
    ```html
    <Transition name="fade-right-to-left">
        <components v-if="show" />
    </Transition>
    ```
- ### `css` animation

    ##### Note:
    See `dist/styles/css-ani.css` for details.

    Example:
    ```html
    <!-- The element will be delayed 500ms to 750ms for a cyclic blinking animation -->
    <div class="shine time750 delay500"></div>
    ```