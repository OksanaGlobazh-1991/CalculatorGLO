'use strict';
let money;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
isNumber();

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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 1000000000000000,
  period: 8,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
        if (confirm('Есть ли у вас дополнительный заработок?')) {
          
          function getItemIncome () {
            let itemIncome = prompt("Какой у вас дополнительный заработок?", 'массаж');
            if (isNumber(itemIncome) || itemIncome === null || itemIncome === '' || itemIncome.trim() === '') {
              return getItemIncome();
            } 
          }
          getItemIncome();

          function getCashIncome () {
            let cashIncome = prompt ('Какой доход вам это приносит?', '2000');
            if (!isNumber(cashIncome)) {
              return getCashIncome();
            } 
          }
          getCashIncome();  
        }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка, топливо, салон');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        function getImportantExpenses() {
        let sumImportantExpenses = 0; let importantExpenses = 0;
        for (let i = 0; i < 2; i++) {
        importantExpenses = prompt('Введите обязательную статью расходов?');
        if (isNumber(importantExpenses) || importantExpenses === null || importantExpenses === '' || importantExpenses.trim() === '') {
          return getImportantExpenses();
        }
        sumImportantExpenses = +prompt('Во сколько это обойдется?');
        appData.expenses[importantExpenses]=sumImportantExpenses;  
        }
      }
      getImportantExpenses();
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
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    
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
  getInfoDeposit: function () {
    if(appData.deposit) {
      
      function getPercentDeposit () {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
        if (!isNumber(appData.percentDeposit)) {
          return getPercentDeposit ();
        }
      };
      getPercentDeposit ();
    
      function getMoneyDeposit () {
        appData.moneyDeposit = prompt('Какую сумму Вы заложили?', 10000);
        if (!isNumber(appData.moneyDeposit)) {
          return getMoneyDeposit ();
        }
      };
    getMoneyDeposit();
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  },
};


appData.getBudget();
appData.asking();
console.log(`Сумма обязательных расходов ${appData.getExpensesMonth()}`);
console.log(appData);

let result = appData.getTargetMonth();
if (result < 0) {
  console.log('Цель не будет достигнута');
} else {
  console.log(`Цель будет достигнута через ${Math.round(result)}`);
};

console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные:' + key + ' : ' + appData[key]);
}
