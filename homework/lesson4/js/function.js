"use strict";

/* Напишите функцию, которая в зависимости от переданного в нее
целочисленного аргумента count, будет возвращать слово "товар"
 в правильной форме ("12 товаров", но "22 товара", "1 товар",
 "97 товаров" и тд). */
 // #1.
 function getSome (first, second= " товар") {
   first <= 31;
   if (first === 1 || first === 21 || first === 31) {
     return first + second;
   }
   if (first === 2 || first === 3 || first === 4 || first === 22 || first === 23 || first === 24) {
     return first + second + "а";
   }
   return first + second + "ов";
 }

 let ress = getSome (5);
 console.log(ress);

/* Напишите функцию range, принимающую три аргумента: два
обязательных: начало и конец диапазона, третий аргумент -
необязательный (если он не передан, то равен единице) – шаг
для построения массива. Функция возвращает массив, который
содержит все числа из диапазона, включая начальное и конечное.
Например, вызов функции range(1, 10, 2) должен будет вернуть
массив [1, 3, 5, 7, 9] */
// #2.
let arr = [];
function range(fr, sc, tr="1") {
for (let i = 0; i < arr.length; i++) {
  if ( fr <= sc) {
  arr.push(fr);
  fr += tr;
}
}
  return arr;
}
let resu = range(3, 6);
console.log(resu);

/* Написать код - ответы на следующие вопросы:
 3.1 как проверить значение на определенный тип данный?
 3.2 как проверить, что значение переменной было присвоено?
 3.3 как проверить значение на число?*/
 // 3.