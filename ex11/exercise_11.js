/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output });

let stackArr = [];

function myStack(comm) {
  command = comm.split(" ")[0];
  item = comm.split(" ")[1] ? comm.split(" ")[1] : "";
  switch (command) {
    case "push":
      stackArr.push(item);
      return "ok";
    case "pop":
      return stackArr.length ? stackArr.pop() : "";
    case "back":
      return stackArr[stackArr.length - 1];
    case "size":
      return stackArr.length || "0";
    case "clear":
      stackArr = [];
      return "ok";
    case "exit":
      process.stdout.write("bye" + "\n");
      process.exit();
      return "bye";
    default:
      return "error";
  }
}

stack.on("line", (command) => {
  process.stdout.write((myStack(command) || "error") + "\n");
});
