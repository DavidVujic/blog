'use strict';

define(['exports', 'modules/foo'], function (exports, _foo) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _foo2 = _interopRequireDefault(_foo);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var bar = function bar() {
    return _foo2.default.message;
  };

  exports.default = bar;
});