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

  
let expenses = [];
let appData = {
  income: {},//наши дополнительные доходы
  addIncome: [], //перечислим доп доходы
  expenses: {}, //дополнительные расходы
  addExpenses: [], //возможные расходы
  deposit: false,
  mission: 1000000000000000,
  period: 8,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let b = 0; let a = 0;
        for (let i = 0; i < 2; i++) {
        a = prompt('Введите обязательную статью расходов?');
        b = +prompt('Во сколько это обойдется?');
        appData.expenses[a]=b;  
        }
  },    
  getExpensesMonth: function () {
    let sum = 0; 
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    return appData.expensesMonth = sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
    
  },
  getTargetMonth: function () {
    return appData.mission/appData.budgetMonth;
  }, 
  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (appData.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay < 0) {
      return ('Что то пошло не так');
    };
  },     
};
console.log(appData.asking());
console.log(appData.getExpensesMonth());
console.log(appData);

let result = appData.getTargetMonth();
if (result < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Цель будет достигнута через ${Math.round(result)}`);
};


// appData.expensesMonth = appData.getExpensesMonth();
// const accumulatedMonth = appData.getBudget(money, expensesAmount);


console.log(appData.getStatusIncome());
// console.log(appData.asking());
// console.log(appData.getExpensesMonth());
// console.log(appData);


// let budgetDay = (accumulatedMonth/30);
// console.log(`Бюджет на день ${Math.floor(budgetDay)}`);

// console.log(expensesAmount);

// function getExpensesMonth () {
//   let sum = 0;

//   for (let i = 0; i < 2; i++) {
//     expenses[i] = prompt('Введите обязательную статью расходов?');
//     sum += +prompt('Во сколько это обойдется?');
//   }
//   return sum;
// };







// function getAccumulatedMonth (money, expensesAmount) {
//   return (money - (expensesAmount));
// }




// function getTargetMonth(mission, accumulatedMonth) {
//       return appData.mission/accumulatedMonth;
// } 






// let getStatusIncome = function () {
//   if (budgetDay >= 1200) {
//     return ('У вас высокий уровень дохода');
//   } else if (budgetDay >= 600) {
//     return ('У вас средний уровень дохода');
//   } else if (budgetDay >= 0) {
//     return ('К сожалению у вас уровень дохода ниже среднего');
//   } else if (budgetDay < 0) {
//     return ('Что то пошло не так');
//   };
// }



