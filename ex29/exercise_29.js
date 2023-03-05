"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");

inputData.forEach((item, index) => (inputData[index] = +item));

const days = inputData.shift() + 1;
inputData.unshift(0);
let cupons = 0;

const dpArr = Array(days);

dpArr[0] = [0];

const result = dpArr;

//fs.writeFileSync("output.txt", result.reverse().join(" ").toString());

console.log(result);

//console.log(result);
//process.stdout.write(result.toString() + "\n");
