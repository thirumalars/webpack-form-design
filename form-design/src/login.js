const form = document.getElementById('login');
form.addEventListener("submit", function (event) {
	alert("hellooo");
	// stop form submission
	event.preventDefault();
    const name = form.elements['email'];
	const email = form.elements['pass'];
	let emails= name.value;
	let password = email.value;
	console.log("values",emails,password);
    valid = true;
        // setPasswordError(validatePassword(loginPassword));
        // setEmailError(validateEmail(loginEmail));
        let userDetails = JSON.parse(localStorage.getItem("personObject")) || [];
        if (userDetails) {
            let findUser = userDetails.findIndex((item) => {
                return item.email.toLowerCase() === emails.toLowerCase() && item.pass === password;
            })
            if (findUser !== -1) {
                window.location.href = "welcome.html";
            }
            else {
               alert("please register and login");
            }
        }

});
