//Author: Charles Tiriamai

function sendEmail() {
	var name = document.querySelector("#input__name");
	var email = document.querySelector("#input__email");
	var msg = document.querySelector("#input__msg");
	var testStr = "name: " + name + "; email: " + email + "; msg: " + msg;
	alert(testStr);

	var service_id = 'my_mandrill';
	var template_id = 'feedback';
	var template_params = {
		name: 'John',
		reply_email: 'john@doe.com',
		message: 'This is awesome!'
	};
}

emailjs.send(service_id, template_id, template_params);
