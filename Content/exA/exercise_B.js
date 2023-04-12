"use strict";
const fs = require("fs");
const str = fs.readFileSync("input.txt", "utf8").toString().trim();

const [a, b] = [...str.match(/[-\d]+/g)];

let result = +a + +b;

fs.writeFileSync("output.txt", result.toString());
console.log(result);
