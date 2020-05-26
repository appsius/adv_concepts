const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
let db;
const dbRequest = indexedDB.open('DummyStorage', 1);

// Onsuccess
dbRequest.onsuccess = function (event) {
	db = event.target.result;
};

// First IndexedDB Example
dbRequest.onupgradeneeded = function (event) {
	db = event.target.result;

	const objStore = db.createObjectStore('products', { keyPath: 'id' });

	objStore.transaction.oncomplete = function (event) {
		const productsStore = db
			.transaction('products', 'readwrite')
			.objectStore('products');

		productsStore.add({
			id: 'p1',
			title: 'A good titled manner',
			price: 1.99,
			tags: ['Expensive', 'Luxury'],
		});
	};
};

// Onerror
dbRequest.onerror = function (event) {
	console.log('ERROR!');
};

// Second Indexed Example
storeBtn.addEventListener('click', () => {
	if (!db) {
		return;
	}

	const productsStore = db
		.transaction('products', 'readwrite')
		.objectStore('products');

	productsStore.add({
		id: 'p2',
		title: 'A second expensive product',
		price: 12.99,
		tags: ['Expensive', 'Luxury'],
	});
});

// Retrive event listener
retrBtn.addEventListener('click', () => {
	const productsStore = db
		.transaction('products', 'readwrite')
		.objectStore('products');

	const request = productsStore.get('p2');

	request.onsuccess = function () {
		console.log(request.result);
	};
});
