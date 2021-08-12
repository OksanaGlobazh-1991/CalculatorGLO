'use strict';

const calculate = document.getElementById('start');
console.log(calculate);

const oneButton = document.getElementsByTagName('button'[0]);
console.log(oneButton);

const twoButton = document.getElementsByTagName('button'[1]);
console.log(twoButton);

const checkbox = document.querySelector('#deposit-check');
console.log(checkbox);

const possibleIncome = document.querySelectorAll('.additional_income-item');
console.log(possibleIncome);

const budgetDayValue = document.getElementsByClassName('result-total budget_day-value');
console.log(budgetDayValue);

const expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value');
console.log(expensesMonthValue);

const additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value');
console.log(additionalIncomeValue);

const additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value');
console.log(additionalExpensesValue);

const incomePeriodValue = document.getElementsByClassName('result-total income_period-value');
console.log(incomePeriodValue);

const targetMonthValue = document.getElementsByClassName('result-total target_month-value');
console.log(targetMonthValue);

const salaryAmount = document.querySelector('.salary-amount');
console.log(salaryAmount);

const incomeTitle = document.querySelector('.income-title');
console.log(incomeTitle);

const incomeAmount = document.querySelector('.income-amount');
console.log(incomeAmount);

const additionalIncomeItem1 = document.querySelector('.additional_income-item');
console.log(additionalIncomeItem1);

const additionalIncomeItem2 = document.querySelector('.additional_income-item'[1]);
console.log(additionalIncomeItem2);

const expensesTitle = document.querySelector('.expenses-title');
console.log(expensesTitle);

const expensesAmount = document.querySelector('.expenses-amount');
console.log(expensesAmount);

const additionalExpensesItem = document.querySelector('.additional_expenses-item');
console.log(additionalExpensesItem);

const depositCheck = document.querySelector('#deposit-check');
console.log(depositCheck);

const depositAmount = document.querySelector('.deposit-amount');
console.log(depositAmount);

const depositPercent = document.querySelector('.deposit-percent');
console.log(depositPercent);

const targetAmount = document.querySelector('.target-amount');
console.log(targetAmount);

const periodSelect = document.querySelector('.period-select');
console.log(periodSelect);

const budgetMonthValue = document.querySelector('.result-total budget_month-value');
console.log(budgetMonthValue);

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
  income: {},
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
          let itemIncome; let cashIncome; 
          
            do {
              itemIncome = prompt("Какой у вас дополнительный заработок?", 'массаж');
            }
            while (isNumber(itemIncome) || itemIncome === null || itemIncome === '' || itemIncome.trim() === '');

            do {
              cashIncome = prompt ('Какой доход вам это приносит?', '2000');
            }
            while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
          }
          
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Коммуналка, топливо, салон');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let sumImportantExpenses = 0; let importantExpenses = 0;
        for (let i = 0; i < 2; i++) {
          do {
        importantExpenses = prompt('Введите обязательную статью расходов?');
          }
        while (isNumber(importantExpenses) || importantExpenses === null || importantExpenses === '' || importantExpenses.trim() === '');
        sumImportantExpenses = +prompt('Во сколько это обойдется?');
        appData.expenses[importantExpenses]=sumImportantExpenses;  
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
        do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
          }
        while (!isNumber(appData.percentDeposit))
        do {
        appData.moneyDeposit = prompt('Какую сумму Вы заложили?', 10000);
          }
        while (!isNumber(appData.moneyDeposit)) 
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

console.log(appData.addExpenses.map(n => {return n[0].toUpperCase() + n.slice(1)}).join(', '));









