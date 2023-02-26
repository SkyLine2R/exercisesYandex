console.time("mark");
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8");

function searchBeautifulString(quantityOfchange, textString) {
  const unqLtrs = new Set(textString.split("")); // уникальные буквы
  const textStrLnth = textString.length; // длина строки

  if (
    textStrLnth <= quantityOfchange ||
    textStrLnth == quantityOfchange + 1 ||
    unqLtrs.size === 1
  )
    return textStrLnth;

  return search(textString);

  function search(textString) {
    let bestString = 1;
    unqLtrs.forEach((letter) => {
      let quantityChangeNow = quantityOfchange;

      let endSearchPos = 0;

      for (
        let startSearchPos = 0;
        startSearchPos < textStrLnth - 1;
        startSearchPos++
      ) {
        let bestStringNow = 0;
        if (bestString > textStrLnth - startSearchPos) break;
        if (
          startSearchPos - 1 >= 0 &&
          textString[startSearchPos - 1] != letter
        ) {
          quantityChangeNow++;
        }
        while (endSearchPos < textStrLnth) {
          if (textString[endSearchPos] != letter) {
            if (quantityChangeNow) {
              quantityChangeNow--;
            } else {
              break;
            }
          }
          endSearchPos++;
        }
        bestStringNow = endSearchPos - startSearchPos;
        bestString = bestString < bestStringNow ? bestStringNow : bestString;
        if (endSearchPos > textStrLnth - 1) break;
      }
    });
    return bestString;
  }
}

const quantityChange = +data.toString().split("\n")[0];

const searchString = data.toString().split("\n")[1].trim();
const dataToSave = searchBeautifulString(quantityChange, searchString) + "";

fs.writeFileSync("output.txt", dataToSave + "\n");
process.stdout.write(dataToSave + "\n");

console.timeEnd("mark");
