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
    const stack = [[vertex, 0]];
    this.visited[vertex] = 1;
    let now;

    while (true) {
      let last = stack.length - 1;
      if (this.graph[stack[last]]) {
        //сделать проверку на серость
        //если норм - добавлять в стек
        this.graph[stack[last]].forEach;
      }
    }

    while (stack.length) {
      //console.log(this.graph);
      //console.log(stack);
      now = stack.pop();
      if (!this.visited[now[0]]) {
        this.visited[now[0]] = 1;
      } else if (this.visited[now[0]] == this.visited[now[1]]) {
        return true; //цикл
      }
      if (this.graph[now[0]] == 1) {
        this.graph[now[0]].forEach((neig) => {
          if (!this.visited[neig]) {
            this.visited[neig] = 1;
            stack.push([neig, now[0]]);
          }
        });
      }
    }
    return false;
  }
  result = "YES";
  graph = [];
  visited = [];
}

const myGraph = new graph(inputData, vertex);

fs.writeFileSync("output.txt", myGraph.result.toString());

console.log(myGraph.result);
//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
