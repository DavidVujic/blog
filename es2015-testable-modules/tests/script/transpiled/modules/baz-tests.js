'use strict';

define(['modules/baz'], function (_baz) {
	var features = _interopRequireWildcard(_baz);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var originalMessage = features.message;
	var originalBaz = features.baz;
	QUnit.module('my example tests', {
		beforeEach: function beforeEach() {
			features.message = 'fake!';

			features.baz = function () {
				return 'Faked func call made.';
			};
		},
		afterEach: function afterEach() {
			features.message = originalMessage;
			features.baz = originalBaz;
		}
	});
	QUnit.test('Can a property of an imported module be mocked?', function (assert) {
		assert.equal(features.message, 'fake!');
	});
	QUnit.test('Can a function of an imported module be mocked?', function (assert) {
		assert.equal(features.baz(), 'Faked func call made.');
	});
});