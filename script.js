/*jshint esversion: 6 */

const selectBlock = document.querySelector('.select');
const input1 = document.querySelector('.input1');
const span1 = document.querySelector('.span1');
const button = document.querySelector('.button');
const input2 = document.querySelector('.input2');
const span2 = document.querySelector('.span2');

const toRub = (value, rate) => {
	const input2 = document.querySelector('.input2');
	input2.value = value * rate;
};
const fromRub = (value, rate) => {
	const input2 = document.querySelector('.input2');
	input2.value = value / rate;
};

const sendData = (value, select) => {
	fetch('https://www.cbr-xml-daily.ru/daily_json.js')
		.then((res) => res.json())
		.then((data) => {
			if (select === '1') {
				toRub(value, data.Valute.USD.Previous);
			} else if (select === '2') {
				toRub(value, data.Valute.EUR.Previous);
			} else if (select === '3') {
				fromRub(value, data.Valute.USD.Value);
			} else if (select === '4') {
				fromRub(value, data.Valute.EUR.Value);
			}
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
});

input1.addEventListener('input', (e) => {
	e.target.value = e.target.value.replace(/[^0-9.]/, '');
});

input1.addEventListener('blur', (e) => {
	e.target.value = e.target.value.replace(/[^0-9().-]+/, '');
	e.target.value = e.target.value.replace(/\s+/, ' ');
	e.target.value = e.target.value.replace(/^[-\s.]+/, '');
	e.target.value = e.target.value.replace(/[-\s.]+$/, '');
});

button.addEventListener('click', (e) => {
	e.preventDefault();
	sendData(input1.value, selectBlock.value);
});
