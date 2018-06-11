!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Redux={})}(this,function(e){"use strict";var t=function(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),r=function(){return Math.random().toString(36).substring(7).split("").join(".")},n={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function u(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+r+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e,t){return function(){return t(e.apply(this,arguments))}}function c(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}e.createStore=function e(r,i,u){var a;if("function"==typeof i&&void 0===u&&(u=i,i=void 0),void 0!==u){if("function"!=typeof u)throw Error("Expected the enhancer to be a function.");return u(e)(r,i)}if("function"!=typeof r)throw Error("Expected the reducer to be a function.");var c=r,f=i,d=[],s=d,l=!1;function p(){s===d&&(s=d.slice())}function h(){if(l)throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function y(e){if("function"!=typeof e)throw Error("Expected the listener to be a function.");if(l)throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),s.push(e),function(){if(t){if(l)throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var r=s.indexOf(e);s.splice(r,1)}}}function b(e){if(!function(e){if("object"!==(void 0===e?"undefined":o(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw Error("Reducers may not dispatch actions.");try{l=!0,f=c(f,e)}finally{l=!1}for(var t=d=s,r=0;t.length>r;r++)(0,t[r])();return e}return b({type:n.INIT}),(a={dispatch:b,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");c=e,b({type:n.REPLACE})}})[t]=function(){var e,r=y;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":o(e))||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(h())}return t(),{unsubscribe:r(t)}}})[t]=function(){return this},e},a},e.combineReducers=function(e){for(var t=Object.keys(e),r={},o=0;t.length>o;o++){var i=t[o];"function"==typeof e[i]&&(r[i]=e[i])}var a=Object.keys(r),c=void 0;try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:n.INIT}))throw Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+n.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(r)}catch(e){c=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(c)throw c;for(var n=!1,o={},i=0;a.length>i;i++){var f=a[i],d=e[f],s=(0,r[f])(d,t);if(void 0===s){var l=u(f,t);throw Error(l)}o[f]=s,n=n||s!==d}return n?o:e}},e.bindActionCreators=function(e,t){if("function"==typeof e)return a(e,t);if("object"!==(void 0===e?"undefined":o(e))||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":o(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),n={},i=0;r.length>i;i++){var u=r[i],c=e[u];"function"==typeof c&&(n[u]=a(c,t))}return n},e.applyMiddleware=function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return function(e){return function(){for(var r=arguments.length,n=Array(r),o=0;r>o;o++)n[o]=arguments[o];var u=e.apply(void 0,n),a=function(){throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},f={getState:u.getState,dispatch:function(){return a.apply(void 0,arguments)}},d=t.map(function(e){return e(f)});return a=c.apply(void 0,d)(u.dispatch),i({},u,{dispatch:a})}}},e.compose=c,e.__DO_NOT_USE__ActionTypes=n,Object.defineProperty(e,"__esModule",{value:!0})});
