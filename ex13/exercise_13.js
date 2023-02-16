/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output });

function countPostfix(postfix) {
  const stackArr = [];

  const postfixArr = postfix.trim().split(" ");

  postfixArr.forEach((item) => {
    if (/(^-?[\d.]+)/.test(item)) {
      stackArr.push(item);
    } else if (/[\/+\-*]/.test(item)) {
      let b = stackArr.pop();
      let a = stackArr.pop();
      stackArr.push(eval(a + item + b));
    }
  });
  return stackArr[0];
}

stack.on("line", (postfixStr) => {
  if (!postfixStr) {
    process.stdout.write(countPostfix(postfixStr) + "\n");
    process.exit();
  }
});
