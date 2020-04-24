"use strict";
let money, time;

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

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = +prompt("Во сколько обойдется?", "");

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

if (appData.moneyPerDay < 200 || appData.moneyPerDay == 200) {
  console.log("Уровень достатка ниже среднего.");
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 500) {
  console.log("Средний уровень достатка.");
} else if (appData.moneyPerDay > 499) {
  console.log("Высокий уровень достатка.");
} else {
  console.log("Проверка не пройдена!");
}

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?", ""),
      percent = +prompt("Каков процент в год?", "");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Ваш доход с накоплений в месяц =" + appData.monthIncome.toFixed(2));
  }
}
checkSavings();
