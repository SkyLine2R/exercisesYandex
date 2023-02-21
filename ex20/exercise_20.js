"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");
const arrLenght = +inputData.shift();

class Heap {
  constructor() {
    this.heapArr = [];
  }
  upNode(i) {
    return ((i - 1) / 2) | 0;
  }
  dwnNodeleft(i) {
    return 2 * i + 1;
  }
  dwnNodeRight(i) {
    return 2 * i + 2 < this.heapArr.length ? 2 * i + 2 : 2 * i + 1;
  }
  addNode(item) {
    this.heapArr.push(+item);

    let i = this.heapArr.length - 1;
    if (i < 2) {
      if (i == 1 && this.heapArr[1] > this.heapArr[0]) {
        [this.heapArr[1], this.heapArr[0]] = [this.heapArr[0], this.heapArr[1]];
      }
      return;
    }

    let j = this.upNode(i);

    while (i) {
      if (this.heapArr[i] > this.heapArr[j]) {
        [this.heapArr[i], this.heapArr[j]] = [this.heapArr[j], this.heapArr[i]];
        i = j;
        j = this.upNode(i);
      } else break;
    }
  }
  extractNode() {
    if (this.heapArr.length == 1) return this.heapArr.pop();

    if (this.heapArr.length == 2) {
      if (this.heapArr[0] < this.heapArr[1]) {
        [this.heapArr[0], this.heapArr[1]] = [this.heapArr[1], this.heapArr[0]];
      }
      return this.heapArr.shift();
    }

    let maxElement = this.heapArr[0];
    this.heapArr[0] = this.heapArr.pop();

    let i = 0;
    while (this.dwnNodeleft(i) < this.heapArr.length) {
      let elemLeft = this.dwnNodeleft(i);
      let elemRight = this.dwnNodeRight(i);
      let highest =
        this.heapArr[elemLeft] >= this.heapArr[elemRight]
          ? elemLeft
          : elemRight;
      if (this.heapArr[highest] > this.heapArr[i]) {
        [this.heapArr[highest], this.heapArr[i]] = [
          this.heapArr[i],
          this.heapArr[highest],
        ];
        i = highest;
      } else break;
    }
    return maxElement;
  }
}

const myHeap = new Heap();

inputData[0].split(" ").forEach((item) => myHeap.addNode(+item));

let result = Array(arrLenght);

for (let i = arrLenght - 1; i >= 0; i--) {
  result[i] = myHeap.extractNode();
}

fs.writeFileSync("output.txt", result.join("\n").toString() + "\n");

/* myHeap.addNode(5);
myHeap.addNode(3);
myHeap.addNode(10);
myHeap.addNode(20);
myHeap.addNode(15);
myHeap.addNode(21);
console.log("arr " + myHeap.heapArr);
console.log(myHeap.extractNode());
console.log(myHeap.extractNode());
console.log(myHeap.extractNode());
console.log(myHeap.extractNode());
console.log(myHeap.extractNode());
console.log(myHeap.extractNode());
myHeap.addNode(15); */

/* 
let trainOut = 0;
const trainLenght = train.length;
let number = 0;

searchInFirstRails(0);

let result = trainOut == train.length ? "YES" : "NO"; */

//process.stdout.write(result.join("\n"));
