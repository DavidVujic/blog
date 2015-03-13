import foo from 'modules/foo';

QUnit.module('my example tests');

QUnit.test('will this message work?', assert => {
	assert.equal(foo.message, 'hello foo');
});
