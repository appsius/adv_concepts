// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(6, 33);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(2, 4);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [26, 'Appsius', { moreDetails: [] }];

// const analyticsData = [
// 	[2.3, 4.4],
// 	[6.2, 0.5],
// ];

// for (let data of analyticsData) {
// 	for (let points of data) {
// 		console.log(points);
// 	}
// }

// console.log(personalData[1]);

// const hobbies = ['Calligraphy', 'Coding'];

// hobbies.push('Sport');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// hobbies[1] = 'Cooking';

// // hobbies[5] = 'Planting';

// hobbies.splice(1, 0, 'Teaching');
// console.log(hobbies);

// const removedElement = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [2, 3.4, -4, 4.2, 55, 0.99, -4, 1.33];
// // const storedResults = testResults.slice(5);

// const storedResults = testResults.concat([2.33, 5.44]);
// testResults.push(7.77);

// console.log(testResults, storedResults);
// console.log(testResults.lastIndexOf(-4));

// console.log(testResults.includes(-4));
// console.log(testResults.indexOf(-4) !== -1);

// const personalData = [{ name: 'Appsius' }, { name: 'Hilo' }];
// console.log(personalData.indexOf({ name: 'Hilo' }));

// const hilo = personalData.find((person, index, persons) => {
// 	return person.name === 'Hilo';
// });

// hilo.name = 'Cezeri';
// console.log(hilo, personalData);

// const appsIndex = personalData.findIndex((person, index, persons) => {
// 	return person.name === 'Appsius';
// });

// console.log(appsIndex);

// const prices = [10.99, 33.99, 9.99, 88.99, 4.5];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// // 	taxAdjustedPrices.push(Math.floor(price * (1 + tax)));
// // }

// prices.forEach((price, idx, prices) => {
// 	const taxedObj = { index: idx, taxAdjPrice: Math.floor(price * (1 + tax)) };
// 	taxAdjustedPrices.push(taxedObj);
// });

// // console.log(taxAdjustedPrices);

// const prices = [10.99, 33.99, 9.99, 88.99, 4.5];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
// 	const taxedObj = { index: idx, taxAdjPrice: Math.floor(price * (1 + tax)) };
// 	return taxedObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
// 	if (a > b) {
// 		return -1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return 1;
// 	}
// });

// console.log(sortedPrices);

// const filteredArray = prices.filter((price) => price > 33);
// console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
// 	sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prev, curr) => prev + curr, 0);

// console.log(sum);

// const data = 'MEKKE MEDINE;20.4;2022';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// transformedData[2] = +transformedData[2];
// console.log(transformedData);

// const nameFragments = ['Appsius', 'Ustunkaya'];

// const concatedName = nameFragments.join(' ');
// console.log(concatedName);

// const copiedFragments = [...nameFragments];
// nameFragments.push('Hilol');
// console.log(nameFragments, copiedFragments);

// console.log(Math.min(...prices));

// const persons = [
// 	{ name: 'Appsius', age: 44 },
// 	{ name: 'Hiloş', age: 55 },
// ];
// const copiedPersons = persons.map((person) => ({
// 	name: person.name,
// 	age: person.age,
// }));

// persons.push({ name: 'Dilo', age: 22 });
// persons[0].age = 11;

// console.log(persons, copiedPersons);

// const nameData = ['Appsius', 'Ustunkaya', 'Mr.', 33];

// const [firstName, lastName, ...otherInfo] = nameData;

// console.log(firstName, lastName, otherInfo);

// *************************
// Set
// *************************

// const ids = new Set(['Hi', 'From', 'Comp!']);

// if (ids.has('Hi')) {
// 	ids.delete('Hi');
// }

// for (const entry of ids.values()) {
// 	console.log(entry);
// }

// const person1 = { name: 'Appsius' };
// const person2 = { name: 'Hil0' };

// const personData = new Map([[person1, [{ data: 'yesterday', age: 33 }]]]);
// personData.set(person2, [{ date: 'two weeks ago', price: 22 }]);

// console.log(personData);
// console.log(personData.get(person1));
// console.log(personData.get(person2));

// for (const [key, value] of personData.entries()) {
// 	console.log(key, value);
// }

// for (const key of personData.keys()) {
// 	console.log(key);
// // }

// for (const value of personData.values()) {
// 	console.log(value);
// }

// console.log(personData.size);

let person = { name: 'Appsius' };
const persons = new WeakSet();
persons.add(person);

// Some operations
// person = null;

const personData = new WeakMap();
personData.set(person, 'Extra info...');

person = null;

console.log(personData);
