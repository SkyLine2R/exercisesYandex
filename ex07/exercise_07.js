"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");
const strTime = "2000-01-01T00:00:00Z";
const clientTime1 = new Date(strTime).setHours(...inputData[0].split(":"));
const clientTime2 = new Date(strTime).setHours(...inputData[2].split(":"));
const serverTime = new Date(strTime).setHours(...inputData[1].split(":"));

const correction = Math.round((clientTime2 - clientTime1) / 2);
const finalTime = new Date(serverTime + correction + 500);

console.log(clientTime2 - clientTime1);
console.log(correction / 1000 / 60 / 60);

const options = {
  hours: "numeric",
  minutes: "numeric",
  seconds: "numeric",
};

const result = finalTime.toLocaleString("ru-RU", options).split(" ")[1];

fs.writeFileSync("output.txt", result + "\n");

process.stdout.write(result + "\n");
