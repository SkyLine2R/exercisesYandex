"use strict";
const fs = require("fs");
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");

const dpArr = [];
const arrLength = inputData.shift();
const inputArr = inputData[0].split(" ");

inputArr.forEach((item, index) => (inputArr[index] = +item));
inputArr.sort((a, b) => a - b);

if (arrLength != 2) {
  dpArr[1] = inputArr[1] - inputArr[0];
  dpArr[2] = inputArr[2] - inputArr[0];

  for (let i = 3; i < arrLength; i++) {
    dpArr[i] =
      Math.min(dpArr[i - 1], dpArr[i - 2]) + inputArr[i] - inputArr[i - 1];
  }
} else {
  dpArr[dpArr.length - 1] = inputArr[1] - inputArr[0];
}

fs.writeFileSync("output.txt", dpArr[dpArr.length - 1].toString());

console.log(dpArr[dpArr.length - 1].toString());
//process.stdout.write(result.toString() + "\n");
