
import './css/frontdesign.css';
import images from './google-logo.png';
import './images.png';

const form = document.querySelector("#signup");

const EMAIL_REQUIRED = "Please enter your email";
const PASSWORD = "Please enter a password";
function validateEmail(input, requiredMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
}

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		alert("Demo only. No form was posted.");
	}
});