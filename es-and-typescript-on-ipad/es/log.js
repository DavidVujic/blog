const consoleLogger = document.querySelector('#html-logger');

const log = (message) => {
	consoleLogger.value += `\n${message}\n`;
};

export default log;