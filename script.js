'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let income = '3000';
let deposit = confirm('Есть ли у вас депозит в банке?');

let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  }
  while (!isNumber(money)) 
};

start();

let showTypeOf = function (data) {
  return (typeof(data));
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

let expenses1, expenses2;
let period = 8;
let mission = 1000000000000000;

function getExpensesMonth () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    
    if (i === 0) {
      expenses1 = prompt('Введите обязательную статью расходов?');
    } else if (i === 1){
      expenses2 = prompt('Введите обязательную статью расходов?');
    }
    sum += +prompt('Во сколько это обойдется?');
  }
  console.log(showTypeOf(sum));
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log(expensesAmount);

function getAccumulatedMonth (money, expensesAmount) {
  return (money - (expensesAmount));
}

const accumulatedMonth = getAccumulatedMonth (money, expensesAmount);


function getTargetMonth(mission, accumulatedMonth) {
      return mission/accumulatedMonth;
} 
let result = getTargetMonth(mission, accumulatedMonth);

if (result < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Цель будет достигнута через ${Math.round(result)}`);
};


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

