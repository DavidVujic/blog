import $ from 'jquery';

const bar = {
	getMessage: () => {
		return $('input[name=message]').val();
	}
};

export default bar;
