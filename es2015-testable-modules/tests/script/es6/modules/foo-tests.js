import foo from 'modules/foo';
import bar from 'modules/bar';

const fakeMessage = 'a fake message.';

const original = bar.getMessage;
const fake = () => fakeMessage;

QUnit.module('my example tests', {
	beforeEach() {
			bar.getMessage = fake;
		},
		afterEach() {
			bar.getMessage = original;
		}
});

QUnit.test('can an imported module be mocked?', assert => {
	assert.equal(foo.message(), fakeMessage);
});
