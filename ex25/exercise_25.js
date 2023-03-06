"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");

inputData.shift();
const inputArr = inputData[0].split(" ");
inputArr.forEach((item, index) => (inputArr[index] = +item));
inputArr.sort((a, b) => a - b);

const arrLenght = Array(inputArr.length - 1);

inputArr.push(99999);

console.log(inputArr);

let result = inputArr[1] - inputArr[0];
let i = 2;

while (true) {
  let a = inputArr[i] - inputArr[i - 1];
  let b = inputArr[i + 1] - inputArr[i];
  let c = inputArr[i + 2] - inputArr[i + 1];
  if (i == inputArr.length - 2) {
    result += a;
    break;
  }
  if (a <= b && c <= a + b) {
    result += a;
    i++;
  } else if (b < a) {
    result += b;
    i += 2;
    if (i >= inputArr.length - 2) break;
  } else {
    result = result + b + c;
    i += 3;
    if (i >= inputArr.length - 2) break;
  }
}

console.log(result);

/* 
for (let i = 2; i < inputArr.length - 1; i++) {
  arrLenght[i - 2] = inputArr[i] - inputArr[i - 1];
}
arrLenght.push(Infinity);
arrLenght.unshift(Infinity);

console.log(inputArr);
console.log(arrLenght);

let connect = false;

let i = 2;
let result = arrLenght[1];
while (i < arrLenght.length - 1) {
  if (arrLenght[i] < arrLenght[i + 1]) {
    result += arrLenght[i];
    i++;
    console.log("connect 1");
    //console.log(arrLenght[i]);
  } else {
    console.log("connect 2");
    result += arrLenght[i + 1];
    i += 2;
  }
} */

//let path = inputArr[0] + inputArr[1];

//const result = inputArr;

//fs.writeFileSync("output.txt", result.toString());

//console.log(result);
//process.stdout.write(result.toString() + "\n");