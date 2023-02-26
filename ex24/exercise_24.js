"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");
inputData.shift();

if (!inputData[inputData.length - 1]) {
  inputData.pop();
}
const timeQueue = inputData.reduce((prevItem, item) => {
  let arr = item.split(" ").map((element) => +element);
  prevItem.push(arr);
  return prevItem;
}, []);

const resultArr = Array(timeQueue.length);

for (let i = 0; i < 3; i++) {
  timeQueue.unshift(Array(3).fill(Infinity));
  resultArr.unshift(0);
}

for (let i = 3; i < timeQueue.length; i++) {
  resultArr[i] = Math.min(
    +resultArr[i - 1] + timeQueue[i][0],
    +resultArr[i - 2] + timeQueue[i - 1][1],
    +resultArr[i - 3] + timeQueue[i - 2][2]
  );
}

const result = resultArr[resultArr.length - 1];

fs.writeFileSync("output.txt", result.toString());
console.log(resultArr);

console.log(result);
//process.stdout.write(result.toString() + "\n");
