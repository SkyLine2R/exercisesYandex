"use strict";
console.time("timetaken");

const fs = require("fs");
const trainCommander = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");

const leng = trainCommander.shift();
const cargo = {};
const train = [];
const result = [];

for (let i = 0; i < leng; i++) {
  let [command, val, cargoName] = [...trainCommander[i].trim().split(" ")];

  switch (command) {
    case "add":
      train.push([cargoName, val]);
      cargo[cargoName] = (cargo[cargoName] || 0) + +val;
      break;
    case "delete":
      while (+val > 0) {
        if (+train[train.length - 1][1] > +val) {
          cargo[train[train.length - 1][0]] -= +val;
          train[train.length - 1][1] -= +val;
          val = 0;
        } else {
          cargo[train[train.length - 1][0]] -= +train[train.length - 1][1];
          val -= +train[train.length - 1][1];
          train.pop();
        }
      }
      break;
    case "get":
      result.push(cargo[val] || 0);
  }
}

fs.writeFileSync("output.txt", result.join("\n").toString());

console.log(train);
console.log(cargo);
console.log(result);

//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
