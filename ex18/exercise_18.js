"use strict";
const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const inputData = data.toString().split("\n");

class Deque {
  constructor(lengK) {
    this.k = lengK * 3;
    this.deque = Array(this.k);
    this.frontPointer = this.k;
    this.backPointer = this.k - 1;
    this.leng = 0;
  }
  push_front(item) {
    this.frontPointer -= 1;
    this.deque[this.frontPointer] = +item;
    this.leng += 1;
    return "ok";
  }
  push_back(item) {
    this.backPointer += 1;
    this.deque[this.backPointer] = +item;
    this.leng += 1;
    return "ok";
  }
  pop_front() {
    if (this.leng) {
      const elem = this.deque[this.frontPointer];
      this.frontPointer += 1;
      this.leng -= 1;
      return elem;
    }
    return "error";
  }
  pop_back() {
    if (this.leng) {
      const elem = this.deque[this.backPointer];
      this.backPointer -= 1;
      this.leng -= 1;
      return elem;
    }
    return "error";
  }
  front() {
    return this.leng ? this.deque[this.frontPointer] : "error";
  }
  back() {
    return this.leng ? this.deque[this.backPointer] : "error";
  }
  size() {
    return this.leng;
  }
  clear() {
    this.frontPointer = this.k;
    this.backPointer = this.k - 1;
    this.leng = 0;
    return "ok";
  }
}

const myDeque = new Deque(100);

let result = [];
for (let i = 0; i < inputData.length; i++) {
  if (inputData[i].trim() == "exit") {
    result.push("bye");
    break;
  }

  let comm = inputData[i].trim().split(" ")[0];
  let val = inputData[i].trim().split(" ")[1] || "";

  result.push(myDeque[comm](val));
}

fs.writeFileSync("output.txt", result.join("\n").toString());

console.log(result.join("\n"));
//process.stdout.write(result.toString());
/*   console.log("comm = " + comm);
  console.log("val = " + val); */
