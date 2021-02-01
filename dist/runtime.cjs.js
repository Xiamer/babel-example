'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _includesInstanceProperty = require('@babel/runtime-corejs3/core-js/instance/includes');
var _classCallCheck = require('@babel/runtime-corejs3/helpers/esm/classCallCheck');
var _createClass = require('@babel/runtime-corejs3/helpers/esm/createClass');
var _Promise = require('@babel/runtime-corejs3/core-js/promise');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _includesInstanceProperty__default = /*#__PURE__*/_interopDefaultLegacy(_includesInstanceProperty);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _Promise__default = /*#__PURE__*/_interopDefaultLegacy(_Promise);

var _context;

var oProm = new _Promise__default['default'](function (resolve, reject) {
  resolve(100);
});

var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck__default['default'](this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass__default['default'](Point, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }]);

  return Point;
}();

var oPoint = new Point(1, 2);
var isHas = _includesInstanceProperty__default['default'](_context = [1, 2, 3]).call(_context, 2);

exports.isHas = isHas;
exports.oPoint = oPoint;
exports.oProm = oProm;
