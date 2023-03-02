"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");

inputData.shift();
const inputArr = inputData[0].split(" ");
inputArr.forEach((item, index) => (inputArr[index] = +item));
inputArr.sort((a, b) => a - b);

const arrLenght = Array(inputArr.length + 1);

console.log(arrLenght);

arrLenght[1] = inputArr[2] - inputArr[1];

for (let i = 3; i < inputArr.length; i++) {
  arrLenght[i - 1] = inputArr[i] - inputArr[i - 1];
}

arrLenght[arrLenght.length - 1] = Infinity;

arrLenght.shift(Infinity);

console.log(inputArr);
console.log(arrLenght);

let result = arrLenght[0];
let connect = false;
for (let i = 0; i < arrLenght.length - 1; i++) {
  if (arrLenght[i] < arrLenght[i - 1]) {
    result += arrLenght[i];
    console.log("connect 1");
    console.log(arrLenght[i]);
  } else {
    if (i != 0) {
      console.log("connect 2");
      console.log(arrLenght[i - 1]);
      result += arrLenght[i - 1];
    } else result += arrLenght[i];
  }
}

//let path = inputArr[0] + inputArr[1];

//const result = inputArr;

//fs.writeFileSync("output.txt", result.toString());

console.log(result);
//process.stdout.write(result.toString() + "\n");
