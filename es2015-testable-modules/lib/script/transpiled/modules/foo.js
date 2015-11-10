'use strict';

define(['exports', 'modules/bar'], function (exports, _bar) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var foo = {
		message: function message() {
			return _bar2.default.getMessage();
		}
	};
	exports.default = foo;
});