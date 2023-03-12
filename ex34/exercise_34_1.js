"use strict";
console.time("timetaken");

const fs = require("fs");
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");
const [vertex, edge] = [...inputData.shift().trim().split(" ")];
inputData.forEach((item, index) => {
  inputData[index] = item.split(" ").map((item) => +item);
});

class graph {
  constructor(arr, vert, edge) {
    this.vertex = +vert;
    this.edge = +edge;
    this.graph.length = this.vertex + 1 || 1;
    this.graph[0] = 0;

    arr.forEach((vertex) => {
      this.graph[vertex[0]]
        ? this.graph[vertex[0]].push(vertex[1])
        : (this.graph[vertex[0]] = [vertex[1]]);
    });

    for (let i = 1; i <= this.vertex; i++) {
      if (!this.visited[i]) {
        if (this.dfs(i)) {
          this.result = "-1";
          break;
        }
      }
    }
  }
  dfs(vertex) {
    const stackPop = () => {
      let lastElem = stack.pop();
      this.sortedGraph.unshift(lastElem[0]);
      this.visited[lastElem[0]] = 2;
    };

    const stack = [[vertex, 0]];
    this.visited[vertex] = 1;
    let nextLevelFlag = true;
    while (stack.length) {
      let currElem = stack[stack.length - 1][0];

      if (
        this.graph[currElem] &&
        this.graph[currElem].length &&
        nextLevelFlag
      ) {
        let breakingFlag = false;
        nextLevelFlag = false;
        this.graph[currElem].forEach((item) => {
          if (this.visited[item] == 1) {
            breakingFlag = true;
          }
          if (this.visited[item] != 2) {
            this.visited[item] = 1;
            stack.push([item, currElem]);
            nextLevelFlag = true;
          }
        });
        if (breakingFlag) return true;
      } else {
        stackPop();
        nextLevelFlag = true;
      }
    }
  }
  result = "0";
  graph = [];
  visited = [];
  sortedGraph = [];
}

const myGraph = new graph(inputData, vertex);

let result;

if (myGraph.result == "-1") {
  result = "-1";
} else result = myGraph.sortedGraph.join(" ");

fs.writeFileSync("output.txt", result.toString());

console.log("graph" + this.graph);
console.log("this.sortedGraph " + this.sortedGraph);
//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
