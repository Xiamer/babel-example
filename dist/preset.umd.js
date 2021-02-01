(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.array.includes.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.promise.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.array.includes.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.promise.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.preset = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var oProm = new Promise(function (resolve, reject) {
    resolve(100);
  });

  var Point = /*#__PURE__*/function () {
    function Point(x, y) {
      _classCallCheck(this, Point);

      this.x = x;
      this.y = y;
    }

    _createClass(Point, [{
      key: "getX",
      value: function getX() {
        return this.x;
      }
    }]);

    return Point;
  }();

  var oPoint = new Point(1, 2);
  var isHas = [1, 2, 3].includes(2);

  exports.isHas = isHas;
  exports.oPoint = oPoint;
  exports.oProm = oProm;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
