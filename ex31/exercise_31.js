"use strict";
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
  constructor(arr, vert) {
    arr.forEach((vertex) => {
      this.graph[vertex[0]]
        ? this.graph[vertex[0]].push(vertex[1])
        : (this.graph[vertex[0]] = [vertex[1]]);

      if (vertex[0] != vertex[1]) {
        this.graph[vertex[1]]
          ? this.graph[vertex[1]].push(vertex[0])
          : (this.graph[vertex[1]] = [vertex[0]]);
      }
    });
    this.dfs(1);
    this.connectivitySearch();
  }
  dfs(now) {
    if (this.graph[now]) {
      this.visited[now] = true;
      this.graph[now].forEach((neig) => {
        if (!this.visited[neig]) {
          this.dfs(neig);
        }
      });
    }
  }

  connectivitySearch() {
    this.visited.forEach((item, index) => {
      this.connectivity.push(index);
    });
    this.connectivity.sort((a, b) => a - b);
  }

  graph = [];
  visited = [];
  connectivity = [];
}

const myGraph = new graph(inputData, vertex);

let result = 0;
if (vertex) {
  if (!myGraph.connectivity.length) {
    result = `1\n1`;
  } else
    result = `${myGraph.connectivity.length}\n${myGraph.connectivity.join(
      " "
    )}`;
}
fs.writeFileSync("output.txt", result.toString());

console.log(myGraph.graph);
console.log(myGraph.visited.length);
console.log(myGraph.connectivity);

//console.log(result.join(" "));
//console.log(result);
//process.stdout.write(result.toString() + "\n");
