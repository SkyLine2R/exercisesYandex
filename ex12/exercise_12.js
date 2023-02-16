/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output });

function controlBracket(brackets) {
  if (brackets == "") return "yes";
  if (brackets.length % 2) return "no";

  const stackArr = [];

  let pairBracket = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < brackets.length; i++) {
    if (pairBracket.has(brackets[i])) {
      stackArr.push(brackets[i]);
    } else {
      const bracketOutStack = stackArr.pop();

      if (pairBracket.get(bracketOutStack) != brackets[i]) {
        return "no";
      }
    }
    if (stackArr.length > brackets.length - i + 1) return "no";
  }
  return stackArr.length ? "no" : "yes";
}

stack.on("line", (bracketsStr) => {
  process.stdout.write(controlBracket(bracketsStr) + "\n");
  process.exit();
});
