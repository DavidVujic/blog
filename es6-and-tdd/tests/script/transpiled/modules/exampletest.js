define(["exports", "modules/foo"], function (exports, _modulesFoo) {
	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var foo = _interopRequire(_modulesFoo);

	QUnit.module("my example tests");

	QUnit.test("will this message work?", function (assert) {
		var expected = "hello foo";

		assert.equal(foo.message, expected);
	});
});