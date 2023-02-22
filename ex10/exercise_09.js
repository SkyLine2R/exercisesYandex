"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");
const lenghtArr = data.shift();
const inputData = data.map((item) => item.split(" "));
const resultArr = Array(4);

const findArr = inputData.sort((a, b) => a[0] - b[0]);
resultArr[0] = +findArr[0][0];
resultArr[2] = +findArr[lenghtArr - 1][0];

findArr.sort((a, b) => a[1] - b[1]);

resultArr[1] = +findArr[0][1];
resultArr[3] = +findArr[lenghtArr - 1][1];

const result = resultArr.join(" ");

fs.writeFileSync("output.txt", result + "\n");

process.stdout.write(result + "\n");
