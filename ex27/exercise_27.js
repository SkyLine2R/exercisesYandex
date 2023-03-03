"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");
const [lenI, lenJ] = [...inputData.shift().split(" ")];

const inputArr = inputData.reduce((prevItem, item) => {
  let arr = item.split(" ").map((element) => +element);
  prevItem.push(arr);
  return prevItem;
}, []);

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
    dpArr[i][j] += Math.max(dpArr[i - 1][j], dpArr[i][j - 1]);
  }
}
const pathArr = [];
let i = lenI - 1;
let j = lenJ - 1;
let stop = false;

while (!stop) {
  if (j > 0 && dpArr[i][j] - inputArr[i][j] == dpArr[i][j - 1]) {
    pathArr.push("R");
    j--;
  }
  if (i > 0 && dpArr[i][j] - inputArr[i][j] == dpArr[i - 1][j]) {
    pathArr.push("D");
    i--;
  }
  if (i == 0 && j == 0) stop = true;
}
pathArr.reverse();

const result = dpArr[lenI - 1][lenJ - 1];

fs.writeFileSync("output.txt", result + "\n" + pathArr.join(" ").toString());

console.log(result);
//process.stdout.write(result.toString() + "\n");
