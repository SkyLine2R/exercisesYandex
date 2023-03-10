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
    const stack = [vertex];
    this.visited[vertex] = 1;
    let now = vertex;
    console.log("Заполняем стек");
    let working = true;

    while (working) {
      let lastElem;
      this.graph[stack[stack.length - 1]].forEach((item) => {
        if (!this.visited[item]) {
          this.visited[item] = 1;
          stack.push(item);
        }
      });

      console.log(lastElem);

      console.log("Состояние стека " + stack);
      console.log("this.visited" + this.visited);
      br;
      if (this.graph[lastElem]) {
        if (this.visited[lastElem] == 1) {
          console.log("Обнаружен цикл!");
          return true;
        } else working = false;
        if (this.visited[lastElem] != 2) {
          this.visited[lastElem] = 1;
          stack.push(this.graph[lastElem]);
          //lastElem = this.graph[lastElem];
        } else break;
      }

      /* 
      console.log("lastElem " + lastElem);
        let element = this.graph[stack[last]];
        if (element) {
          console.log(element);
          this.graph[stack[last]].forEach((item) => {
            console.log("item " + item);
            if (this.visited[item] == 1) {

              return true;
            } else {
              this.visited[item] = 1;
              stack.push(item);
            }
            if (this.visited[item] == 1) {
              console.log("Обнаружен тупик");
            }
            console.log("Состояние стека " + stack);
            console.log("this.visited" + this.visited);
          });
        }
      } */

      console.log("Опустошаем стек");
      while (stack.length) {
        now = stack.pop();
        console.log("now " + now);
        this.visited[now] = 2;
        this.sortedGraph.push(now);
      }
    }
    console.log("asdfasdf");
    console.log(this.graph);
    console.log("this.sortedGraph " + this.sortedGraph);

    /*     while (stack.length) {
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
    return false; */
  }
  result = "YES";
  graph = [];
  visited = [];
  sortedGraph = [];
}

const myGraph = new graph(inputData, vertex);

fs.writeFileSync("output.txt", myGraph.result.toString());

console.log(myGraph.result);
//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
