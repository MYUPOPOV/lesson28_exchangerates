/*jshint esversion: 6 */

const text = document.querySelector('.text');
const selectBlock = document.querySelector('.select');

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
