import bar from 'modules/bar';

let foo = {
	message() {
		return 'The message is: ' + bar.getMessage();
	}
};

export default foo;
