'use strict';

define(['exports', 'jquery'], function (exports, _jquery) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msg = function msg() {
		return (0, _jquery2.default)('input[name=message]').val();
	};

	var bar = {
		getMessage: msg
	};
	exports.default = bar;
});