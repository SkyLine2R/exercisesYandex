"use strict";
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");

let matrixSizes = data.shift().split(" ");

const inputMatrix = data.slice(0, +matrixSizes[0]);
const inputRequests = data.slice(
  +matrixSizes[0],
  +matrixSizes[0] + matrixSizes[2]
);

inputMatrix.forEach((item, index) => {
  inputMatrix[index] = item.trim().split(" ");
});

inputRequests.forEach((item, index) => {
  inputRequests[index] = item.trim().split(" ");
});

const prefixMatrix = Array.from(
  Array(inputMatrix.length),
  () => new Array(inputMatrix[0].length)
);
prefixMatrix[0][0] = +inputMatrix[0][0];

for (let i = 1; i < inputMatrix[0].length; i++) {
  prefixMatrix[0][i] = +inputMatrix[0][i] + +prefixMatrix[0][i - 1];
}
for (let i = 1; i < inputMatrix.length; i++) {
  prefixMatrix[i][0] = +inputMatrix[i][0] + +prefixMatrix[i - 1][0];
}

for (let i = 1; i < inputMatrix.length; i++) {
  for (let j = 1; j < inputMatrix[0].length; j++) {
    prefixMatrix[i][j] =
      +inputMatrix[i][j] +
      +prefixMatrix[i][j - 1] +
      +prefixMatrix[i - 1][j] -
      +prefixMatrix[i - 1][j - 1];
  }
}

let answer = amountInRectangle(2, 2, 2, 3);

/* let answer = inputRequests.reduce((prev, item) => {
  return prev.trim() + " " + amountInRectangle(...item);
}, ""); */

function amountInRectangle(x1, y1, x2, y2) {
  let result = //случай когда запрос не в нулевой области
    prefixMatrix[y2 - 1][x2 - 1] -
    prefixMatrix[y1 - 1 - 1][x2 - 1] -
    prefixMatrix[y2 - 1][x1 - 1 - 1] +
    prefixMatrix[y1 - 1 - 1][x1 - 1 - 1];
  return result;
  /*   for (let i = y1 - 1; i < y2 - 1; i++) {
    for (let j = x1 - 1; i < x2 - 1; j++) {
      let result = 
    }
  } */
}

console.log(prefixMatrix);

/* 
for (let i = 0; i < +matrixSizes[0]; i++) {
  inputMatrix.push(data[i].split(" "));
  for (let j = 0; j < +matrixSizes[1]; j++) {
    inputMatrix[i][j] = +inputMatrix[i][j];
  }
} */

//console.log(inputMatrix);
console.log(answer);

//data.length = data.shift();

/* data.forEach((item, index) => {
  data[index] = [...item.split(" ")];
  data[index] = [+data[index][0], +data[index][1]];
}); */

//console.log(answer);
//const inputData = data.map((item) => item.split(" "));

//fs.writeFileSync("output.txt", result + "\n");

//process.stdout.write(answer + "\n");
