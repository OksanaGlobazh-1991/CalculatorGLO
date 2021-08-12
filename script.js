'use strict';

let start = document.getElementById('start'),
    oneButton = document.getElementsByTagName('button')[0],
    twoButton = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    possibleIncome = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('result-total budget_day-value'),
    expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value'),
    additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value'),
    incomePeriodValue = document.getElementsByClassName('result-total income_period-value'),
    targetMonthValue = document.getElementsByClassName('result-total target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    additionalIncomeItem1 = document.querySelector('.additional_income-item'),
    additionalIncomeItem2 = document.querySelector('.additional_income-item'[1]),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositCheck = document.querySelector('#deposit-check'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    budgetMonthValue = document.querySelector('.result-total budget_month-value');


let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
isNumber();

  
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
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {

    if (salaryAmount.value === '') {
      alert('Ошибка, поле "Месячный доход" должно быть заполнено');
      return;
    }
    appData.budget = salaryAmount.value;

    appData.getExpenses();
    // appData.asking();
    // appData.getExpensesMonth();
    // appData.getBudget();
  },
  addExpensesBlock: function () {

    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, twoButton);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      twoButton.style.display = 'none';
    }
  },
  getExpenses: function(){
    expensesItems.forEach(function(item) {
      console.log(item);
    });
  },
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

start.addEventListener('click', appData.start);
twoButton.addEventListener('click', appData.addExpensesBlock);



// let result = appData.getTargetMonth();
// if (result < 0) {
//   console.log('Цель не будет достигнута');
// } else {
//   console.log(`Цель будет достигнута через ${Math.round(result)}`);
// };












