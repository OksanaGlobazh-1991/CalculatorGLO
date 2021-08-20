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
    titlePeriodAmount = document.querySelector('.period-amount'),
    cancel = document.getElementById('cancel'),
    result = document.querySelectorAll('.result input[type=text]');
    

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
isNumber();

  
const AppData = function(){

  this.income = {};
  this.addIncome = []; //перечислим доп доходы
  this.expenses = {}; //дополнительные расходы
  this.addExpenses = []; //возможные расходы
  this.incomeMonth = 0;
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function(){
  if (salaryAmount.value === '') {
    start.removeAttribute('disabled');
    return
  }
  this.budget = +salaryAmount.value;
  
  const inputAllLeft = document.querySelectorAll('.data input[type=text]');
          inputAllLeft.forEach(function(item){
            item.setAttribute('disabled', true);
      })
  oneButton.setAttribute('disabled', true);
  twoButton.setAttribute('disabled', true);

  start.style.display = 'none';
  cancel.style.display = 'block';

  
  this.getExpenses();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getIncome();
  this.getAddIncome();
  this.getPeriodAmount();
  this.getBudget();

  this.showResult();
};
AppData.prototype.showResult = function(){
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcSavedMoney();
  periodSelect.addEventListener('change', function() {
    incomePeriodValue.value = this.calcSavedMoney();
  });
  
  console.log('this: ', this);
  
};
AppData.prototype.reset = function(){

  const inputAllLeftsecond = document.querySelectorAll('.data input[type=text]');
          inputAllLeftsecond.forEach(function(elem){
            elem.value = '';
          })

          oneButton.style.display = 'none';
          twoButton.style.display = 'none';
          periodSelect.value = 0;
          titlePeriodAmount.innerHTML = periodSelect.value;
          
        result = document.querySelectorAll('.result input[type=text]');
          result.forEach(function(elem) {
            elem.value = '';

          })

};
AppData.prototype.addExpensesBlock = function () {

  const cloneExpensesItems = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItems, twoButton);
  expensesItems = document.querySelectorAll('.expenses-items');

  if (expensesItems.length === 3) {
    twoButton.style.display = 'none';
  }
};
AppData.prototype.getExpenses = function(){
  const _this = this;
  expensesItems.forEach(function(item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        _this.expenses[itemExpenses] = cashExpenses;
      }
  });
};
AppData.prototype.addIncomeBlock = function(){
  const cloneIncomeItems = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItems, oneButton);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    oneButton.style.display = 'none';
  }
};
AppData.prototype.getIncome = function(){
  const _this = this;
    incomeItems.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
          _this.income[itemIncome] = cashIncome;
        }
    })
    for (let key in this.income){
      this.incomeMonth += +this.income[key]
    }
};
AppData.prototype.getAddExpenses = function(){
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function(item){
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  })
};
AppData.prototype.getAddIncome = function() {
  const _this = this;
  additionalIncomeItem1.forEach(function(item){
    let itemValue =item.value.trim();
    if (item !== '') {
      _this.addIncome.push(itemValue);
    }
  })
};   
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
AppData.prototype.getBudget = function () {
  const _this = this;
  _this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  _this.budgetDay = Math.floor(this.budgetMonth / 30);
  
};
AppData.prototype.getTargetMonth = function () {
  return targetAmount.value/this.budgetMonth;
}; 
AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (this.budgetDay >= 600) {
    return ('У вас средний уровень дохода');
  } else if (this.budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (this.budgetDay < 0) {
    return ('Что то пошло не так');
  };
};
AppData.prototype.getInfoDeposit = function () {
  const _this = this;
  _this.deposit = confirm('Есть ли у вас депозит в банке?');

  if(_this.deposit) {
      do {
      _this.percentDeposit = prompt('Какой годовой процент?', '10');
        }
      while (!isNumber(this.percentDeposit))
      do {
      _this.moneyDeposit = prompt('Какую сумму Вы заложили?', 10000);
        }
      while (!isNumber(this.moneyDeposit)) 
  }   
};
AppData.prototype.calcSavedMoney = function() {
  return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getPeriodAmount = function() {
  titlePeriodAmount.textContent = periodSelect.value;
  

};

AppData.prototype.eventsListeners = function(){
  
  start.addEventListener('click', this.start.bind(appData));
  twoButton.addEventListener('click', this.addExpensesBlock);
  oneButton.addEventListener('click', this.addIncomeBlock);
  periodSelect.addEventListener('input', this.getPeriodAmount);
  cancel.addEventListener('click', this.reset);

};


const appData = new AppData();

console.log(appData);

appData.eventsListeners();




// let result = appData.getTargetMonth();
// if (result < 0) {
//   console.log('Цель не будет достигнута');
// } else {
//   console.log(`Цель будет достигнута через ${Math.round(result)}`);
// };











