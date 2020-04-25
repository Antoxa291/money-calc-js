"use strict";
let money, time;

// Определяет бюджет и дату
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  time = prompt("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
};

// Определяет расходы
function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
      b = +prompt("Во сколько Вам обойдется это?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
    } else {
      alert("Введено не допустимое значение, попробуйте еще раз.");
      i--;
    }
  }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(2);
alert("Ежедневный бюджет" + appData.moneyPerDay);

// Определяет уровень достатка
function detectLevel() {
  if (appData.moneyPerDay < 200 || appData.moneyPerDay == 200) {
    alert("Уровень достатка ниже среднего.");
  } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 500) {
    alert("Средний уровень достатка.");
  } else if (appData.moneyPerDay > 499) {
    alert("Высокий уровень достатка.");
  } else {
    console.log("Проверка не пройдена!");
  }
}
detectLevel();

// Определяет депозит
function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
      percent = +prompt("Каков процент в год?", "");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Ваш доход с накоплений в месяц =" + appData.monthIncome.toFixed(2));
  }
}
checkSavings();

// определения необязательных расходов
function chooseOptExpenses(params) {
  for (i = 0; i < 3; i++) {
    let a = prompt("Введите статью необязательных расходов в этом месяце:", ""),
      b = +prompt("Во сколько Вам обойдется это?", "");
    
    if ( 
      typeof a === 'string' 
      && typeof a != null
      && typeof b != null
      && a != ''
      && b != ''
      && a.length < 50
    ) {
      appData.optionalExpenses[a] = b;
    } else {
      alert("Введено не допустимое значение, попробуйте еще раз.");
      i--;
  }
}
  chooseOptExpenses();