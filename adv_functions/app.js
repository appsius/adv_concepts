// const calcVatAmount = createTaxCalculator(0.12);
// const calcIncAmount = createTaxCalculator(0.2);

// let userName = 'Appsius';
// let name = 'Maximilian';
// let result = 1;

// userName = 'Hiloli';

// function add(a, b) {
// 	return a + b;
// }

// function addRand(num) {
// 	return num + Math.random();
// }

// function createTaxCalculator(tax) {
// 	function calculateTax(amount) {
// 		return tax * amount;
// 	}

// 	return calculateTax;
// }

// function greetUser() {
// 	let name = 'Anna';
// 	console.log(`Hi ${name}`);
// }

// function powerOf(x, n) {
// 	return x === 1 ? x : x * powerOf(x, n - 1);
// }

// console.log(powerOf(22, 3));

const mySelf = {
	name: 'Appsius',
	friends: [
		{
			name: 'Sülo',
			friends: [
				{
					name: 'Dano',
					friends: [
						{
							name: 'Sulo',
						},
						{
							name: 'Osman',
						},
					],
				},
			],
		},
		{
			name: 'Selhune',
		},
	],
};

function getFriendNames(person) {
	let collectedNames = [];

	if (!person.friends) {
		return [];
	}

	for (let friend of person.friends) {
		collectedNames.push(friend.name);
		collectedNames.push(...getFriendNames(friend));
	}

	return collectedNames;
}

console.log(getFriendNames(mySelf));
