"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");
const [lenJ, lenI] = [+inputData[0], +inputData[2]];

const inputArr1 = convertStrToArr(inputData[1]);
const inputArr2 = convertStrToArr(inputData[3]);

function convertStrToArr(arrStr) {
  return ("0 " + arrStr).split(" ").map((element) => +element);
}

const nopArr = Array(lenI + 1).fill(0);

nopArr.forEach((item, index) => {
  nopArr[index] = [...Array(lenJ + 1).fill(0)];
});

for (let i = 1; i <= lenI; i++) {
  for (let j = 1; j <= lenJ; j++) {
    nopArr[i][j] =
      inputArr1[j] == inputArr2[i]
        ? nopArr[i - 1][j - 1] + 1
        : Math.max(nopArr[i][j - 1], nopArr[i - 1][j]);
  }
}

const result = [];
let i = lenI;
let j = lenJ;

while (i > 0 && j > 0) {
  if (inputArr1[j] == inputArr2[i]) {
    result.push(inputArr1[j]);
    i--;
    j--;
  } else if (nopArr[i - 1][j] == nopArr[i][j]) {
    i--;
  } else {
    j--;
  }
}

fs.writeFileSync("output.txt", result.reverse().join(" ").toString());

console.log(result.join(" "));

//console.log(result);
//process.stdout.write(result.toString() + "\n");
