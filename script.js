'use strict';
let money;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let start = function () {
      do {
    money = prompt("Ваш месячный доход?");
    }
      while (!isNumber(money)) 
    };
    start();

  

let appData = {
  income: {},//наши дополнительные доходы
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 1000000000000000,
  period: 8,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
  }

};
let expenses = [];


appData.getExpensesMonth = getExpensesMonth;
appData.getExpensesMonth();

appData.getAccumulatedMonth = getAccumulatedMonth;
appData.getAccumulatedMonth();

appData.getTargetMonth = function getTargetMonth(mission, accumulatedMonth) {
  return appData.mission/accumulatedMonth;
} 
let result = getTargetMonth(appData.mission, accumulatedMonth);

if (result < 0) {
console.log('Цель не будет достигнута');
} else {
console.log(`Цель будет достигнута через ${Math.round(result)}`);
};


appData.getStatusIncome = function () {
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

console.log(appData);


function getExpensesMonth () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?');
    sum += +prompt('Во сколько это обойдется?');
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log(expensesAmount);

function getAccumulatedMonth (money, expensesAmount) {
  return (money - (expensesAmount));
}

const accumulatedMonth = getAccumulatedMonth (money, expensesAmount);


// function getTargetMonth(mission, accumulatedMonth) {
//       return appData.mission/accumulatedMonth;
// } 
// let result = getTargetMonth(appData.mission, accumulatedMonth);

// if (result < 0) {
//   console.log('Цель не будет достигнута');
// } else {
//   console.log(`Цель будет достигнута через ${Math.round(result)}`);
// };


let budgetDay = (accumulatedMonth/30);
console.log(`Бюджет на день ${Math.floor(budgetDay)}`);




