'use strict';

define(['exports'], function (exports) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var foo = {
		message: 'hello foo',
		doSomething: function doSomething() {
			return 1 + 1;
		}
	};
	exports.default = foo;
});