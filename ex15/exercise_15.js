"use strict";
/* const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output }); */

const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");
const lineWorld = data.toString().split("\n")[1].split(" ");
const lineWorldLenght = lineWorld.length;

const stackArr = [];
const result = new Array(lineWorldLenght);

stackArr.push([lineWorld[0], 0]);

let working = true;
let pos = 1;

while (working) {
  if (stackArr.length && +stackArr[stackArr.length - 1][0] > +lineWorld[pos]) {
    result[stackArr.pop()[1]] = pos;
  } else if (pos < lineWorldLenght) {
    stackArr.push([lineWorld[pos], pos]);
    pos++;
  } else {
    working = false;
  }
}
stackArr.forEach((item) => {
  result[item[1]] = -1;
});

fs.writeFileSync("output.txt", result.join(" "));

process.stdout.write(result.join(" ").toString());

/* for (let i = 0; i < lineWorldLenght; i++) {
  let index = -1;
  for (let j = i + 1; j < lineWorldLenght; j++) {
    if (+lineWorld[i] > +lineWorld[j]) {
      index = j;
      break;
    }
  }
  result.push(index);
} */

/* let result = lineWorld.reduce((finArr, sity, index, lineWorld) => {
  let number = lineWorld.slice(index + 1).findIndex((value) => +value < +sity);

  finArr.push(number == -1 ? -1 : number + index + 1);

  return finArr;
}, []); */

/* stack.on("line", (postfixStr) => {
  process.stdout.write(countPostfix(postfixStr) + "\n");
  //process.exit();
}); */
/* 
stack.on("line", (data) => {
  process.stdout.write(data + "\n");
});
 */
