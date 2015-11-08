import foo from 'modules/foo';
import bar from 'modules/bar';

QUnit.module('my example tests');

QUnit.test('will this message work?', assert => {
	const expected = 'hello foo';

	assert.equal(foo.message, expected);
});

QUnit.test('can an imported module be mocked?', assert => {
	const expected = 'mocked!!';
	foo.message = 'mocked!!';

	assert.equal(bar(), expected);
});

QUnit.test('can a function in a module be mocked?', assert => {
	const expected = 'mocked!!';
	foo.doSomething = () => expected;

	assert.equal(foo.doSomething(), expected);
});
