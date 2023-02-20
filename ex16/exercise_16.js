"use strict";

const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const command = data.toString().split("\n");

let queue = [];
const result = [];

for (let i = 0; i < command.length; i++) {
  if (command[i].trim() == "exit") {
    result.push("bye");
    break;
  } else result.push(queueFunc(command[i]) || "error");
}

function queueFunc(comm) {
  const command = comm.split(" ")[0].trim();
  const item = comm.split(" ")[1] ? comm.split(" ")[1].trim() : "";

  switch (command) {
    case "push":
      queue.push(item);
      return "ok";
    case "pop":
      let elem = queue.length ? queue.shift() : "";
      return elem;
    case "front":
      return queue.length ? queue[0] : "";
    case "size":
      console.log("size " + queue.length);
      return queue.length || "0";
    case "clear":
      queue = [];
      return "ok";
    default:
      return "";
  }
}
fs.writeFileSync("output.txt", result.join("\n"));

process.stdout.write(result.toString());
