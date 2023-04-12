"use strict";
const fs = require("fs");
const [a, b] = [
  ...fs.readFileSync("input.txt", "utf8").toString().trim().split(" "),
];

let result = +a + +b;

console.log(result);
fs.writeFileSync("output.txt", result.toString());
