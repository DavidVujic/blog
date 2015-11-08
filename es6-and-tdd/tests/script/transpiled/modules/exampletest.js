'use strict';

define(['modules/foo', 'modules/bar'], function (_foo, _bar) {
	var _foo2 = _interopRequireDefault(_foo);

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	QUnit.module('my example tests');
	QUnit.test('will this message work?', function (assert) {
		var expected = 'hello foo';
		assert.equal(_foo2.default.message, expected);
	});
	QUnit.test('can an imported module be mocked?', function (assert) {
		var expected = 'mocked!!';
		_foo2.default.message = 'mocked!!';
		assert.equal((0, _bar2.default)(), expected);
	});
	QUnit.test('can a function in a module be mocked?', function (assert) {
		var expected = 'mocked!!';

		_foo2.default.doSomething = function () {
			return expected;
		};

		assert.equal(_foo2.default.doSomething(), expected);
	});
});