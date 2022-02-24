/**!
* fecmjs: - v0.0.9
* https://github.com/limingcan562/fecmjs.git
* @author: limingcan
* @date: 2022.2.25
* @contact: leemimgcan@gmail.com
*/
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$H =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails$j = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$i = fails$j;

var functionBindNative = !fails$i(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var apply$3 = FunctionPrototype$2.apply;
var call$d = FunctionPrototype$2.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$3 ? call$d.bind(apply$3) : function () {
  return call$d.apply(apply$3, arguments);
});

var NATIVE_BIND$2 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var bind$7 = FunctionPrototype$1.bind;
var call$c = FunctionPrototype$1.call;
var uncurryThis$j = NATIVE_BIND$2 && bind$7.bind(call$c, call$c);

var functionUncurryThis = NATIVE_BIND$2 ? function (fn) {
  return fn && uncurryThis$j(fn);
} : function (fn) {
  return fn && function () {
    return call$c.apply(fn, arguments);
  };
};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$i = function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor = {};

var fails$h = fails$j;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var NATIVE_BIND$1 = functionBindNative;

var call$b = Function.prototype.call;

var functionCall = NATIVE_BIND$1 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$8 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$8(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$7 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$i = functionUncurryThis;

var toString$6 = uncurryThis$i({}.toString);
var stringSlice$1 = uncurryThis$i(''.slice);

var classofRaw$1 = function (it) {
  return stringSlice$1(toString$6(it), 8, -1);
};

var global$G = global$H;
var uncurryThis$h = functionUncurryThis;
var fails$g = fails$j;
var classof$a = classofRaw$1;

var Object$8 = global$G.Object;
var split = uncurryThis$h(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$g(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$8('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$a(it) == 'String' ? split(it, '') : Object$8(it);
} : Object$8;

var global$F = global$H;

var TypeError$g = global$F.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$3 = function (it) {
  if (it == undefined) throw TypeError$g("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;

var toIndexedObject$9 = function (it) {
  return IndexedObject$1(requireObjectCoercible$2(it));
};

var isCallable$h = isCallable$i;

var isObject$c = function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var path$c = {};

var path$b = path$c;
var global$E = global$H;
var isCallable$g = isCallable$i;

var aFunction = function (variable) {
  return isCallable$g(variable) ? variable : undefined;
};

var getBuiltIn$a = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path$b[namespace]) || aFunction(global$E[namespace])
    : path$b[namespace] && path$b[namespace][method] || global$E[namespace] && global$E[namespace][method];
};

var uncurryThis$g = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

var getBuiltIn$9 = getBuiltIn$a;

var engineUserAgent = getBuiltIn$9('navigator', 'userAgent') || '';

var global$D = global$H;
var userAgent$3 = engineUserAgent;

var process$3 = global$D.process;
var Deno = global$D.Deno;
var versions = process$3 && process$3.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$3 = engineV8Version;
var fails$f = fails$j;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$f(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$2 = nativeSymbol;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var global$C = global$H;
var getBuiltIn$8 = getBuiltIn$a;
var isCallable$f = isCallable$i;
var isPrototypeOf$8 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var Object$7 = global$C.Object;

var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$8('Symbol');
  return isCallable$f($Symbol) && isPrototypeOf$8($Symbol.prototype, Object$7(it));
};

var global$B = global$H;

var String$5 = global$B.String;

var tryToString$4 = function (argument) {
  try {
    return String$5(argument);
  } catch (error) {
    return 'Object';
  }
};

var global$A = global$H;
var isCallable$e = isCallable$i;
var tryToString$3 = tryToString$4;

var TypeError$f = global$A.TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$7 = function (argument) {
  if (isCallable$e(argument)) return argument;
  throw TypeError$f(tryToString$3(argument) + ' is not a function');
};

var aCallable$6 = aCallable$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable$6(func);
};

var global$z = global$H;
var call$a = functionCall;
var isCallable$d = isCallable$i;
var isObject$b = isObject$c;

var TypeError$e = global$z.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$d(fn = input.toString) && !isObject$b(val = call$a(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$b(val = call$a(fn, input))) return val;
  if (pref !== 'string' && isCallable$d(fn = input.toString) && !isObject$b(val = call$a(fn, input))) return val;
  throw TypeError$e("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var isPure = true;

var global$y = global$H;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$9 = Object.defineProperty;

var setGlobal$1 = function (key, value) {
  try {
    defineProperty$9(global$y, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$y[key] = value;
  } return value;
};

var global$x = global$H;
var setGlobal = setGlobal$1;

var SHARED = '__core-js_shared__';
var store$3 = global$x[SHARED] || setGlobal(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: 'pure' ,
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var global$w = global$H;
var requireObjectCoercible$1 = requireObjectCoercible$3;

var Object$6 = global$w.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$6 = function (argument) {
  return Object$6(requireObjectCoercible$1(argument));
};

var uncurryThis$f = functionUncurryThis;
var toObject$5 = toObject$6;

var hasOwnProperty = uncurryThis$f({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$5(it), key);
};

var uncurryThis$e = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$5 = uncurryThis$e(1.0.toString);

var uid$3 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$5(++id + postfix, 36);
};

var global$v = global$H;
var shared$3 = shared$4.exports;
var hasOwn$c = hasOwnProperty_1;
var uid$2 = uid$3;
var NATIVE_SYMBOL$1 = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore$1 = shared$3('wks');
var Symbol$1 = global$v.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$2;

var wellKnownSymbol$j = function (name) {
  if (!hasOwn$c(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL$1 && hasOwn$c(Symbol$1, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore$1[name];
};

var global$u = global$H;
var call$9 = functionCall;
var isObject$a = isObject$c;
var isSymbol$2 = isSymbol$3;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$i = wellKnownSymbol$j;

var TypeError$d = global$u.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol$i('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$a(input) || isSymbol$2(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE$1);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$9(exoticToPrim, input, pref);
    if (!isObject$a(result) || isSymbol$2(result)) return result;
    throw TypeError$d("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol$1 = isSymbol$3;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$4 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol$1(key) ? key : key + '';
};

var global$t = global$H;
var isObject$9 = isObject$c;

var document$3 = global$t.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$9(document$3) && isObject$9(document$3.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$e = fails$j;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors;
var call$8 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$8 = toIndexedObject$9;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$b = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$8(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$b(O, P)) return createPropertyDescriptor$6(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var fails$d = fails$j;
var isCallable$c = isCallable$i;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$c(detection) ? fails$d(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var uncurryThis$d = functionUncurryThis;
var aCallable$5 = aCallable$7;
var NATIVE_BIND = functionBindNative;

var bind$6 = uncurryThis$d(uncurryThis$d.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$5(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$6(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty = {};

var DESCRIPTORS$a = descriptors;
var fails$c = fails$j;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$c(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var global$s = global$H;
var isObject$8 = isObject$c;

var String$4 = global$s.String;
var TypeError$c = global$s.TypeError;

// `Assert: Type(argument) is Object`
var anObject$b = function (argument) {
  if (isObject$8(argument)) return argument;
  throw TypeError$c(String$4(argument) + ' is not an object');
};

var global$r = global$H;
var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$a = anObject$b;
var toPropertyKey$2 = toPropertyKey$4;

var TypeError$b = global$r.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$2(P);
  anObject$a(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$2(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$b('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;

var createNonEnumerableProperty$7 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$q = global$H;
var apply$2 = functionApply;
var uncurryThis$c = functionUncurryThis;
var isCallable$b = isCallable$i;
var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
var isForced$1 = isForced_1;
var path$a = path$c;
var bind$5 = functionBindContext;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$7;
var hasOwn$a = hasOwnProperty_1;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply$2(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global$q : STATIC ? global$q[TARGET] : (global$q[TARGET] || {}).prototype;

  var target = GLOBAL ? path$a : path$a[TARGET] || createNonEnumerableProperty$6(path$a, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn$a(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$7(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind$5(sourceProperty, global$q);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable$b(sourceProperty)) resultProperty = uncurryThis$c(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$6(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty$6(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$a(path$a, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$6(path$a, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty$6(path$a[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty$6(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$3 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$3;

var max$1 = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$3;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity$1(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$5 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$7 = toIndexedObject$9;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$4 = lengthOfArrayLike$5;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$2 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$7($this);
    var length = lengthOfArrayLike$4(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$2(false)
};

var hiddenKeys$5 = {};

var uncurryThis$b = functionUncurryThis;
var hasOwn$9 = hasOwnProperty_1;
var toIndexedObject$6 = toIndexedObject$9;
var indexOf$4 = arrayIncludes.indexOf;
var hiddenKeys$4 = hiddenKeys$5;

var push$3 = uncurryThis$b([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$6(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$9(hiddenKeys$4, key) && hasOwn$9(O, key) && push$3(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$9(O, key = names[i++])) {
    ~indexOf$4(result, key) || push$3(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var $$g = _export;
var toObject$4 = toObject$6;
var nativeKeys = objectKeys$2;
var fails$b = fails$j;

var FAILS_ON_PRIMITIVES$1 = fails$b(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$$g({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys(it) {
    return nativeKeys(toObject$4(it));
  }
});

var path$9 = path$c;

var keys$6 = path$9.Object.keys;

var parent$w = keys$6;

var keys$5 = parent$w;

var parent$v = keys$5;

var keys$4 = parent$v;

var parent$u = keys$4;

var keys$3 = parent$u;

var keys$2 = keys$3;

var classof$9 = classofRaw$1;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$3 = Array.isArray || function isArray(argument) {
  return classof$9(argument) == 'Array';
};

var wellKnownSymbol$h = wellKnownSymbol$j;

var TO_STRING_TAG$4 = wellKnownSymbol$h('toStringTag');
var test = {};

test[TO_STRING_TAG$4] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var global$p = global$H;
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$a = isCallable$i;
var classofRaw = classofRaw$1;
var wellKnownSymbol$g = wellKnownSymbol$j;

var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag');
var Object$5 = global$p.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object$5(it), TO_STRING_TAG$3)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$a(O.callee) ? 'Arguments' : result;
};

var global$o = global$H;
var classof$7 = classof$8;

var String$3 = global$o.String;

var toString$4 = function (argument) {
  if (classof$7(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$3(argument);
};

var objectDefineProperties = {};

var DESCRIPTORS$7 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$4 = objectDefineProperty;
var anObject$9 = anObject$b;
var toIndexedObject$5 = toIndexedObject$9;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$7 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$9(O);
  var props = toIndexedObject$5(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$7 = getBuiltIn$a;

var html$2 = getBuiltIn$7('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid$1 = uid$3;

var keys$1 = shared$2('keys');

var sharedKey$4 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$1(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$8 = anObject$b;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$3 = hiddenKeys$5;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$3 = sharedKey$4;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$3('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$3[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$8(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$2);
};

var objectGetOwnPropertyNamesExternal = {};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;

var createProperty$3 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));
  else object[propertyKey] = value;
};

var global$n = global$H;
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$5;
var createProperty$2 = createProperty$3;

var Array$2 = global$n.Array;
var max = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$3(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$2(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$2(result, n, O[k]);
  result.length = n;
  return result;
};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var classof$6 = classofRaw$1;
var toIndexedObject$4 = toIndexedObject$9;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$3 = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$3(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$6(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject$4(it));
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var uncurryThis$a = functionUncurryThis;

var arraySlice$2 = uncurryThis$a([].slice);

var createNonEnumerableProperty$5 = createNonEnumerableProperty$7;

var redefine$4 = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty$5(target, key, value);
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$f = wellKnownSymbol$j;

wellKnownSymbolWrapped.f = wellKnownSymbol$f;

var path$8 = path$c;
var hasOwn$8 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$8 = objectDefineProperty.f;

var defineWellKnownSymbol$l = function (NAME) {
  var Symbol = path$8.Symbol || (path$8.Symbol = {});
  if (!hasOwn$8(Symbol, NAME)) defineProperty$8(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$5 = classof$8;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$5(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty$7 = objectDefineProperty.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$7;
var hasOwn$7 = hasOwnProperty_1;
var toString$3 = objectToString;
var wellKnownSymbol$e = wellKnownSymbol$j;

var TO_STRING_TAG$2 = wellKnownSymbol$e('toStringTag');

var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$7(target, TO_STRING_TAG$2)) {
      defineProperty$7(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$4(target, 'toString', toString$3);
    }
  }
};

var uncurryThis$9 = functionUncurryThis;
var isCallable$9 = isCallable$i;
var store$1 = sharedStore;

var functionToString = uncurryThis$9(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$9(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$m = global$H;
var isCallable$8 = isCallable$i;
var inspectSource$2 = inspectSource$3;

var WeakMap$1 = global$m.WeakMap;

var nativeWeakMap = isCallable$8(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

var NATIVE_WEAK_MAP = nativeWeakMap;
var global$l = global$H;
var uncurryThis$8 = functionUncurryThis;
var isObject$7 = isObject$c;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$7;
var hasOwn$6 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$5;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$a = global$l.TypeError;
var WeakMap = global$l.WeakMap;
var set$1, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$1(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$7(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$a('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  var wmget = uncurryThis$8(store.get);
  var wmhas = uncurryThis$8(store.has);
  var wmset = uncurryThis$8(store.set);
  set$1 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$1[STATE] = true;
  set$1 = function (it, metadata) {
    if (hasOwn$6(it, STATE)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$6(it, STATE);
  };
}

var internalState = {
  set: set$1,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$7 = functionUncurryThis;
var fails$a = fails$j;
var isCallable$7 = isCallable$i;
var classof$4 = classof$8;
var getBuiltIn$6 = getBuiltIn$a;
var inspectSource$1 = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$6('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$7(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$7(argument)) return false;
  switch (classof$4(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$2 = !construct || fails$a(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var global$k = global$H;
var isArray$2 = isArray$3;
var isConstructor$1 = isConstructor$2;
var isObject$6 = isObject$c;
var wellKnownSymbol$d = wellKnownSymbol$j;

var SPECIES$4 = wellKnownSymbol$d('species');
var Array$1 = global$k.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$2(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor$1(C) && (C === Array$1 || isArray$2(C.prototype))) C = undefined;
    else if (isObject$6(C)) {
      C = C[SPECIES$4];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array$1 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var bind$4 = functionBindContext;
var uncurryThis$6 = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$3 = toObject$6;
var lengthOfArrayLike$2 = lengthOfArrayLike$5;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;

var push$2 = uncurryThis$6([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$3($this);
    var self = IndexedObject(O);
    var boundFunction = bind$4(callbackfn, that);
    var length = lengthOfArrayLike$2(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$1;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$2(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$2(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$1(7)
};

var $$f = _export;
var global$j = global$H;
var getBuiltIn$5 = getBuiltIn$a;
var apply$1 = functionApply;
var call$7 = functionCall;
var uncurryThis$5 = functionUncurryThis;
var DESCRIPTORS$6 = descriptors;
var NATIVE_SYMBOL = nativeSymbol;
var fails$9 = fails$j;
var hasOwn$5 = hasOwnProperty_1;
var isArray$1 = isArray$3;
var isCallable$6 = isCallable$i;
var isObject$5 = isObject$c;
var isPrototypeOf$7 = objectIsPrototypeOf;
var isSymbol = isSymbol$3;
var anObject$7 = anObject$b;
var toObject$2 = toObject$6;
var toIndexedObject$3 = toIndexedObject$9;
var toPropertyKey = toPropertyKey$4;
var $toString = toString$4;
var createPropertyDescriptor$3 = createPropertyDescriptor$7;
var nativeObjectCreate = objectCreate;
var objectKeys = objectKeys$2;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var arraySlice$1 = arraySlice$2;
var redefine$3 = redefine$4;
var shared = shared$4.exports;
var sharedKey$1 = sharedKey$4;
var hiddenKeys = hiddenKeys$5;
var uid = uid$3;
var wellKnownSymbol$c = wellKnownSymbol$j;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$k = defineWellKnownSymbol$l;
var setToStringTag$4 = setToStringTag$5;
var InternalStateModule$3 = internalState;
var $forEach$1 = arrayIteration.forEach;

var HIDDEN = sharedKey$1('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol$c('toPrimitive');

var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$3 = InternalStateModule$3.getterFor(SYMBOL);

var ObjectPrototype$1 = Object[PROTOTYPE];
var $Symbol = global$j.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError$9 = global$j.TypeError;
var QObject = global$j.QObject;
var $stringify = getBuiltIn$5('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
var nativeDefineProperty = definePropertyModule$2.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push$1 = uncurryThis$5([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS$6 && fails$9(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState$3(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$6) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$7(O);
  var key = toPropertyKey(P);
  anObject$7(Attributes);
  if (hasOwn$5(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$5(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$5(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject$7(O);
  var properties = toIndexedObject$3(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys, function (key) {
    if (!DESCRIPTORS$6 || call$7($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call$7(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwn$5(AllSymbols, P) && !hasOwn$5(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$5(this, P) || !hasOwn$5(AllSymbols, P) || hasOwn$5(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$3(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$1 && hasOwn$5(AllSymbols, key) && !hasOwn$5(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && hasOwn$5(AllSymbols, key) && !(hasOwn$5(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$3(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys, key)) push$1(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$3(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype$1, key))) {
      push$1(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$7(SymbolPrototype, this)) throw TypeError$9('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype$1) call$7(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$5(this, HIDDEN) && hasOwn$5(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor$3(1, value));
    };
    if (DESCRIPTORS$6 && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine$3(SymbolPrototype, 'toString', function toString() {
    return getInternalState$3(this).tag;
  });

  redefine$3($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule$2.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$2.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule$1.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol$c(name), name);
  };

  if (DESCRIPTORS$6) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$3(this).description;
      }
    });
  }
}

$$f({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach$1(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol$k(name);
});

$$f({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn$5(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError$9(sym + ' is not a symbol');
    if (hasOwn$5(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$$f({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS$6 }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$$f({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$$f({ target: 'Object', stat: true, forced: fails$9(function () { getOwnPropertySymbolsModule$1.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule$1.f(toObject$2(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$9(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $$f({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$1(arguments);
      var $replacer = replacer;
      if (!isObject$5(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray$1(replacer)) replacer = function (key, value) {
        if (isCallable$6($replacer)) value = call$7($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply$1($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call$7(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$4($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

var path$7 = path$c;

var getOwnPropertySymbols$4 = path$7.Object.getOwnPropertySymbols;

var parent$t = getOwnPropertySymbols$4;

var getOwnPropertySymbols$3 = parent$t;

var parent$s = getOwnPropertySymbols$3;

var getOwnPropertySymbols$2 = parent$s;

var parent$r = getOwnPropertySymbols$2;

var getOwnPropertySymbols$1 = parent$r;

var getOwnPropertySymbols = getOwnPropertySymbols$1;

var fails$8 = fails$j;
var wellKnownSymbol$b = wellKnownSymbol$j;
var V8_VERSION$2 = engineV8Version;

var SPECIES$3 = wellKnownSymbol$b('species');

var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$2 >= 51 || !fails$8(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$3] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$e = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$e({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var path$6 = path$c;

var entryVirtual$4 = function (CONSTRUCTOR) {
  return path$6[CONSTRUCTOR + 'Prototype'];
};

var entryVirtual$3 = entryVirtual$4;

var filter$6 = entryVirtual$3('Array').filter;

var isPrototypeOf$6 = objectIsPrototypeOf;
var method$3 = filter$6;

var ArrayPrototype$4 = Array.prototype;

var filter$5 = function (it) {
  var own = it.filter;
  return it === ArrayPrototype$4 || (isPrototypeOf$6(ArrayPrototype$4, it) && own === ArrayPrototype$4.filter) ? method$3 : own;
};

var parent$q = filter$5;

var filter$4 = parent$q;

var parent$p = filter$4;

var filter$3 = parent$p;

var parent$o = filter$3;

var filter$2 = parent$o;

var filter$1 = filter$2;

var getOwnPropertyDescriptor$6 = {exports: {}};

var $$d = _export;
var fails$7 = fails$j;
var toIndexedObject$2 = toIndexedObject$9;
var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var DESCRIPTORS$5 = descriptors;

var FAILS_ON_PRIMITIVES = fails$7(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED$2 = !DESCRIPTORS$5 || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$$d({ target: 'Object', stat: true, forced: FORCED$2, sham: !DESCRIPTORS$5 }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject$2(it), key);
  }
});

var path$5 = path$c;

var Object$4 = path$5.Object;

var getOwnPropertyDescriptor$5 = getOwnPropertyDescriptor$6.exports = function getOwnPropertyDescriptor(it, key) {
  return Object$4.getOwnPropertyDescriptor(it, key);
};

if (Object$4.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$5.sham = true;

var parent$n = getOwnPropertyDescriptor$6.exports;

var getOwnPropertyDescriptor$4 = parent$n;

var parent$m = getOwnPropertyDescriptor$4;

var getOwnPropertyDescriptor$3 = parent$m;

var parent$l = getOwnPropertyDescriptor$3;

var getOwnPropertyDescriptor$2 = parent$l;

var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;

var iterators = {};

var DESCRIPTORS$4 = descriptors;
var hasOwn$4 = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$4(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var fails$6 = fails$j;

var correctPrototypeGetter = !fails$6(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var global$i = global$H;
var hasOwn$3 = hasOwnProperty_1;
var isCallable$5 = isCallable$i;
var toObject$1 = toObject$6;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var Object$3 = global$i.Object;
var ObjectPrototype = Object$3.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$3.getPrototypeOf : function (O) {
  var object = toObject$1(O);
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$5(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object$3 ? ObjectPrototype : null;
};

var fails$5 = fails$j;
var isCallable$4 = isCallable$i;
var create$2 = objectCreate;
var getPrototypeOf$2 = objectGetPrototypeOf;
var redefine$2 = redefine$4;
var wellKnownSymbol$a = wellKnownSymbol$j;

var ITERATOR$4 = wellKnownSymbol$a('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$2(getPrototypeOf$2(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$5(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$2(IteratorPrototype$1);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$4(IteratorPrototype$1[ITERATOR$4])) {
  redefine$2(IteratorPrototype$1, ITERATOR$4, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create$1 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$7;
var setToStringTag$3 = setToStringTag$5;
var Iterators$5 = iterators;

var returnThis$1 = function () { return this; };

var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$1(IteratorPrototype, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$5[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var global$h = global$H;
var isCallable$3 = isCallable$i;

var String$2 = global$h.String;
var TypeError$8 = global$h.TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$3(argument)) return argument;
  throw TypeError$8("Can't set " + String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$4 = functionUncurryThis;
var anObject$6 = anObject$b;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$4(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$6(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$c = _export;
var call$6 = functionCall;
var FunctionName = functionName;
var createIteratorConstructor = createIteratorConstructor$1;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setToStringTag$2 = setToStringTag$5;
var redefine$1 = redefine$4;
var wellKnownSymbol$9 = wellKnownSymbol$j;
var Iterators$4 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$9('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator$2 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$1(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$4[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$6(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine$1(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$c({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
    redefine$1(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
  }
  Iterators$4[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject$1 = toIndexedObject$9;
var Iterators$3 = iterators;
var InternalStateModule$2 = internalState;
objectDefineProperty.f;
var defineIterator$1 = defineIterator$2;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$2 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$3.Arguments = Iterators$3.Array;

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var DOMIterables$1 = domIterables;
var global$g = global$H;
var classof$3 = classof$8;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$7;
var Iterators$2 = iterators;
var wellKnownSymbol$8 = wellKnownSymbol$j;

var TO_STRING_TAG$1 = wellKnownSymbol$8('toStringTag');

for (var COLLECTION_NAME in DOMIterables$1) {
  var Collection = global$g[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof$3(CollectionPrototype) !== TO_STRING_TAG$1) {
    createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
  }
  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
}

var fails$4 = fails$j;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$4(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

var STRICT_METHOD$1 = arrayMethodIsStrict$1('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var $$b = _export;
var forEach$7 = arrayForEach;

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$$b({ target: 'Array', proto: true, forced: [].forEach != forEach$7 }, {
  forEach: forEach$7
});

var entryVirtual$2 = entryVirtual$4;

var forEach$6 = entryVirtual$2('Array').forEach;

var parent$k = forEach$6;

var forEach$5 = parent$k;

var classof$2 = classof$8;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf$5 = objectIsPrototypeOf;
var method$2 = forEach$5;

var ArrayPrototype$3 = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

var forEach$4 = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype$3 || (isPrototypeOf$5(ArrayPrototype$3, it) && own === ArrayPrototype$3.forEach)
    || hasOwn$2(DOMIterables, classof$2(it)) ? method$2 : own;
};

var parent$j = forEach$4;

var forEach$3 = parent$j;

var parent$i = forEach$3;

var forEach$2 = parent$i;

var forEach$1 = forEach$2;

var getBuiltIn$4 = getBuiltIn$a;
var uncurryThis$3 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$5 = anObject$b;

var concat = uncurryThis$3([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$3 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$5(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var $$a = _export;
var DESCRIPTORS$3 = descriptors;
var ownKeys$2 = ownKeys$3;
var toIndexedObject = toIndexedObject$9;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var createProperty$1 = createProperty$3;

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$$a({ target: 'Object', stat: true, sham: !DESCRIPTORS$3 }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
    var keys = ownKeys$2(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty$1(result, key, descriptor);
    }
    return result;
  }
});

var path$4 = path$c;

var getOwnPropertyDescriptors$4 = path$4.Object.getOwnPropertyDescriptors;

var parent$h = getOwnPropertyDescriptors$4;

var getOwnPropertyDescriptors$3 = parent$h;

var parent$g = getOwnPropertyDescriptors$3;

var getOwnPropertyDescriptors$2 = parent$g;

var parent$f = getOwnPropertyDescriptors$2;

var getOwnPropertyDescriptors$1 = parent$f;

var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

var defineProperties$6 = {exports: {}};

var $$9 = _export;
var DESCRIPTORS$2 = descriptors;
var defineProperties$5 = objectDefineProperties.f;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$$9({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties$5, sham: !DESCRIPTORS$2 }, {
  defineProperties: defineProperties$5
});

var path$3 = path$c;

var Object$2 = path$3.Object;

var defineProperties$4 = defineProperties$6.exports = function defineProperties(T, D) {
  return Object$2.defineProperties(T, D);
};

if (Object$2.defineProperties.sham) defineProperties$4.sham = true;

var parent$e = defineProperties$6.exports;

var defineProperties$3 = parent$e;

var parent$d = defineProperties$3;

var defineProperties$2 = parent$d;

var parent$c = defineProperties$2;

var defineProperties$1 = parent$c;

var defineProperties = defineProperties$1;

var defineProperty$6 = {exports: {}};

var $$8 = _export;
var DESCRIPTORS$1 = descriptors;
var defineProperty$5 = objectDefineProperty.f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$$8({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$5, sham: !DESCRIPTORS$1 }, {
  defineProperty: defineProperty$5
});

var path$2 = path$c;

var Object$1 = path$2.Object;

var defineProperty$4 = defineProperty$6.exports = function defineProperty(it, key, desc) {
  return Object$1.defineProperty(it, key, desc);
};

if (Object$1.defineProperty.sham) defineProperty$4.sham = true;

var parent$b = defineProperty$6.exports;

var defineProperty$3 = parent$b;

var parent$a = defineProperty$3;

var defineProperty$2 = parent$a;

var parent$9 = defineProperty$2;

var defineProperty$1 = parent$9;

var defineProperty = defineProperty$1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = keys$2(object);

  if (getOwnPropertySymbols) {
    var symbols = getOwnPropertySymbols(object);

    enumerableOnly && (symbols = filter$1(symbols).call(symbols, function (sym) {
      return getOwnPropertyDescriptor$1(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context, _context2;

    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? forEach$1(_context = ownKeys$1(Object(source), !0)).call(_context, function (key) {
      _defineProperty(target, key, source[key]);
    }) : getOwnPropertyDescriptors ? defineProperties(target, getOwnPropertyDescriptors(source)) : forEach$1(_context2 = ownKeys$1(Object(source))).call(_context2, function (key) {
      defineProperty(target, key, getOwnPropertyDescriptor$1(source, key));
    });
  }

  return target;
}

var hasOwn$1 = hasOwnProperty_1;
var ownKeys = ownKeys$3;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var uncurryThis$2 = functionUncurryThis;

var replace = uncurryThis$2(''.replace);

var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var clearErrorStack$1 = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var isObject$4 = isObject$c;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$7;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$1 = function (O, options) {
  if (isObject$4(options) && 'cause' in options) {
    createNonEnumerableProperty$1(O, 'cause', options.cause);
  }
};

var wellKnownSymbol$7 = wellKnownSymbol$j;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$7('iterator');
var ArrayPrototype$2 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype$2[ITERATOR$2] === it);
};

var classof$1 = classof$8;
var getMethod$1 = getMethod$3;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$j;

var ITERATOR$1 = wellKnownSymbol$6('iterator');

var getIteratorMethod$2 = function (it) {
  if (it != undefined) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof$1(it)];
};

var global$f = global$H;
var call$5 = functionCall;
var aCallable$4 = aCallable$7;
var anObject$4 = anObject$b;
var tryToString$2 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;

var TypeError$7 = global$f.TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$4(iteratorMethod)) return anObject$4(call$5(iteratorMethod, argument));
  throw TypeError$7(tryToString$2(argument) + ' is not iterable');
};

var call$4 = functionCall;
var anObject$3 = anObject$b;
var getMethod = getMethod$3;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$3(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$4(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$3(innerResult);
  return value;
};

var global$e = global$H;
var bind$3 = functionBindContext;
var call$3 = functionCall;
var anObject$2 = anObject$b;
var tryToString$1 = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$5;
var isPrototypeOf$4 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;

var TypeError$6 = global$e.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$4 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$3(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$2(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError$6(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$4(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call$3(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$4(ResultPrototype, result)) return result;
  } return new Result(false);
};

var toString$2 = toString$4;

var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$2(argument);
};

var fails$3 = fails$j;
var createPropertyDescriptor$1 = createPropertyDescriptor$7;

var errorStackInstallable = !fails$3(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$1(1, 7));
  return error.stack !== 7;
});

var $$7 = _export;
var global$d = global$H;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$1;
var create = objectCreate;
var createNonEnumerableProperty = createNonEnumerableProperty$7;
var createPropertyDescriptor = createPropertyDescriptor$7;
var clearErrorStack = clearErrorStack$1;
var installErrorCause = installErrorCause$1;
var iterate$3 = iterate$4;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$5 = wellKnownSymbol$j;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;

var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
var Error$1 = global$d.Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf$3(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error$1(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate$3(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, Error$1);
else copyConstructorProperties($AggregateError, Error$1, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create(Error$1.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$$7({ global: true }, {
  AggregateError: $AggregateError
});

var global$c = global$H;

var nativePromiseConstructor = global$c.Promise;

var redefine = redefine$4;

var redefineAll$1 = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};

var getBuiltIn$3 = getBuiltIn$a;
var definePropertyModule = objectDefineProperty;
var wellKnownSymbol$4 = wellKnownSymbol$j;
var DESCRIPTORS = descriptors;

var SPECIES$2 = wellKnownSymbol$4('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var global$b = global$H;
var isPrototypeOf$2 = objectIsPrototypeOf;

var TypeError$5 = global$b.TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw TypeError$5('Incorrect invocation');
};

var wellKnownSymbol$3 = wellKnownSymbol$j;

var ITERATOR = wellKnownSymbol$3('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var global$a = global$H;
var isConstructor = isConstructor$2;
var tryToString = tryToString$4;

var TypeError$4 = global$a.TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$4(tryToString(argument) + ' is not a constructor');
};

var anObject$1 = anObject$b;
var aConstructor = aConstructor$1;
var wellKnownSymbol$2 = wellKnownSymbol$j;

var SPECIES$1 = wellKnownSymbol$2('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$1(O).constructor;
  var S;
  return C === undefined || (S = anObject$1(C)[SPECIES$1]) == undefined ? defaultConstructor : aConstructor(S);
};

var global$9 = global$H;

var TypeError$3 = global$9.TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw TypeError$3('Not enough arguments');
  return passed;
};

var userAgent$2 = engineUserAgent;

var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var classof = classofRaw$1;
var global$8 = global$H;

var engineIsNode = classof(global$8.process) == 'process';

var global$7 = global$H;
var apply = functionApply;
var bind$2 = functionBindContext;
var isCallable$2 = isCallable$i;
var hasOwn = hasOwnProperty_1;
var fails$2 = fails$j;
var html = html$2;
var arraySlice = arraySlice$2;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$2 = engineIsNode;

var set = global$7.setImmediate;
var clear = global$7.clearImmediate;
var process$2 = global$7.process;
var Dispatch = global$7.Dispatch;
var Function$1 = global$7.Function;
var MessageChannel = global$7.MessageChannel;
var String$1 = global$7.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global$7.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue$1, id)) {
    var fn = queue$1[id];
    delete queue$1[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global$7.postMessage(String$1(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$2(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$1[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$1[id];
  };
  // Node.js 0.8-
  if (IS_NODE$2) {
    defer = function (id) {
      process$2.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$2(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$7.addEventListener &&
    isCallable$2(global$7.postMessage) &&
    !global$7.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails$2(post)
  ) {
    defer = post;
    global$7.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set,
  clear: clear
};

var userAgent$1 = engineUserAgent;
var global$6 = global$H;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$6.Pebble !== undefined;

var userAgent = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$5 = global$H;
var bind$1 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$1 = engineIsNode;

var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
var document$2 = global$5.document;
var process$1 = global$5.process;
var Promise$1 = global$5.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$5, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify$1, toggle, node, promise$3, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise$3 = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise$3.constructor = Promise$1;
    then = bind$1(promise$3.then, promise$3);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$1) {
    notify$1 = function () {
      process$1.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind$1(macrotask, global$5);
    notify$1 = function () {
      macrotask(flush);
    };
  }
}

var microtask$1 = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify$1();
  } last = task;
};

var newPromiseCapability$2 = {};

var aCallable$3 = aCallable$7;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$3(resolve);
  this.reject = aCallable$3(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var anObject = anObject$b;
var isObject$3 = isObject$c;
var newPromiseCapability$1 = newPromiseCapability$2;

var promiseResolve$2 = function (C, x) {
  anObject(C);
  if (isObject$3(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var global$4 = global$H;

var hostReportErrors$1 = function (a, b) {
  var console = global$4.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var Queue$1 = function () {
  this.head = null;
  this.tail = null;
};

Queue$1.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

var queue = Queue$1;

var engineIsBrowser = typeof window == 'object';

var $$6 = _export;
var IS_PURE = isPure;
var global$3 = global$H;
var getBuiltIn$2 = getBuiltIn$a;
var call$2 = functionCall;
var NativePromise$1 = nativePromiseConstructor;
var redefineAll = redefineAll$1;
var setToStringTag$1 = setToStringTag$5;
var setSpecies = setSpecies$1;
var aCallable$2 = aCallable$7;
var isCallable$1 = isCallable$i;
var isObject$2 = isObject$c;
var anInstance = anInstance$1;
var inspectSource = inspectSource$3;
var iterate$2 = iterate$4;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask$1;
var promiseResolve$1 = promiseResolve$2;
var hostReportErrors = hostReportErrors$1;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$2 = perform$3;
var Queue = queue;
var InternalStateModule$1 = internalState;
var isForced = isForced_1;
var wellKnownSymbol$1 = wellKnownSymbol$j;
var IS_BROWSER = engineIsBrowser;
var IS_NODE = engineIsNode;
var V8_VERSION$1 = engineV8Version;

var SPECIES = wellKnownSymbol$1('species');
var PROMISE = 'Promise';

var getInternalState$1 = InternalStateModule$1.getterFor(PROMISE);
var setInternalState$1 = InternalStateModule$1.set;
var getInternalPromiseState = InternalStateModule$1.getterFor(PROMISE);
var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
var PromiseConstructor = NativePromise$1;
var PromisePrototype = NativePromisePrototype;
var TypeError$2 = global$3.TypeError;
var document$1 = global$3.document;
var process = global$3.process;
var newPromiseCapability = newPromiseCapabilityModule$2.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$3.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable$1(global$3.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper;

var FORCED$1 = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$1 === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (!PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION$1 >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED$1 || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject$2(it) && isCallable$1(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$2('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$2(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$3.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global$3['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$2(task, global$3, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$2(task, global$3, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$2("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$2(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED$1) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable$2(executor);
    call$2(Internal, this);
    var state = getInternalState$1(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState$1(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$1(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState$1(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule$2.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$$6({ global: true, wrap: true, forced: FORCED$1 }, {
  Promise: PromiseConstructor
});

setToStringTag$1(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn$2(PROMISE);

// statics
$$6({ target: PROMISE, stat: true, forced: FORCED$1 }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call$2(capability.reject, undefined, r);
    return capability.promise;
  }
});

$$6({ target: PROMISE, stat: true, forced: IS_PURE  }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve$1(this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$$6({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$2($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform$2(function () {
      var $promiseResolve = aCallable$2(C.resolve);
      iterate$2(iterable, function (promise) {
        call$2($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$5 = _export;
var call$1 = functionCall;
var aCallable$1 = aCallable$7;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$4;

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$$5({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$1(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$1(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$4 = _export;
var aCallable = aCallable$7;
var getBuiltIn$1 = getBuiltIn$a;
var call = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$4;

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$$4({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$1('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$3 = _export;
var NativePromise = nativePromiseConstructor;
var fails$1 = fails$j;
var getBuiltIn = getBuiltIn$a;
var isCallable = isCallable$i;
var speciesConstructor = speciesConstructor$2;
var promiseResolve = promiseResolve$2;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails$1(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$$3({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

var uncurryThis$1 = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$3;
var toString$1 = toString$4;
var requireObjectCoercible = requireObjectCoercible$3;

var charAt$1 = uncurryThis$1(''.charAt);
var charCodeAt = uncurryThis$1(''.charCodeAt);
var stringSlice = uncurryThis$1(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$1(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt = stringMultibyte.charAt;
var toString = toString$4;
var InternalStateModule = internalState;
var defineIterator = defineIterator$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

var path$1 = path$c;

var promise$2 = path$1.Promise;

var parent$8 = promise$2;


var promise$1 = parent$8;

var promise = promise$1;

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $$2 = _export;
var uncurryThis = functionUncurryThis;
var $IndexOf = arrayIncludes.indexOf;
var arrayMethodIsStrict = arrayMethodIsStrict$2;

var un$IndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$2({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});

var entryVirtual$1 = entryVirtual$4;

var indexOf$3 = entryVirtual$1('Array').indexOf;

var isPrototypeOf$1 = objectIsPrototypeOf;
var method$1 = indexOf$3;

var ArrayPrototype$1 = Array.prototype;

var indexOf$2 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.indexOf) ? method$1 : own;
};

var parent$7 = indexOf$2;

var indexOf$1 = parent$7;

var indexOf = indexOf$1;

var forEach = forEach$4;

var keys = keys$5;

var $$1 = _export;
var global$2 = global$H;
var fails = fails$j;
var isArray = isArray$3;
var isObject$1 = isObject$c;
var toObject = toObject$6;
var lengthOfArrayLike = lengthOfArrayLike$5;
var createProperty = createProperty$3;
var arraySpeciesCreate = arraySpeciesCreate$2;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
var wellKnownSymbol = wellKnownSymbol$j;
var V8_VERSION = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$1 = global$2.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$1(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$1({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError$1(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var defineWellKnownSymbol$j = defineWellKnownSymbol$l;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol$j('asyncIterator');

var defineWellKnownSymbol$i = defineWellKnownSymbol$l;

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol$i('hasInstance');

var defineWellKnownSymbol$h = defineWellKnownSymbol$l;

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol$h('isConcatSpreadable');

var defineWellKnownSymbol$g = defineWellKnownSymbol$l;

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol$g('iterator');

var defineWellKnownSymbol$f = defineWellKnownSymbol$l;

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol$f('match');

var defineWellKnownSymbol$e = defineWellKnownSymbol$l;

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol$e('matchAll');

var defineWellKnownSymbol$d = defineWellKnownSymbol$l;

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol$d('replace');

var defineWellKnownSymbol$c = defineWellKnownSymbol$l;

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol$c('search');

var defineWellKnownSymbol$b = defineWellKnownSymbol$l;

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol$b('species');

var defineWellKnownSymbol$a = defineWellKnownSymbol$l;

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol$a('split');

var defineWellKnownSymbol$9 = defineWellKnownSymbol$l;

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol$9('toPrimitive');

var defineWellKnownSymbol$8 = defineWellKnownSymbol$l;

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol$8('toStringTag');

var defineWellKnownSymbol$7 = defineWellKnownSymbol$l;

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol$7('unscopables');

var global$1 = global$H;
var setToStringTag = setToStringTag$5;

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global$1.JSON, 'JSON', true);

var path = path$c;

var symbol$4 = path.Symbol;

var parent$6 = symbol$4;


var symbol$3 = parent$6;

var parent$5 = symbol$3;

var symbol$2 = parent$5;

var defineWellKnownSymbol$6 = defineWellKnownSymbol$l;

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol$6('asyncDispose');

var defineWellKnownSymbol$5 = defineWellKnownSymbol$l;

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol$5('dispose');

var defineWellKnownSymbol$4 = defineWellKnownSymbol$l;

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol$4('matcher');

var defineWellKnownSymbol$3 = defineWellKnownSymbol$l;

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol$3('metadata');

var defineWellKnownSymbol$2 = defineWellKnownSymbol$l;

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol$2('observable');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol$1 = defineWellKnownSymbol$l;

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol$1('patternMatch');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = defineWellKnownSymbol$l;

defineWellKnownSymbol('replaceAll');

var parent$4 = symbol$2;





// TODO: Remove from `core-js@4`

// TODO: Remove from `core-js@4`


var symbol$1 = parent$4;

var symbol = symbol$1;

var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

var iterator$4 = WrappedWellKnownSymbolModule.f('iterator');

var parent$3 = iterator$4;


var iterator$3 = parent$3;

var parent$2 = iterator$3;

var iterator$2 = parent$2;

var parent$1 = iterator$2;

var iterator$1 = parent$1;

var iterator = iterator$1;

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof symbol && "symbol" == typeof iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof symbol && obj.constructor === symbol && obj !== symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var filter = filter$4;

var $ = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual = entryVirtual$4;

var map$3 = entryVirtual('Array').map;

var isPrototypeOf = objectIsPrototypeOf;
var method = map$3;

var ArrayPrototype = Array.prototype;

var map$2 = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map) ? method : own;
};

var parent = map$2;

var map$1 = parent;

var map = map$1;

// 拼接data对象里面的数据
function objectToQueryString(data) {
  return isObject(data) ? getQueryString(data) : data;
}
function getQueryString(obj, prefix) {
  var _context, _context2;

  return filter(_context = map(_context2 = keys(obj)).call(_context2, function (key) {
    if (obj.hasOwnProperty(key) && undefined !== obj[key]) {
      var val = obj[key];
      key = prefix ? prefix + '[' + key + ']' : key;
      return val !== null && _typeof(val) === 'object' ? getQueryString(val, key) : encode(key) + '=' + encode(val);
    }
  })).call(_context, Boolean).join('&');
}
function isObject(data) {
  return Object.prototype.toString.call(data) === '[object Object]';
} // 是不是formData类型

function isFormData(data) {
  return data.constructor.name.toLowerCase() === 'formdata';
}
function encode(value) {
  return encodeURIComponent(value);
} // 处理返回的数据

function parseResponse(responseText) {
  var result;

  try {
    result = JSON.parse(responseText);
  } catch (e) {
    result = responseText;
  }

  return result;
} // debug模式下，调试接口

function debugAjax(xhr) {
  switch (xhr.readyState) {
    case 0:
      console.log("----debug ".concat(xhr.readyState, ".\u4EE3\u7406\u88AB\u521B\u5EFA\uFF0C\u4F46\u5C1A\u672A\u8C03\u7528 open() \u65B9\u6CD5----"));
      break;

    case 1:
      console.log("----debug ".concat(xhr.readyState, ".open() \u65B9\u6CD5\u5DF2\u7ECF\u88AB\u8C03\u7528----"));
      break;

    case 2:
      console.log("----debug ".concat(xhr.readyState, ".send() \u65B9\u6CD5\u5DF2\u7ECF\u88AB\u8C03\u7528\uFF0C\u5E76\u4E14\u5934\u90E8\u548C\u72B6\u6001\u5DF2\u7ECF\u53EF\u83B7\u5F97----"));
      break;

    case 3:
      console.log("----debug ".concat(xhr.readyState, ".\u4E0B\u8F7D\u4E2D\uFF1B responseText \u5C5E\u6027\u5DF2\u7ECF\u5305\u542B\u90E8\u5206\u6570\u636E----"));
      break;

    case 4:
      console.log("----debug ".concat(xhr.readyState, ".\u4E0B\u8F7D\u64CD\u4F5C\u5DF2\u5B8C\u6210----"));
      break;
  }
}

function commonConnect(_xhr, config) {
  var type = config.type,
      debug = config.debug,
      headers = config.headers,
      url = config.url,
      data = config.data,
      timeout = config.timeout,
      success = config.success,
      fail = config.fail,
      timeoutFn = config.timeoutFn,
      always = config.always,
      error = config.error; // 拼接传入的data对象

  var queryStringSeparator = indexOf(url).call(url, '?') > -1 ? '&' : '?',
      dataStr = objectToQueryString(data),
      requestUrl = url + queryStringSeparator + dataStr,
      async = true; // get 请求

  type.toLowerCase() === 'get' && _xhr.open('GET', requestUrl, async); // post 请求

  type.toLowerCase() === 'post' && _xhr.open('post', url, async); // 设置超时时间

  _xhr.timeout = timeout; // 3000ms超时
  // 如果传进来的数据，是formData类型，则不对数据进行处理，并且不设置请求头，浏览器会自己匹配

  if (isFormData(data)) {
    dataStr = data;
  } else {
    var _context;

    // 设置请求头
    forEach(_context = keys(headers)).call(_context, function (key) {
      headers[key] && _xhr.setRequestHeader(key, headers[key]);
    });
  } // 出错


  _xhr.onerror = error; // 请求成功完成时触发

  _xhr.onload = function (evt) {
    if (_xhr.readyState === 4) {
      // 接口连接成功
      if (_xhr.status >= 200 && _xhr.status < 300 || _xhr.status === 304) {
        success(parseResponse(_xhr.responseText));
      } // 接口连接失败
      else if (_xhr.status >= 400) {
        fail(parseResponse(_xhr.responseText));
      }

      always(parseResponse(_xhr.responseText));
    }
  }; // 在预设时间内没有接收到响应时触发


  _xhr.ontimeout = timeoutFn; // 当 readyState 属性发生变化时

  _xhr.onreadystatechange = function (evt) {
    // 开始调试
    debug && debugAjax(_xhr);
  }; // 发送数据


  type === 'get' && _xhr.send();
  type === 'post' && _xhr.send(dataStr);
}

// response config
var responseConfig = {
  fieldName: 'ret',
  successCode: 0,
  responseDataName: 'data'
};

// request config
var requestConfig = {
  type: 'post',
  // 请求类型（默认post）
  debug: 1,
  // 是否开启调试
  headers: {// 设置请求头
    // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  url: '',
  // 请求地址
  data: {},
  // 请求参数
  async: true,
  // 是否异步
  timeout: 3000,
  // 超时时间
  success: function success() {},
  // 状态码200 成功
  fail: function fail() {},
  // 状态码非200 失败
  always: function always() {},
  // 成功失败都会触发的函数
  timeoutFn: function timeoutFn() {},
  // 超时函数
  error: function error() {} // 出错函数

};

var defaultConfig = _objectSpread2(_objectSpread2({}, requestConfig), responseConfig);

var index = {
  config: defaultConfig,
  // 初始化配置
  init: function init(myConfig) {
    for (var key in myConfig) {
      if (this.config[key]) {
        this.config[key] = myConfig[key];
      }
    }
  },
  // get,post方法集合
  base: function base() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var requestData = _objectSpread2(_objectSpread2({}, this.config), config);

    var _xhr = new XMLHttpRequest();

    requestData.type = requestData.type || this.config.type; // post 请求，设置请求头

    if (requestData.type.toLowerCase() === 'post' && !isFormData(requestData.data)) {
      requestData.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      };
    }

    commonConnect(_xhr, requestData);
  },
  // 根据后台返回的状态码，重构base接口
  rebuild: function rebuild(_ref) {
    var _this = this;

    var type = _ref.type,
        debug = _ref.debug,
        _ref$headers = _ref.headers,
        headers = _ref$headers === void 0 ? {} : _ref$headers,
        url = _ref.url,
        data = _ref.data,
        timeout = _ref.timeout;
    return new promise(function (resolve, reject) {
      _this.base({
        type: type,
        debug: debug,
        headers: headers,
        url: url,
        data: data,
        timeout: timeout,
        // 覆盖base方法里面的方法
        success: function success(res) {
          try {
            // 接口ret === 0 成功
            if (res[_this.config.fieldName].toString() === _this.config.successCode.toString()) {
              resolve(res[_this.config.responseDataName]);
            } // 接口ret !== 0 失败
            else {
              reject(res);
            }
          } catch (error) {
            reject(error);
          }
        },
        fail: function fail(res) {
          return reject(res);
        },
        timeoutFn: function timeoutFn(res) {
          return reject(res);
        },
        error: function error(res) {
          return reject(res);
        }
      });
    });
  }
};

export { index as default };
