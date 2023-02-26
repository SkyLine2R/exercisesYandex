console.time("mark");
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").toString().split("\n");

data.length = data.shift();
data.forEach((item, index) => {
  data[index] = +item;
});

let answer = 0;

for (let i = 0; i < data.length - 1; i++) {
  answer += data[i] <= data[i + 1] ? data[i] : data[i + 1];
}

fs.writeFileSync("output.txt", answer.toString() + "\n");

//process.stdout.write(result.join("\n") + "\n");
console.log(answer);
console.timeEnd("mark");
