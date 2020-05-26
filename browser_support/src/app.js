// import 'core-js/features/promise';
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const button = document.querySelector('button');
const paragraphText = document.querySelector('p');

button.addEventListener('click', () => {
	const text = paragraphText.textContent;
	const promise = new Promise();
	console.log(promise);

	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(text)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		console.log('Please copy manually, the feature is not working!');
	}
});
