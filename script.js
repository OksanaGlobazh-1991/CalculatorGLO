'use strict';

let money = +prompt("Ваш месячный доход?");
console.log(typeof money);

let income = '3000';
console.log(typeof income);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(typeof deposit);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));




let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;
console.log(`Бюджет на месяц ${budgetMonth}`);

let period = 8;
let mission = 1000000000000000;
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} долларов`);
let months = mission/budgetMonth;
console.log(`Цель будет достигнута через ${Math.round(months)}`);

let budgetDay = (budgetMonth/30);
console.log(`Бюджет на день ${Math.floor(budgetDay)}`);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что то пошло не так');
};
  


