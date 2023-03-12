"use strict";
console.time("timetaken");

const fs = require("fs");
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");
let result = -1;

inputData.shift();

const [startVertex, endVertex] = [...inputData.pop().trim().split(" ")];

inputData.forEach((item, index) => {
  inputData[index] = [
    -1,
    ...item.split(" ").map((item) => (+item ? -1 : 0)),
    -1,
  ];
});
inputData.unshift([...Array(inputData[0].length).fill(-1)]);
inputData.push([...Array(inputData[0].length).fill(-1)]);
inputData[startVertex][startVertex] = -2;
const distanceList = [[[+startVertex, +endVertex]]];
const moveArr = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let i = 0;

while (distanceList[i]) {
  distanceList[i].forEach((coord) => {
    moveArr.forEach((correct) => {
      let x = coord[0] + correct[0];
      let y = coord[1] + correct[1];

      if (!inputData[x][y]) {
        inputData[x][y] = i + 1;
        distanceList[i + 1]
          ? distanceList[i + 1].push([x, y])
          : (distanceList[i + 1] = [[x, y]]);
      }
    });
  });
  i++;
}
console.log("Поиск длины пути");

let distance = 1;
let stop = false;
while (distance < distanceList.length && !stop) {
  distanceList[distance].forEach((coord) => {
    if (coord[0] == endVertex) console.log("Первая координата");

    console.log("coord[0] " + coord[0]);
    console.log("coord[1] " + coord[1]);
    //console.log("endVertex " + endVertex);
    if (coord[0] == endVertex && coord[1] == startVertex) {
      result = distance;
      stop = true;
    }
  });
  distance++;
  console.log("distance " + distance);
}

console.log(inputData.join("\n"));
console.log(distanceList);

console.log("result " + result);

//fs.writeFileSync("output.txt", result.toString() + "\n");

//console.log(result);
//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
