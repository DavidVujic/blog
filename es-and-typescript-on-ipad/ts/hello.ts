interface Person {
    firstname: string;
    lastname: string;
}

class Student {
    fullname : string;
    constructor(public firstname, public middleinitial, public lastname) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

function log(message) {
	var consoleLogger = document.querySelector('#html-logger');
	
	consoleLogger.value += message;
}

var user = new Student("Jane", "M.", "User");

log(greeter(user));