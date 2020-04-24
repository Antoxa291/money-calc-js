"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};

let e1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  e2 = +prompt("Во сколько обойдется?", ""),
  e3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  e4 = +prompt("Во сколько обойдется?", "");

// console.log(appData.expenses[a1]);
// console.log(appData.expanses[a3]);

appData.expenses[e1] = e2;
appData.expenses[e3] = e4;

alert(appData.budget / 30);
