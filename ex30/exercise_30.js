"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");
const [lenI, lenJ] = [inputData[0], inputData[2]];

const inputArr1 = convertStrToArr(inputData[1]);
const inputArr2 = convertStrToArr(inputData[3]);

//const result = dpArr[lenI - 1][lenJ - 1];

//fs.writeFileSync("output.txt", pathArr.join(" ").toString());
function convertStrToArr(arrStr) {
  return arrStr.split(" ").map((element) => +element);
}
//console.log(result);
//process.stdout.write(result.toString() + "\n");
