function getMin(numbers) {
	if (!numbers.length) {
		throw new Error('Should not be an empty array!!');
	}
	let currentNumber = numbers[0];

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < currentNumber) {
			currentNumber = numbers[i];
		}
	}
	return currentNumber;
}

function getMin2(numbers) {
	if (!numbers.length) {
		throw new Error('Should not be an empty array!!');
	}

	for (let i = 0; i < numbers.length; i++) {
		let outerElement = numbers[i];
		for (let j = i + 1; j < numbers.length; j++) {
			let innerElement = numbers[j];

			if (outerElement > innerElement) {
				numbers[i] = innerElement;
				numbers[j] = outerElement;

				outerElement = numbers[i];
				innerElement = numbers[j];
			}
		}
	}

	return numbers[0];
}

const testNumbers = [2, 1, 1, 1, 1, 66];
const min = getMin2(testNumbers);

console.log(min);
