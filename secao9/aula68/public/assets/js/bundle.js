(()=>{"use strict";var o="Fulano";function t(o){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},t(o)}function n(o,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,(void 0,a=function(o,n){if("object"!==t(o)||null===o)return o;var e=o[Symbol.toPrimitive];if(void 0!==e){var r=e.call(o,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(r.key),"symbol"===t(a)?a:String(a)),r)}var a}function e(o,t,e){return t&&n(o.prototype,t),e&&n(o,e),Object.defineProperty(o,"prototype",{writable:!1}),o}var r=e((function o(t){!function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.nome=t}));console.log("".concat("Sicrano"," amigo de ").concat(o," ").concat("da Silva"," tem ").concat(30," anos")),console.log("".concat("Ze"," amigo de ").concat(o," ").concat("da Tarara"," tem ").concat(900," anos"));console.log("Resultado da soma de ".concat(1," + ").concat(2," = ").concat(3));var a=new r("marcelo");console.log(a.nome),console.log(o)})();
//# sourceMappingURL=bundle.js.map