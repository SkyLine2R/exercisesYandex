"use strict";
/* const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output }); */

const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
const train = data.toString().split("\n")[1].split(" ");
const trainLenght = train.length;
const stackArr = [];

let trainOut = 0;
let number = 1;

stackArr.push(train[number - 1]);
let working = true;

while (working) {
  working = false;
  if (trainOut + 1 == stackArr[stackArr.length - 1] && stackArr.length) {
    stackArr.pop();
    trainOut++;
    working = true;
  } else if (number < trainLenght) {
    stackArr.push(train[number]);
    number++;
    working = true;
  }
}

let result = trainOut == train.length ? "YES" : "NO";

fs.writeFileSync("output.txt", result.toString());

process.stdout.write(result.toString());

/* stack.on("line", (postfixStr) => {
  process.stdout.write(countPostfix(postfixStr) + "\n");
  //process.exit();
}); */
/* 
stack.on("line", (data) => {
  process.stdout.write(data + "\n");
});
 */
