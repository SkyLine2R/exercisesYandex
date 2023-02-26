console.time("mark");
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");
data.shift();
data.length = data.shift();

data.forEach((item, index) => {
  data[index] = [...item.split(" ")];
  data[index] = [+data[index][0], +data[index][1]];
});

let answer = data.length;

for (let i = 1; i < data.length; i++) {
  for (let j = i - 1; j >= 0; j--) {
    if (data[j][0] <= data[i][1] && data[i][0] <= data[j][1]) {
      data[j][0] = 0;
      data[j][1] = 0;
      answer--;
    }
  }
}

fs.writeFileSync("output.txt", answer.toString() + "\n");

//process.stdout.write(result.join("\n") + "\n");
console.log(answer);
console.timeEnd("mark");
