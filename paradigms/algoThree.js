function sumUp(numbers) {
	let sum = 0;

	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum;
}

const array = [22, 33, 44];

console.log(sumUp(array));
