class AgedPerson {
	constructor() {
		console.log(this.name);
	}
	printAge() {
		console.log(this.age);
	}
}

class Person extends AgedPerson {
	name = 'Appsius';

	constructor() {
		super();
		this.age = 30;
	}

	// greet = () => {
	// 	console.log(`Hi! I am ${this.name} and I am ${this.age} years old.`);
	// };

	greet = function () {
		console.log(`Hi! I am ${this.name} and I am ${this.age} years old.`);
	};
}

// function Person() {
// 	this.age = 30;
// 	this.name = 'Appsius';
// }

// Person.prototype.greet = function () {
// 	console.log(`Hi! I am ${this.name} and I am ${this.age} years old.`);
// };

// Person.prototype = {
// 	printAge() {
// 		console.log(this.age);
// 	},
// };

// Person.prototype.printAge = function () {
// 	console.log(this.age);
// };

// console.dir(Person);

// const person1 = new Person();
// person1.printAge();
// person1.greet();
// console.log(person1.length);
// console.log(person1.toString());

// const person2 = new person1.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const person = new Person();
// const btn = document.getElementById('btn');
// btn.addEventListener('click', person.greet.bind(person));

const course = {
	title: 'Javascript Mastered Completely',
	rating: 6,
};

Object.setPrototypeOf(course, {
	// ...Object.getPrototypeOf(course),
	printRating: function () {
		console.log(`Rating: ${this.rating}/10`);
	},
});

const student = Object.create(
	{
		printProgress: function () {
			console.log(this.progress);
		},
	},
	{
		name: {
			configurable: true,
			enumerable: true,
			value: 'Appsius',
			writable: true,
		},
	}
);

// const student = 'Appsius';

Object.defineProperty(student, 'progress', {
	configurable: true,
	enumerable: true,
	value: 0.99,
	writable: false,
});

console.log(student);
course.printRating();
student.printProgress();
