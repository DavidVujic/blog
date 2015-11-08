import foo from 'modules/foo';

QUnit.module('my example tests');

QUnit.test('will this message work?', assert => {
	const expected = 'hello foo';

	assert.equal(foo.message, expected);
});
