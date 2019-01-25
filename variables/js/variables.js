'use strict';

//Задание 1

let
  item,
  price;

//Задание 2

item = 'Телепорт бытовой VZHIH-101';
price = 10000;

console.log(`В наличии имеется: «${item}»`);
console.log(`Стоимость товара ${price} Q`);

//Задание 3

let
  amount = 2,
  discount = 10,
  totalPrice;

totalPrice = (2 * price) * (1 - discount / 100);
console.log(`Цена покупки составит ${totalPrice} Q`)

//Задание 4

let
  totalMoney = 52334224,
  teleportPrice = 6500,
  teleportAmount,
  restMoney;

  restMoney = totalMoney % teleportPrice;
  teleportAmount = (totalMoney - restMoney) / teleportPrice;

  console.log(`Мы можем закупить ${teleportAmount} единиц товара, после закупки на счету останется ${restMoney} Q`);