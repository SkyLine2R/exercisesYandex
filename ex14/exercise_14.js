"use strict";
/* const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output }); */

const fs = require("fs");
const inputFileName = "./input.txt";

const data = fs.readFileSync(inputFileName, "utf8");
const train = data.toString().split("\n")[1].split(" ");
//const dataToPrint = train;
const stackArr = [];
let trainOut = 0;
const trainLenght = train.length;
let number = 0;

function searchInFirstRails() {
  console.log("searchInFirstRails");

  if (number < trainLenght) {
    console.log("train[number] " + train[number]);
    if (trainOut + 1 == train[number]) {
      trainOut++;
      number++;
      searchInFirstRails();
    } else searchInDock();
  }
  console.log("number " + number);
  console.log("trainOut " + trainOut);
}
function searchInDock() {
  console.log("searchInDock ");
  console.log("stackArr before" + stackArr);

  if (trainOut + 1 == stackArr[stackArr.length - 1]) {
    stackArr.pop();
    trainOut++;
    searchInDock();
    console.log("stackArr after" + stackArr);
  } else {
    if (number < trainLenght) {
      stackArr.push(train[number]);
      number++;
      console.log("Перемещение в стек" + stackArr);
      searchInFirstRails(number);
    } else {
      searchInDock();
    }
  }
}

searchInFirstRails(0);

let result = trainOut == train.length ? "YES" : "NO";

process.stdout.write(result.toString());

//console.log(carriage);
/* 
  const stackArr = [];
  const postfixArr = postfix.trim().split(" ");

  postfixArr.forEach((item) => {
    if (/(^-?[\d.]+)/.test(item)) {
      stackArr.push(item);
    } else {
      let b = stackArr.pop();
      let a = stackArr.pop();
      stackArr.push(eval(a + " " + item + " " + b));
    }
  });
  return stackArr[0] + " "; */

/* stack.on("line", (postfixStr) => {
  process.stdout.write(countPostfix(postfixStr) + "\n");
  //process.exit();
}); */
/* 
stack.on("line", (data) => {
  process.stdout.write(data + "\n");
});
 */
