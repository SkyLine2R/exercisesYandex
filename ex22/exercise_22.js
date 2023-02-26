"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n")[0].split(" ");

const maxStep = +inputData[1] > +inputData[0] ? +inputData[0] : +inputData[1];

const arr = Array(+inputData[0]);

arr[0] = 0;
arr[1] = 1;

const endI = maxStep < arr.length ? maxStep + 1 : maxStep;

for (let i = 2; i < endI; i++) {
  arr[i] = 1;
  let endJ = i - maxStep < 0 ? 0 : i - maxStep;
  for (let j = i - 1; j > endJ; j--) {
    arr[i] += arr[j];
  }
}

for (let i = 1 + maxStep; i < arr.length; i++) {
  let summ = 0;
  for (let j = i - 1; j > i - maxStep - 1; j--) {
    summ += arr[j];
  }
  arr[i] = summ;
}

const result = arr[arr.length - 1];

fs.writeFileSync("output.txt", result.toString() + "\n");

process.stdout.write(result.toString() + "\n");
