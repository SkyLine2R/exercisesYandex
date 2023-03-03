"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().trim().split("\n");

const binSet = new Set();
const binSetOne = new Set();

let str = "";
for (let i = 0; i < 10000000; i++) {
  for (let j = 0; j < 7; j++) {
    str += Math.round(Math.random());
  }
  if (!~str.indexOf("111")) binSet.add(str);
  else binSetOne.add(str);
  str = "";
}

console.log(binSet);
console.log("Комбинаций без 111");
console.log(binSet.size);
console.log("Комбинаций с 111 - ");
console.log(binSetOne.size);
console.log(binSetOne);

//const result = arr[arr.length - 1];

//fs.writeFileSync("output.txt", result.toString() + "\n");

//process.stdout.write(result.toString() + "\n");
