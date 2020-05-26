const form = document.getElementById('user-input');

function signupHandler(event) {
	event.preventDefault();
	const userNameInput = document.getElementById('username');
	const enteredNameInput = userNameInput.value;

	const passwordInput = document.getElementById('password');
	const enteredPassword = passwordInput.value;

	if (enteredNameInput.trim().length === 0) {
		alert('Invalid username');
		return;
	}

	if (enteredPassword.trim().length <= 5) {
		alert('Invalid password - password must be at least 6 characters.');
		return;
	}

	const user = {
		userName: enteredNameInput,
		password: enteredPassword,
	};

	console.log(user);
	console.log(`Hi I'm ${user.userName}`);
}

form.addEventListener('submit', signupHandler);
