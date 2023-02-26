"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n")[0];

let x1 = 0;
let x2 = 0;
let x3 = 0;

const arr = [0, 0, 0];
const resultArr = [1];

while (Math.min(...arr)<inputData) {
  let lastResult = resultArr[length - 1];
  arr[0] = lastResult + 1;
  arr[1] = lastResult * 2;
  arr[2] = lastResult * 3;
  if (arr.includes(inputData)) {
    resultArr.push(inputData);
    break;
  }
  if (Math.max(...arr))
}

const result = inputData;

fs.writeFileSync("output.txt", result.toString() + "\n");

console.log(result);

//process.stdout.write(result.toString() + "\n");
