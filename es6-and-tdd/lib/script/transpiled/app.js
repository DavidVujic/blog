'use strict';

define(['modules/foo'], function (_foo) {
  var _foo2 = _interopRequireDefault(_foo);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  console.log(_foo2.default.message);
});