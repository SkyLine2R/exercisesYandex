console.time("mark");
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const [numberOfStudent, numberOfTasks, rowOfPetya, placeOfPetya] = [...data];
const placeNumberOfPetya = (+rowOfPetya - 1) * 2 + +placeOfPetya;

const placesNumberOfVasya = [];
const rowsOfVasya = [];
let answer = -1;

if (+placeNumberOfPetya + +numberOfTasks <= +numberOfStudent) {
  placesNumberOfVasya.push(+placeNumberOfPetya + +numberOfTasks);
}
if (+placeNumberOfPetya - +numberOfTasks >= 1) {
  placesNumberOfVasya.push(+placeNumberOfPetya - +numberOfTasks);
}

placesNumberOfVasya.forEach((item, index) => {
  let row = Math.round(item / 2);
  let place = item % 2 ? 1 : 2;
  rowsOfVasya.push([row, place]);
});

if (rowsOfVasya[0] && rowsOfVasya[1]) {
  answer =
    rowsOfVasya[0][0] - rowOfPetya <= rowOfPetya - rowsOfVasya[1][0]
      ? rowsOfVasya[0][0] + " " + rowsOfVasya[0][1]
      : rowsOfVasya[1][0] + " " + rowsOfVasya[1][1];
} else if (rowsOfVasya[0]) {
  answer = rowsOfVasya[0][0] + " " + rowsOfVasya[0][1];
}

fs.writeFileSync("output.txt", answer.toString() + "\n");
//process.stdout.write(result.join("\n") + "\n");
console.log(answer);
console.timeEnd("mark");
