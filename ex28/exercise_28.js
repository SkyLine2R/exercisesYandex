"use strict";

const [n, m] = require("fs")
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split(" ");

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

const result = 0; //dpArr[lenI - 1][lenJ - 1];

//fs.writeFileSync("output.txt", result + "\n" + pathArr.join(" ").toString());

console.log(result);
//process.stdout.write(result.toString() + "\n");
