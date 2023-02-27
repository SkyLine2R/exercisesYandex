"use strict";
console.time("test");
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");

let matrixSizes = data.shift().split(" ");
const prefixMatrix = data.slice(0, +matrixSizes[0]);
const inputRequests = data.slice(
  +matrixSizes[0],
  +matrixSizes[0] + +matrixSizes[2]
);

prefixMatrix.forEach((item, index) => {
  prefixMatrix[index] = item.trim().split(" ");
});

prefixMatrix.unshift(Array(prefixMatrix[0].length).fill(0));
prefixMatrix.forEach((item) => item.unshift(0));

for (let i = 0; i < prefixMatrix.length; i++) {
  for (let j = 0; j < prefixMatrix[i].length; j++) {
    prefixMatrix[i][j] = +prefixMatrix[i][j];
  }
}

inputRequests.forEach((item, index) => {
  inputRequests[index] = item.trim().split(" ");
});

for (let i = 0; i < inputRequests.length; i++) {
  for (let j = 0; j < inputRequests[i].length; j++) {
    inputRequests[i][j] = +inputRequests[i][j];
  }
}

for (let i = 2; i < prefixMatrix[0].length; i++) {
  prefixMatrix[1][i] = prefixMatrix[1][i] + prefixMatrix[1][i - 1];
}
for (let i = 2; i < prefixMatrix.length; i++) {
  prefixMatrix[i][1] = prefixMatrix[i][1] + prefixMatrix[i - 1][1];

  for (let j = 2; j < prefixMatrix[0].length; j++) {
    prefixMatrix[i][j] =
      prefixMatrix[i][j] +
      prefixMatrix[i][j - 1] +
      prefixMatrix[i - 1][j] -
      prefixMatrix[i - 1][j - 1];
  }
}

let answer = inputRequests.map((item) => {
  return amountInRectangle(...item);
});

fs.writeFileSync("output.txt", answer.join(" ") + "\n");

function amountInRectangle(x1, y1, x2, y2) {
  let result =
    prefixMatrix[x2][y2] -
    prefixMatrix[x2][y1 - 1] -
    prefixMatrix[x1 - 1][y2] +
    prefixMatrix[x1 - 1][y1 - 1];
  return result;
}
//process.stdout.write(answer.join(" ") + "\n");
console.timeEnd("test");

/* let answer = amountInRectangle(1, 1, 2, 1);
 */
