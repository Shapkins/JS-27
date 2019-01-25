'use strict';

//Задание 1

let
  itemAmount,
  cartAmount;

cartAmount = 7;
itemAmount = 3;
//itemAmount = 7;
//itemAmount = 11;

if (cartAmount > itemAmount) {
  console.log('На складе нет такого количества товаров');
} else if (cartAmount < itemAmount) {
  console.log('Заказ оформлен');
} else {
  console.log('Вы забираете весь товар c нашего склада!');
}

//Задание 2

let 
  destination,
  price;

destination = 'Луна';
//destination = 'Крабовидная туманность';
//destination = 'Галактика Туманность Андромеды';
//destination = 'Туманность Ориона';
//destination = 'Звезда смерти';
//destination = 'Куда-нибудь';

switch(destination) {
  case 'Луна':
    price = 150;
    break;
  case 'Крабовидная туманность':
    price = 250;
    break;
  case 'Галактика Туманность Андромеды':
    price = 550;
    break;
  case 'Туманность Ориона':
    price = 600;
    break;
  case 'Звезда смерти':
    price = 'договорная цена';
    break;
  default:
    price = null;
}

if (price) {
  if (typeof (price) === 'string') {
    console.log(`Стоимость доставки для области ${destination}: ${price}`);
  } else {
    console.log(`Стоимость доставки для области ${destination}: ${price} Q`);
  }
} else {
  console.log('В ваш квадрант доставка не осуществляется');
}

//Задание 3

let newPrice;

newPrice = 34;
//newPrice = 'тридцать четыре';

try {
  if (typeof (newPrice) === 'number') {
    console.log('Цена товара введена корректно');
  } else {
    throw `${newPrice} не является числом`;
  }
} catch (error) {
  console.log(`Вы допустили ошибку: ${error}`);
}

//Задание 4

let
  planet,
  age;

planet = 'Земля';
//planet = 'Юпитер';
//planet = 'Марс';
age = 18;
//age = 120;

if (planet === 'Земля') {
  if (age < 18) {
    console.log('Вы не достигли совершеннолетия');
  } else {
    console.log('Приятных покупок');
  }
} else if (planet === 'Юпитер') {
  if (age < 120) {
    console.log('Сожалеем. Вернитесь на 120-й день рождения!');
  } else {
    console.log('Чистого неба и удачных покупок!');
  }
} else {
  console.log('Спасибо, что пользуетесь услугами нашего магазина!');
}