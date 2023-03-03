"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = +data.toString().trim().split("\n");

const triArr = [0, 0, 1];

for (let i = 0; i <= inputData; i++) {
  let num = 0;
  for (let j = 0; j < 3; j++) {
    num += triArr[j];
  }
  [triArr[0], triArr[1], triArr[2]] = [triArr[1], triArr[2], num];
}

const result = inputData ? triArr[triArr.length - 1] : 0;

fs.writeFileSync("output.txt", result.toString() + "\n");

process.stdout.write(result.toString() + "\n");
