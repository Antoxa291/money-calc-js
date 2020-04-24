"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};
// .................FOR..................
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
// ..........WHILE..........
// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//   b = +prompt("Во сколько обойдется?", "");
//   if (typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50) {
//     appData.expenses[a] = b;
//   } else {
//     alert("Введено не допустимое значение, попробуйте еще раз.");
//     i--;
//   }
//     i++;
//   }

// ...........DO...WHILE....................
// let i = 1;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//     b = +prompt("Во сколько обойдется?", "");
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     appData.expenses[a] = b;
//   } else {
//     alert("Введено не допустимое значение, попробуйте еще раз.");
//     i--;
//   }
//   i++;
// } while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет" + appData.moneyPerDay);

if (appData.moneyPerDay < 10000 || appData.moneyPerDay == 10000) {
  console.log("Уровень достатка ниже среднего.");
} else if (appData.moneyPerDay > 10000 && appData.moneyPerDay < 20000) {
  console.log("Средний уровень достатка.");
} else if (appData.moneyPerDay > 20000) {
  console.log("Высокий уровень достатка.");
} else {
  console.log("Проверка не пройдена!");
}
