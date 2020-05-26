import { deleteProduct } from './product-management';

const productListEl = document.getElementById('product-list');

function createElement(product, productId, deleteProductFn) {
	const newListEl = document.createElement('li');
	newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;
	const prodDeleteButtonEl = document.createElement('button');

	prodDeleteButtonEl.textContent = 'DELETE';
	newListEl.id = productId;
	prodDeleteButtonEl.addEventListener(
		'click',
		deleteProductFn.bind(null, productId)
	);
	newListEl.appendChild(prodDeleteButtonEl);

	return newListEl;
}

export function renderProducts(products, deleteProductFn) {
	productListEl.innerHTML = '';

	products.forEach((product) => {
		const newListEl = createElement(product, product.id, deleteProductFn);
		productListEl.appendChild(newListEl);
	});

	// const startTime = performance.now();
	// for (let i = 0; i < products.length; i++) {
	// 	const newListEl = createElement(
	// 		products[i],
	// 		products[i].id,
	// 		deleteProductFn
	// 	);
	// 	productListEl.appendChild(newListEl);
	// }
	// const endTime = performance.now();
	// console.log(endTime - startTime);
}

export function updateProducts(product, productId, deleteProductFn, isAdding) {
	if (isAdding) {
		const newProductEl = createElement(product, productId, deleteProductFn);
		productListEl.insertAdjacentElement('afterbegin', newProductEl);
	} else {
		const productEl = document.getElementById(productId);
		productEl.remove();
	}
}
