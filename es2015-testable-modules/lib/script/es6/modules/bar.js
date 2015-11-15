import $ from 'jquery';

const msg = () => {
	return $('input[name=message]').val();
};

const bar = {
	getMessage: msg
};

export default bar;
