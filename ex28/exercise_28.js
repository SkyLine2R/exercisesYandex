"use strict";

const [n, m] = require("fs")
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split(" ");

const dpArr = [Array(m + 1).fill(0)];

console.log(dpArr);

st;

console.log(n);

const result = 0; //dpArr[lenI - 1][lenJ - 1];

//fs.writeFileSync("output.txt", result + "\n" + pathArr.join(" ").toString());

console.log(result);
//process.stdout.write(result.toString() + "\n");
