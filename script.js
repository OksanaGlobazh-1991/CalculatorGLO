'use strict';

const start = document.getElementById('start'),
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
      incomeTitle = document.querySelector('.income-title');
  let incomeItems = document.querySelectorAll('.income-items');
const additionalIncomeItem1 = document.querySelectorAll('.additional_income-item'),
      expensesTitle = document.querySelector('.expenses-title');
  let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      depositCheck = document.querySelector('#deposit-check'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select'),
      budgetMonthValue = document.getElementsByClassName('result-total budget_month-value')[0],
      titlePeriodAmount = document.querySelector('.period-amount'),
      cancel = document.getElementById('cancel');
  let result = document.querySelectorAll('.result input[type=text]'),
      depositBank = document.querySelector('.deposit-bank'),
      depositAmount = document.querySelector('.deposit-amount'),
      depositPercent = document.querySelector('.deposit-percent');
    

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
isNumber();

  
class AppData {
    constructor() {
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
  }

  start (){
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
    this.getInfoDeposit();
    this.getBudget();
  
    this.showResult();
  }

  showResult (){
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
  }

  reset (){

    const inputAllLeftsecond = document.querySelectorAll('.data input[type=text]');
            inputAllLeftsecond.forEach(function(elem){
              elem.value = '';
              elem.removeAttribute('disabled');
            })
      
      for (let i = 1; i < incomeItems.length; i++)
      incomeItems[i].parentNode.removeChild(incomeItems[i]);
      oneButton.style.display = 'block';
      
      for (let i = 1; i < expensesItems.length; i++)
      expensesItems[i].parentNode.removeChild(expensesItems[i]);
      twoButton.style.display = 'block';
      
      periodSelect.value = 0;
      titlePeriodAmount.innerHTML = periodSelect.value;
            
        let result = document.querySelectorAll('.result input[type=text]');
            result.forEach(function(elem) {
              elem.value = '';
            })

      depositAmount.style.display = 'none';
      depositBank.style.display = 'none';
      depositPercent.style.display = 'none';

      cancel.style.display = 'none';        
      start.style.display = 'block';
  }
  
  addExpensesBlock (){

    let cloneExpensesItems = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItems, twoButton);
    expensesItems = document.querySelectorAll('.expenses-items');
  
    if (expensesItems.length === 3) {
      twoButton.style.display = 'none';
    }
  }

  getExpenses (){
    const _this = this;
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
          _this.expenses[itemExpenses] = cashExpenses;
        }
    });
  }

  addIncomeBlock (){
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, oneButton);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      oneButton.style.display = 'none';
    }
  }

  getIncome (){
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
  }

  getAddExpenses (){
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== '') {
        _this.addExpenses.push(item);
      }
    })
  }

  getAddIncome (){
    const _this = this;
    additionalIncomeItem1.forEach(function(item){
      let itemValue =item.value.trim();
      if (item !== '') {
        _this.addIncome.push(itemValue);
      }
    })
  }
  
  getExpensesMonth (){
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }

  getBudget (){
    const _this = this;
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    _this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    _this.budgetDay = Math.floor(this.budgetMonth / 30);
    
  }
  
  getTargetMonth (){
    return targetAmount.value/this.budgetMonth;
  }

  getStatusIncome (){
    if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (this.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay < 0) {
      return ('Что то пошло не так');
    };
  }

  calcSavedMoney (){
    return this.budgetMonth * periodSelect.value;
  }

  getPeriodAmount (){
    titlePeriodAmount.textContent = periodSelect.value;
  }

  getInfoDeposit (){
    if (this.deposit) 
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;

  }

  changePercent (){
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
      depositPercent.addEventListener('input', function() {
      if (!isNumber(depositPercent.value) || depositPercent.value > 100 || depositPercent.value < 0) {
        alert('Введите корректное значение в поле проценты'); 
        start.disabled = true; 
      } else {
        start.disabled = false;
      }
      }) 
    } else {
      depositPercent.value = valueSelect;
 
    } 

  }
  depositHandler (){
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);

    }
  }

  eventsListeners (){
    start.addEventListener('click', this.start.bind(appData));
    twoButton.addEventListener('click', this.addExpensesBlock);
    oneButton.addEventListener('click', this.addIncomeBlock);
    periodSelect.addEventListener('input', this.getPeriodAmount);
    cancel.addEventListener('click', this.reset.bind(appData));
    depositCheck.addEventListener('change', this.depositHandler.bind(appData));
  }

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











