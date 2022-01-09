/*jshint esversion: 6 */

const selectBlock = document.querySelector('.select');
const input1 = document.querySelector('.input1');
const span1 = document.querySelector('.span1');
const button = document.querySelector('.button');
const input2 = document.querySelector('.input2');
const span2 = document.querySelector('.span2');

selectBlock.addEventListener('change', (e) => {
	if (e.target.value === '0') {
		input1.setAttribute('disabled', '');
		span1.textContent = '$ € ₽';
		span2.textContent = '$ € ₽';
	} else if (e.target.value === '1') {
		input1.removeAttribute('disabled');
		span1.textContent = 'U S D';
		span2.textContent = 'R U B';
	} else if (e.target.value === '2') {
		input1.removeAttribute('disabled');
		span1.textContent = 'E U R';
		span2.textContent = 'R U B';
	} else if (e.target.value === '3') {
		input1.removeAttribute('disabled');
		span1.textContent = 'R U B';
		span2.textContent = 'U S D';
	} else if (e.target.value === '4') {
		input1.removeAttribute('disabled');
		span1.textContent = 'R U B';
		span2.textContent = 'E U R';
	}

	input1.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^0-9.]/, '');
	});
});
input1.addEventListener('blur', (e) => {
	e.target.value = e.target.value.replace(/[^0-9()-]+/, '');
	e.target.value = e.target.value.replace(/\s+/, ' ');
	e.target.value = e.target.value.replace(/^[-\s]+/, '');
	e.target.value = e.target.value.replace(/[-\s]+$/, '');
});

// const data = fetch('db.json')
// 	.then((res) => res.json())
// 	.then((cars) => {
// 		selectBlock.addEventListener('change', (e) => {
// 			renderText(cars, e.target.value);
// 		});
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// const renderText = (cars, item) => {
// 	if (item != 0) {
// 		text.innerHTML = `Тачка: <b>${cars[item - 1].brand} ${cars[item - 1].model}</b><br>
// 	      Цена: <b>${cars[item - 1].price}$</b>`;
// 	} else {
// 		text.innerHTML = 'Выберите тачку';
// 	}
// };
