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

let num = 50;

if (num < 49) {
  console.log("Fasle");
} else if (num > 100) {
  console.log("A lot!");
} else {
  console.log("True");
}
num == 50 ? console.log("Верно") : console.log("False");

switch (num) {
  case num < 49:
    console.log("Fasle");
    break;

  case num > 100:
    console.log("A lot!");
    break;

  default:
    console.log("True");
    break;
}

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    break; //continue - пропустити крок
  }
  console.log(i);
}
