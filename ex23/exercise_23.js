"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = +data.toString().trim();

const operationArr = [0, inputData];
const prevValue = [0, 0];
const resultArr = [];

let operations = 0;
let i = 1;

if (inputData != 0 && inputData != 1) {
  while (operationArr[i] != 1) {
    const a = operationArr[i];
    let plus = true;

    if (!(a % 3)) {
      operationArr.push(a / 3);
      prevValue.push(i);
      plus = false;
    }
    if (!(a % 2)) {
      operationArr.push(a / 2);
      prevValue.push(i);
      plus = false;
    }
    if (!((a - 1) % 3) || !((a - 1) % 2)) {
      operationArr.push(a - 1);
      prevValue.push(i);
    }

    i++;
  }

  while (prevValue[i] != 0) {
    resultArr.push(operationArr[i]);
    i = prevValue[i];
  }
}

resultArr.push(inputData);
operations = resultArr.length - 1;

fs.writeFileSync(
  "output.txt",
  operations.toString() + "\n" + resultArr.join(" ")
);

console.log(resultArr);
console.log(operationArr);

//process.stdout.write(result.toString() + "\n");
