const uid = Symbol('uid');
// console.log(uid);

const user = {
	[uid]: 'p1',
	name: 'Appsius',
	age: 22,
	[Symbol.toStringTag]: 'User',
};

user[uid] = 'p2';

const company = {
	curEmployee: 0,
	employees: ['Appso', 'Hilo', 'Ilo'],

	next() {
		if (this.curEmployee >= this.employees.length) {
			return { value: this.curEmployee, done: true };
		}

		const returnValue = {
			value: this.employees[this.curEmployee],
			done: false,
		};

		this.curEmployee++;
		return returnValue;
	},
	[Symbol.iterator]: function* employeeGenerator() {
		let currentEmployee = 0;
		while (currentEmployee < this.employees.length) {
			// yield this.employees[currentEmployee];
			currentEmployee++;
		}
	},
};

for (const employee of company) {
	// console.log(employee);
}

const persons = ['Zeyd', 'Saad'];

// console.log(persons);
// console.log([...company]);

const course = {
	title: 'Mastered at JS',
};

Reflect.setPrototypeOf(course, {
	toString() {
		return this.title;
	},
});

// Reflect.deleteProperty(course, 'title');

const courseHandler = {
	get(obj, propertyName) {
		console.log(propertyName);
		if (propertyName === 'length') {
			return 0;
		}
		return obj[propertyName] || 'NOT FOUND';
	},
	set(obj, propertyName, newValue) {
		console.log('Sending data...');
		if (propertyName === 'rating') {
			return;
		}
		obj[propertyName] = newValue;
	},
};

const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
