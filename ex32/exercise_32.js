"use strict";
console.time("timetaken");

const fs = require("fs");
const inputData = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .trim()
  .split("\n");
const [vertex, edge] = [...inputData.shift().trim().split(" ")];
const result = [];

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

      if (vertex[0] != vertex[1]) {
        this.graph[vertex[1]]
          ? this.graph[vertex[1]].push(vertex[0])
          : (this.graph[vertex[1]] = [vertex[0]]);
      }
    });

    for (let i = 1; i <= this.vertex; i++) {
      if (!this.visited[i]) {
        this.connectivityComponents[i] = [i];
        this.dfs(i);
      }
    }
  }
  dfs(vertex) {
    const stack = [vertex];

    while (stack.length) {
      let now = stack.pop();

      this.visited[now] = true;

      if (this.graph[now]) {
        this.graph[now].forEach((neig) => {
          if (!this.visited[neig] && !stack.includes(neig)) {
            this.connectivityComponents[vertex].push(neig);
            stack.push(neig);
          }
        });
      }
    }
  }
  graph = [];
  visited = [];
  connectivityComponents = [];
}

const myGraph = new graph(inputData, vertex);

myGraph.connectivityComponents.forEach((item) => {
  if (item) {
    result.push(item.length);
    result.push(item.sort((a, b) => a - b).join(" "));
  }
});

result.unshift(result.length / 2);

fs.writeFileSync("output.txt", result.join("\n").toString());

console.log(myGraph.connectivityComponents);
console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
