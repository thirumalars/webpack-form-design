
import "./css/frontdesign.css"

function validatePassword(password) {
	let reg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
	let error=""
	if (!password) 
	{
		alert("kk");
		error = "password should not be empty";
		valid = false;
	}
	else if (!password.match(reg)) 
	{
		alert("kt");
		error = "password is invalid";
		valid = false;
	}
	console.log("error",error);
	return error;
}

function validateEmail(email) {
	let reg = "^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$"
	let error
	if (!email) 
	{
		valid = false;
		error = "Email should not be empty"
	}
	else if (!email.match(reg))
	{
		error ="Email is invalid";
		valid = false;
	}
	return error;
}
const form = document.getElementById('signup');
form.addEventListener("submit", function (event) {
	alert("hellooo");
	// stop form submission
	event.preventDefault();
	let valid;
	valid = true;
	const name = form.elements['email'];
	const email = form.elements['pass'];
	let emails= name.value;
	let password = email.value;
	console.log("values",emails,password);
	let error = validatePassword(password);
	// let passError=validateEmail(emails);
	console.log("before",valid);
	if (valid) {
		let details =
		{
			email: emails,
			pass: password
		}
		let userDetails = JSON.parse(localStorage.getItem("personObject")) || [];
		if (userDetails) {
			console.log("u",userDetails);
			let findUserEmail = userDetails.findIndex((item) => {
				return item.email.toLowerCase() === emails.toLowerCase();
			})
			let findUserDetail = userDetails.findIndex((item) => {
				return item.pass.toLowerCase() === password.toLowerCase();
			})
			
			if (findUserEmail === -1 && findUserDetail === -1) {
				userDetails.push(details);
				localStorage.setItem("personObject", JSON.stringify(userDetails));
				alert("Registered successfully");
				console.log(findUserDetail,findUserEmail);
			}
			else {
				alert("already registered user");
			}
		}

	}

});