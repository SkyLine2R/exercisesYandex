"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");

console.log(...inputData[0].split(":"));
let a = new Date(0).setHours(...inputData[0].split(":"));
let b = new Date(0).setHours(...inputData[2].split(":"));
let d = new Date(0).setHours(...inputData[1].split(":"));
console.log("a " + a);
console.log("b " + b);
console.log(new Date(d + (a + b) / 2));
/* let b = new Date(0);
console.log(a);
console.log(inputData[0]);
//console.log(a.getMinutes());
console.log(inputData[1]);
console.log(inputData[2]); */

//fs.writeFileSync("output.txt", result.join("\n").toString() + "\n");

//process.stdout.write(result.join("\n"));
