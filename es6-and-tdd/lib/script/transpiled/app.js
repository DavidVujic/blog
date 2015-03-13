define(["exports", "modules/foo"], function (exports, _modulesFoo) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  /*global console:true */

  var foo = _interopRequire(_modulesFoo);

  console.log(foo.message);
});