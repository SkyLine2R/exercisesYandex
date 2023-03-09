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

      /*       if (vertex[0] != vertex[1]) {
        this.graph[vertex[1]]
          ? this.graph[vertex[1]].push(vertex[0])
          : (this.graph[vertex[1]] = [vertex[0]]);
      } */
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
    let now;
    while (stack.length) {
      console.log(stack);
      let prev = now || 0;
      now = stack.pop();
      console.log("now " + now);
      console.log("prev " + prev);
      console.log("visited" + this.visited);
      if (!this.visited[now]) {
        this.visited[now] = 3 - this.visited[prev] || 1;
      } else if (this.visited[now] == this.visited[prev]) {
        console.log("WWWWWWWWWWWWWWWWWWW");
      }
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
}

const myGraph = new graph(inputData, vertex);
console.log(myGraph.graph);
console.log(myGraph.visited);
/* myGraph.connectivityComponents.forEach((item) => {
  if (item) {
    result.push(item.length);
    result.push(item.sort((a, b) => a - b).join(" "));
  }
}); */

//fs.writeFileSync("output.txt", result.join("\n").toString());

//console.log(myGraph.connectivityComponents);
//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
