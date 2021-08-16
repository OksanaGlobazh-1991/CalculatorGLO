'use strict';

let start = document.getElementById('start'),
    oneButton = document.getElementsByTagName('button')[0],
    twoButton = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    possibleIncome = document.querySelectorAll('.additional_income-item'),
    budgetDayValue = document.getElementsByClassName('result-total budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('result-total expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('result-total additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('result-total additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('result-total income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('result-total target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalIncomeItem1 = document.querySelectorAll('.additional_income-item'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositCheck = document.querySelector('#deposit-check'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0],
    titlePeriodAmount = document.querySelector('.period-amount');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
isNumber();

  
let appData = {
  income: {},
  addIncome: [], //перечислим доп доходы
  expenses: {}, //дополнительные расходы
  addExpenses: [], //возможные расходы
  incomeMonth: 0,
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    if (salaryAmount.value === '') {
      start.removeAttribute(disabled);
    }

    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getIncome();
    appData.getAddIncome();
    appData.getPeriodAmount();
    appData.getBudget();

    appData.showResult();
  },
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(appData.getTargetMonth());
    incomePeriodValue.value = appData.calcSavedMoney();
    periodSelect.addEventListener('change', function() {
      incomePeriodValue.value = appData.calcSavedMoney();
    });

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
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          appData.expenses[itemExpenses] = cashExpenses;
        }
    });
  },
  addIncomeBlock: function(){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, oneButton);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      oneButton.style.display = 'none';
    }
  },
  getIncome: function(){
      incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
          }
      })
      for (let key in appData.income){
        appData.incomeMonth += +appData.income[key]
      }
  },
  getAddExpenses: function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    })
  },
  getAddIncome: function() {
    additionalIncomeItem1.forEach(function(item){
      let itemValue =item.value.trim();
      if (item !== '') {
        appData.addIncome.push(itemValue);
      }
    })
  },   
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    
  },
  getTargetMonth: function () {
    return targetAmount.value/appData.budgetMonth;
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
    appData.deposit = confirm('Есть ли у вас депозит в банке?');

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
    return appData.budgetMonth * periodSelect.value;
  },
  getPeriodAmount: function() {
    titlePeriodAmount.textContent = periodSelect.value;
    
  
  },
};


start.addEventListener('click', appData.start);
twoButton.addEventListener('click', appData.addExpensesBlock);
oneButton.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriodAmount);


// let result = appData.getTargetMonth();
// if (result < 0) {
//   console.log('Цель не будет достигнута');
// } else {
//   console.log(`Цель будет достигнута через ${Math.round(result)}`);
// };












