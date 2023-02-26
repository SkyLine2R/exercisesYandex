console.time("mark");
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");

//const quantityDiegoMarks = +data[0].trim();
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
      console.log("start " + start);
      console.log("end " + end);
      console.log("Середина массива " + middleRange);
      console.log("Элемент который ищем " + item);
      console.log("Текущий элемент коллекции " + diegoSet[middleRange]);

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
        console.log("Выполнено условие возврата ");
        console.log(diegoSet[middleRange]);

        return middleRange + 1;
      } else if (+diegoSet[middleRange] > +item) {
        console.log("Изменяем конец диапазона");
        end = middleRange - 1;
      } else {
        console.log("Изменяем начало диапазона");
        start = middleRange + 1;
        console.log("start " + start);
      }
    }
    return 0;
  }
});

console.log(diegoSet);

fs.writeFileSync("output.txt", result.join("\n") + "\n");
process.stdout.write(result.join("\n"));

console.timeEnd("mark");
