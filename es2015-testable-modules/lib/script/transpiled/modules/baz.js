"use strict";

define(["exports"], function (exports) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var message = exports.message = "Hello";
	var baz = exports.baz = {
		hello: function hello() {
			return message;
		}
	};
});