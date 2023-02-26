const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");

const marksDiego = data[1].trim().split(" ");
const collectionersMarks = data[3].trim().split(" ");

const diegoSet = [...new Set(marksDiego)].sort((a, b) => a - b);
quantityDiegoMarks = diegoSet.length;
const result = [];
collectionersMarks.forEach((item) => {
  result.push(binarySearch());

  function binarySearch() {
    let start = 0;
    let end = quantityDiegoMarks - 1;
    while (start <= end) {
      let middleRange = ((start + end) / 2) | 0;

      if (+diegoSet[middleRange] == +item && middleRange > 0) {
        return middleRange;
      }
      if (
        (+diegoSet[middleRange] < +item &&
          middleRange == quantityDiegoMarks - 1) ||
        (+diegoSet[middleRange] < +item &&
          +diegoSet[middleRange + 1] >= +item) ||
        (+diegoSet[middleRange] < +item && start == quantityDiegoMarks - 1)
      ) {
        return middleRange + 1;
      } else if (+diegoSet[middleRange] > +item) {
        end = middleRange - 1;
      } else {
        start = middleRange + 1;
      }
    }
    return 0;
  }
});

fs.writeFileSync("output.txt", result.join("\n") + "\n");
