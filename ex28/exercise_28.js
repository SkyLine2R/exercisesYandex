"use strict";

const [n, m] = require("fs")
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split(" ");

let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

//const dp = Array(+n + 1).fill([Array(+m + 1).fill(0)]);

// Устанавливаем значение 1 для начальной клетки
dp[0][0] = 1;
console.log(dp);
// Обходим каждую клетку в порядке построчного заполнения
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log(dp);

    // Проверяем возможность хода коня на текущую клетку
    if (i - 2 >= 0 && j - 1 >= 0) {
      dp[i][j] += dp[i - 2][j - 1];
    }
    if (i - 1 >= 0 && j - 2 >= 0) {
      dp[i][j] += dp[i - 1][j - 2];
    }
    // Если текущая клетка не является начальной, устанавливаем значение
    // как сумму значений клетки сверху и слева
    if (i != 0 || j != 0) {
      if (i - 1 >= 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j - 1 >= 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
}

// Выводим количество способов добраться до правого нижнего угла
console.log(dp);
console.log(dp[n - 1][m - 1]);

////

/* 




const dpArr = Array(+n + 1).fill([Array(+m + 1).fill(0)]);

console.log(dpArr);

dpArr[2][2] = 1;
let starti = 2;
let startj = 2;

while (starti < n + 1 || startj < m + 1) {
  if (startj == m + 1) starti += 1;
  else startj += 1;

  let i = starti;
  let j = startj;

  while (i <= n + 1 && j >= 2) {
    dpArr[i][j] =
      dpArr[i + 1][j - 2] +
      dpArr[i - 1][j - 2] +
      dpArr[i - 2][j - 1] +
      dpArr[i - 2][j + 1];
    i += 1;
    j -= 1;
  }
}

console.log(dpArr[n + 1][m + 1]);

console.log(n);

const result = 0; //dpArr[lenI - 1][lenJ - 1]; */

//fs.writeFileSync("output.txt", result + "\n" + pathArr.join(" ").toString());

//console.log(result);
//process.stdout.write(result.toString() + "\n");
