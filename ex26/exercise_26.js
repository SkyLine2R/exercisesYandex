"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");
const [lenI, lenJ] = [...inputData.shift().split(" ")];

const dpArr = inputData.reduce((prevItem, item) => {
  let arr = item.split(" ").map((element) => +element);
  prevItem.push([Infinity, ...arr]);
  return prevItem;
}, []);
//dpArr.unshift(Array(dpArr[0].length).fill(Infinity));
console.log(dpArr);

for (let j = 2; j < lenJ; j++) {
  dpArr[1][j] += dpArr[1][j - 1];
}

for (let i = 2; i < lenI; i++) {
  for (let j = 1; j < lenJ; j++) {
    console.log(Math.min(dpArr[i - 1][j], dpArr[i][j - 1]));
    //console.log(dpArr[i - 1][j] + "  " + dpArr[i][j - 1]);

    dpArr[i][j] += Math.min(dpArr[i - 1][j] || 999, dpArr[i][j - 1] || 999);
  }
}

console.log(dpArr);

//const resultArr = Array(timeQueue.length);

const result = resultArr[resultArr.length - 1];

//fs.writeFileSync("output.txt", result.toString());
//console.log(resultArr);

//console.log(result);
//process.stdout.write(result.toString() + "\n");
