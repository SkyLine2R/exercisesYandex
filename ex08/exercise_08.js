"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");

const [clientTime1, serverTime, clientTime2] = [
  ...inputData.map(
    (item) =>
      item.split(":")[0] * 60 * 60 +
      +item.split(":")[1] * 60 +
      +item.split(":")[2]
  ),
];

const correction =
  (clientTime1 > clientTime2
    ? 24 * 60 * 60 - clientTime1 + clientTime2
    : clientTime2 - clientTime1) / 2;

let hours =
  (serverTime + correction) / 60 / 60 > 24
    ? (serverTime + correction) / 60 / 60 - 24
    : (serverTime + correction) / 60 / 60;

let minutes = (hours - (hours | 0)) * 60;

let seconds = (
  ((minutes - (minutes | 0)) * 60 * 1000).toFixed(0) / 1000
).toFixed(0);

if (seconds >= 60) {
  seconds -= 60;
  minutes++;
  if (minutes >= 60) {
    minutes -= 60;
    hours++;
  }
  if (hours > 23) {
    hours -= 24;
  }
}

const result =
  (hours < 10 ? "0" + (hours | 0) : hours | 0) +
  ":" +
  (minutes < 10 ? "0" + (minutes | 0) : minutes | 0) +
  ":" +
  (seconds < 10 ? "0" + seconds : seconds);

fs.writeFileSync("output.txt", result + "\n");

process.stdout.write(result + "\n");

/* const options = {
  hours: "numeric",
  minutes: "numeric",
  seconds: "numeric",
}; */

//const result = finalTime.toLocaleString("ru-RU", options).split(" ")[1];
