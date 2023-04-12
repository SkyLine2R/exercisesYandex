"use strict";
const sum = (a, b) => +a + +b;

process.stdin.on("data", (data) => {
  let result = 0;
  result = sum(...data.toString().split(" "));
  process.stdout.write(result.toString());
  process.exit();
});
