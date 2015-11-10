'use strict';

define(['modules/foo', 'modules/bar'], function (_foo, _bar) {
	var _foo2 = _interopRequireDefault(_foo);

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fakeMessage = 'a fake message.';
	var original = _bar2.default.getMessage;

	var fake = function fake() {
		return fakeMessage;
	};

	QUnit.module('my example tests', {
		beforeEach: function beforeEach() {
			_bar2.default.getMessage = fake;
		},
		afterEach: function afterEach() {
			_bar2.default.getMessage = original;
		}
	});
	QUnit.test('can an imported module be mocked?', function (assert) {
		assert.equal(_foo2.default.message(), fakeMessage);
	});
});