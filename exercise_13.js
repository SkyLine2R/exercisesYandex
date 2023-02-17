"use strict";
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output });
function countPostfix(postfix) {
  if (postfix) {
    postfix = postfix.toString();
  } else return "";

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
  return stackArr[0] + " ";
}

stack.on("line", (postfixStr) => {
  process.stdout.write(countPostfix(postfixStr) + "\n");
  process.exit();
});
