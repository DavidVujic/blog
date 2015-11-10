'use strict';

define(['jquery', 'modules/bar'], function (_jquery, _bar) {
	var _jquery2 = _interopRequireDefault(_jquery);

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var fakeMessage = 'A message from a fake jQuery method.';
	var original = _jquery2.default.fn.val;

	var fake = function fake() {
		return fakeMessage;
	};

	QUnit.module('my example tests', {
		beforeEach: function beforeEach() {
			_jquery2.default.fn.val = fake;
		},
		afterEach: function afterEach() {
			_jquery2.default.fn.val = original;
		}
	});
	QUnit.test('Can an imported jQuery module be mocked?', function (assert) {
		assert.equal(_bar2.default.getMessage(), fakeMessage);
	});
});