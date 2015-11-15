import $ from 'jquery';

const msg = () => {
	return $('input[name=message]').val();
};

let bar = {
	getMessage: msg
};

export default bar;
