import bar from 'modules/bar';

let foo = {
	message() {
		return bar.getMessage();
	}
};

export default foo;
