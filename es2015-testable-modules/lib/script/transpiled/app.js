'use strict';

define(['modules/foo', 'modules/bar'], function (_foo, _bar) {
  var _foo2 = _interopRequireDefault(_foo);

  var _bar2 = _interopRequireDefault(_bar);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  console.log(_bar2.default.getMessage());
  console.log(_foo2.default.message());
});