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
    let color = 2;
    let now;

    while (stack.length) {
      let prev = now;
      now = stack.pop();
      if (!this.visited[now]) {
        this.visited[now] = 3 - color;
      } else if (this.visited[now] == this.visited[prev] && now != prev) {
        console.log("now " + now);
        console.log("prev " + prev);
        console.log(this.graph);
        console.log(this.visited);
        this.divide = "NO";
        break;
      }
      color = this.visited[now];
      if (this.graph[now]) {
        this.graph[now].forEach((neig) => {
          if (!this.visited[neig]) {
            this.connectivityComponents[vertex].push(neig);
            stack.push(neig);
          }
        });
      }
    }
  }
  color = [];
  graph = [];
  visited = [];
  connectivityComponents = [];
  divide = "YES";
}

const myGraph = new graph(inputData, vertex);

fs.writeFileSync("output.txt", myGraph.divide.toString());

console.log(myGraph.divide);
console.log("color " + myGraph.visited);
//console.log(myGraph.connectivityComponents);
console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
