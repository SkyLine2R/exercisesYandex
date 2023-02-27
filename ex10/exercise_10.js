"use strict";
const fs = require("fs");
const str = fs.readFileSync("input.txt", "utf8").toString().trim();

const strLen = str.length;
const abcObj = {};
for (let i = 0; i < strLen; i++) {
  Object.hasOwn(abcObj, str[i])
    ? (abcObj[str[i]] = abcObj[str[i]] + (i + 1) * (strLen - i))
    : (abcObj[str[i]] = (i + 1) * (strLen - i));
}

const result = Object.entries(abcObj)
  .sort()
  .map((item) => item.join(": "))
  .join("\n");

fs.writeFileSync("output.txt", result + "\n");

process.stdout.write(result + "\n");
