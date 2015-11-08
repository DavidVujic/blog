import foo from 'modules/foo';
import bar from 'modules/bar';

const original = bar.getMessage;
const fakeMessage = 'A message from a fake getMessage.';

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
  const expected = 'The message is: ' + fakeMessage;
	assert.equal(foo.message(), expected);
});
