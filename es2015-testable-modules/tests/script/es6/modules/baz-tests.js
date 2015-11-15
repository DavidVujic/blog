import * as features from 'modules/baz';

const originalMessage = features.message;
const originalBaz = features.baz;

QUnit.module('my example tests', {
	beforeEach() {
			features.message = 'fake!';
			features.baz = () => 'Faked func call made.';
		},
		afterEach() {
			features.message = originalMessage;
			features.baz = originalBaz;
		}
});

QUnit.test('Can a property of an imported module be mocked?', assert => {
	assert.equal(features.message, 'fake!');
});

QUnit.test('Can a function of an imported module be mocked?', assert => {
	assert.equal(features.baz(), 'Faked func call made.');
});
