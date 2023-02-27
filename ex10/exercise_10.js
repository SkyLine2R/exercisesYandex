"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");
const inputData = data[0].trim();

const result = resultArr.join("\n");

//fs.writeFileSync("output.txt", result + "\n");

process.stdout.write(result + "\n");
