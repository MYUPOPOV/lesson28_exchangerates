/*jshint esversion: 6 */

const selectBlock = document.querySelector('.select');
const input1 = document.querySelector('.input1');
const span1 = document.querySelector('.span1');
const button = document.querySelector('.button');
const input2 = document.querySelector('.input2');
const span2 = document.querySelector('.span2');

const sendData = () => {
	fetch('https://api.exchangeratesapi.io/v1/latest?access_key=API_KEY')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

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

button.addEventListener('click', (e) => {
	e.preventDefault();
	sendData();
});

// fetch('https://api.exchangeratesapi.io/v1/latest?access_key=API_KEY&fromEUR&toUSD&amount=10')

// const sendData = (date) => {
// 	fetch('https://api.exchangeratesapi.io/v1/latest', {
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// };
