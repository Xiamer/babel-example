import _includesInstanceProperty from '@babel/runtime-corejs3/core-js/instance/includes';
import _classCallCheck from '@babel/runtime-corejs3/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime-corejs3/helpers/esm/createClass';
import _Promise from '@babel/runtime-corejs3/core-js/promise';

var _context;

var oProm = new _Promise(function (resolve, reject) {
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
var isHas = _includesInstanceProperty(_context = [1, 2, 3]).call(_context, 2);

export { isHas, oPoint, oProm };
