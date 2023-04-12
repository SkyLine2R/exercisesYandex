"use strict";
const fs = require("fs");
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");
const [j, s] = [...inputData];

const result = s.split("").reduce((sum, item) => {
  console.log(~j.indexOf(item));
  if (j.indexOf(item) !== -1) return sum++;
}, 0);

console.log(result);
fs.writeFileSync("output.txt", result.toString());
