'use strict';

define(['modules/foo'], function (_foo) {
	var _foo2 = _interopRequireDefault(_foo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	QUnit.module('my example tests');
	QUnit.test('will this message work?', function (assert) {
		var expected = 'hello foo';
		assert.equal(_foo2.default.message, expected);
	});
});