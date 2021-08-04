'use strict';

let money = +prompt("Ваш месячный доход?");
let income = '3000';
let deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeOf = function (data) {
  return (typeof(data));
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));


let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let period = 8;
let mission = 1000000000000000;

function getExpensesMonth (amount1, amount2) {
  return amount1 + amount2;
}
console.log(getExpensesMonth(amount1, amount2));

function getAccumulatedMonth (money, amount1, amount2) {
  return (money - (amount1 + amount2));
}

const accumulatedMonth = getAccumulatedMonth (money, amount1, amount2);


function getTargetMonth(mission, accumulatedMonth) {
  return (mission/accumulatedMonth);
}
console.log(getTargetMonth(mission, accumulatedMonth));

let budgetDay = (accumulatedMonth/30);
console.log(`Бюджет на день ${Math.floor(budgetDay)}`);


let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 600) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    return ('Что то пошло не так');
  };
}
console.log(getStatusIncome());

let months = mission/accumulatedMonth;
console.log(`Цель будет достигнута через ${Math.round(months)}`);