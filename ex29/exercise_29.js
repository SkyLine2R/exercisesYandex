"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");

const days = +inputData.shift();
console.log("days " + days);

inputData.forEach(
  (item, index) =>
    (inputData[index] = [+item, ...Array(~~(days / 2) + 2).fill(Infinity)])
);
inputData.unshift([...Array(~~(days / 2) + 3).fill(inputData[0][0])]);

let cupons = 0;
const cuponsDays = [];
for (let i = 1; i <= days; i++) {
  for (let j = 1; j <= cupons + 1; j++) {
    inputData[i][j] = Math.min(
      inputData[i - 1][j] + inputData[i][0],
      inputData[i - 1][j + 1]
    );
    /*     if (inputData[i][j] == inputData[i - 1][j + 1]) {
      cuponsDays.push(i);
    } */
  }
  if (inputData[i][0] > 100) {
    cupons++;
    inputData[i][cupons + 1] = inputData[i][cupons];
  }
}

let minSumm = Math.min(...inputData[inputData.length - 1].slice(1));
let cuponsRest = inputData[inputData.length - 1].lastIndexOf(minSumm) - 1;

let col = cuponsRest + 1;
let finCupons = 0;
for (let i = inputData.length - 1; i > 1; i--) {
  console.log("i " + i);
  console.log("col " + col);
  console.log("inputData[i][col] " + inputData[i][col]);
  console.log(
    "inputData[i - 1][col] - inputData[i][0] " +
      (inputData[i - 1][col] + inputData[i][0])
  );

  if (inputData[i][col] != inputData[i - 1][col] + inputData[i][0]) {
    cuponsDays.push(i);
    finCupons++;
    col--;
  }
  if (col < 1) break;
}

console.log(
  inputData.reduce((prev, item) => prev + item.join(" ") + "\n"),
  ""
);
console.log("input data " + inputData[1]);
console.log("cuponsDays " + cuponsDays);
console.log("cuponsRest " + cuponsRest);
console.log("finCupons " + finCupons);
console.log("minSumm " + minSumm);
//const dpArr = Array(days);

//dpArr[0] = [0];

const result = inputData;

//fs.writeFileSync("output.txt", result.reverse().join(" ").toString());

//console.log(result);

//console.log(result);
//process.stdout.write(result.toString() + "\n");
