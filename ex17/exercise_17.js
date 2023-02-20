("use strict");

const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");

class Player {
  constructor(cards) {
    this.k = cards.split(" ").length * 2;
    this.buffer = Array(this.k);
    this.head = 0;
    this.tail = -1;
    this.leng = 0;
    this.addTails(cards.split(" "));
  }
  addTails(arr) {
    arr.forEach((item) => {
      this.tail = (this.tail + 1) % this.k;
      this.buffer[this.tail] = +item;
      this.leng += 1;
    });
    return this;
  }
  removeHead() {
    const element = this.buffer[this.head];
    this.head = (this.head + 1) % this.k;
    this.leng -= 1;
    return element;
  }
}

const player1 = new Player(inputData[0].trim());
const player2 = new Player(inputData[1].trim());

let result = "botva";

for (let i = 0; i < 1000000; i++) {
  if (player1.leng == 10) {
    result = "first " + i;
    break;
  }
  if (player2.leng == 10) {
    result = "second " + i;
    break;
  }

  let card1 = player1.removeHead();
  let card2 = player2.removeHead();

  if (card1 == 0 && card2 == 9) {
    player1.addTails([card1, card2]);
  } else if (card2 == 0 && card1 == 9) {
    player2.addTails([card1, card2]);
  } else if (card1 > card2) {
    player1.addTails([card1, card2]);
  } else {
    player2.addTails([card1, card2]);
  }
}
fs.writeFileSync("output.txt", result.toString());

console.log(result);
//process.stdout.write(result.toString());
