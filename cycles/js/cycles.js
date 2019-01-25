'use strict';

let positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
];

//Задание 1

let positionsLength = positions.length;

console.log('Список наименований');

for (let i = 0; i < positionsLength; i++) {
  console.log(`${i+1} ${positions[i]}`);
}

//Задание 2

let newPositions = [
  'Экзоскелет Trooper-111', 
  'Нейроинтерфейс игровой SEGUN', 
  'Семена дерева Эйва'
];

let totalPositions = positions.concat(newPositions);

console.log('Окончательный список наименований');

for (let i = 0; i < totalPositions.length; i++) {
  console.log(`${i+1} ${totalPositions[i]}`);
}

//Задание 3

let 
  index = totalPositions.findIndex(element => element === 'Машина времени DeLorean'),
  indexItem = totalPositions.splice(index, 1)[0];
  
totalPositions.unshift(indexItem);
console.log('Принять в первую очередь');

for (let i = 0; i < totalPositions.length; i++) {
  console.log(`${i+1} ${totalPositions[i]}`);
}

//Задание 4

let [first, second, third, fourth, fifth, ...rest] = totalPositions;

console.log('В магазине');

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);

console.log('Остальные товары');

rest.forEach(element => console.log(element));

