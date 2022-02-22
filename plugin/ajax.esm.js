var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var ajax_min = {exports: {}};

/**!
 * ajax - v3.0.4
 * Ajax module in Vanilla JS
 * https://github.com/fdaciuk/ajax

 * Thu Oct 25 2018 15:30:50 GMT-0300 (-03)
 * MIT (c) Fernando Daciuk
*/

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal,function(){function e(e){var r=["get","post","put","delete"];return e=e||{},e.baseUrl=e.baseUrl||"",e.method&&e.url?n(e.method,e.baseUrl+e.url,t(e.data),e):r.reduce(function(r,o){return r[o]=function(r,u){return n(o,e.baseUrl+r,t(u),e)},r},{})}function t(e){return e||null}function n(e,t,n,u){var c=["then","catch","always"],i=c.reduce(function(e,t){return e[t]=function(n){return e[t]=n,e},e},{}),f=new XMLHttpRequest,p=r(t,n,e);return f.open(e,p,!0),f.withCredentials=u.hasOwnProperty("withCredentials"),o(f,u.headers,n),f.addEventListener("readystatechange",a(i,f),!1),f.send(s(n)?JSON.stringify(n):n),i.abort=function(){return f.abort()},i}function r(e,t,n){if("get"!==n.toLowerCase()||!t)return e;var r=i(t),o=e.indexOf("?")>-1?"&":"?";return e+o+r}function o(e,t,n){t=t||{},u(t)||(t["Content-Type"]=s(n)?"application/json":"application/x-www-form-urlencoded"),Object.keys(t).forEach(function(n){t[n]&&e.setRequestHeader(n,t[n]);});}function u(e){return Object.keys(e).some(function(e){return "content-type"===e.toLowerCase()})}function a(e,t){return function n(){t.readyState===t.DONE&&(t.removeEventListener("readystatechange",n,!1),e.always.apply(e,c(t)),t.status>=200&&t.status<300?e.then.apply(e,c(t)):e["catch"].apply(e,c(t)));}}function c(e){var t;try{t=JSON.parse(e.responseText);}catch(n){t=e.responseText;}return [t,e]}function i(e){return s(e)?f(e):e}function s(e){return "[object Object]"===Object.prototype.toString.call(e)}function f(e,t){return Object.keys(e).map(function(n){if(e.hasOwnProperty(n)&&void 0!==e[n]){var r=e[n];return n=t?t+"["+n+"]":n,null!==r&&"object"==typeof r?f(r,n):p(n)+"="+p(r)}}).filter(Boolean).join("&")}function p(e){return encodeURIComponent(e)}return e});
}(ajax_min));

var ajax = ajax_min.exports;

/**
 * ---------------------------------
 * This is the dependency plugin of the request module（这是request模块的依赖插件）
 * ---------------------------------
 */

export { ajax as default };
