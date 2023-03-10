"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");
const [lenI, lenJ] = [...inputData.shift().split(" ")];

const dpArr = inputData.reduce((prevItem, item) => {
  let arr = item.split(" ").map((element) => +element);
  prevItem.push(arr);
  return prevItem;
}, []);

for (let j = 1; j < lenJ; j++) {
  dpArr[0][j] += dpArr[0][j - 1];
}
for (let i = 1; i < lenI; i++) {
  dpArr[i][0] += dpArr[i - 1][0];
}

for (let i = 1; i < lenI; i++) {
  for (let j = 1; j < lenJ; j++) {
    dpArr[i][j] += Math.min(dpArr[i - 1][j], dpArr[i][j - 1]);
  }
}

const result = dpArr[lenI - 1][lenJ - 1];

fs.writeFileSync("output.txt", result.toString());

console.log(result);
//process.stdout.write(result.toString() + "\n");
