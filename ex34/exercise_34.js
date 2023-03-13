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
        console.log("Переход в dfs");
        if (this.dfs(i)) {
          this.result = "-1";
          break;
        }
      }
    }
  }
  dfs2(now) {
    if (this.graph[now]) {
      this.visited[now] = 1;
      this.graph[now].forEach((neig) => {
        if (!this.visited[neig]) {
          this.dfs(neig);
        } else console.log("Обнаружен цикл");
      });
      this.visited[now] = 2;
      this.sortedGraph.push(now);
    }
  }

  dfs(vertex) {
    const stackPop = () => {
      console.log("Нет достижимых элементов");
      let lastElem = stack.pop();
      console.log("lastElem " + lastElem);
      this.sortedGraph.unshift(lastElem[0]);
      this.visited[lastElem[0]] = 2;
    };

    console.log(this.graph);
    const stack = [[vertex, 0]];
    this.visited[vertex] = 1;
    console.log("Заполняем стек");
    let nextLevelFlag = true;
    while (stack.length) {
      let currElem = stack[stack.length - 1][0];

      console.log("currElem " + currElem);
      console.log("nextLevelFlag " + nextLevelFlag);

      if (
        this.graph[currElem] &&
        this.graph[currElem].length &&
        nextLevelFlag
      ) {
        let breakingFlag = false;
        nextLevelFlag = false;
        this.graph[currElem].forEach((item) => {
          console.log("проверка дочерних элементов");
          console.log(item);
          if (this.visited[item] == 1) {
            breakingFlag = true;

            console.log("Обнаружен цикл");
            //console.log("this.graph[elem[0]] " + this.graph[elem[0]]);
            stack.forEach((elem) => {
              if (elem[0] == item) {
                console.log(elem[0]);
                console.log("есть в стеке");
                breakingFlag = false;
              }
            });
            console.log("Элемент " + item);
            console.log(
              "Элемент имеет состояние посещения " + this.visited[item]
            );
            console.log("stack " + stack);
          }

          if (this.visited[item] != 2) {
            console.log("Добавлен в стек");
            this.visited[item] = 1;
            stack.push([item, currElem]);
            nextLevelFlag = true;
          } //else nextLevelFlag = false; //else if (stack.length) stackPop();
        });
        if (breakingFlag) return true;
      } else {
        stackPop();
        nextLevelFlag = true;
      }

      console.log("visited " + this.visited);
      console.log("stack");
      console.log(stack);
      console.log("Разбор стека");
    }

    console.log("graph" + this.graph);
    console.log("this.sortedGraph " + this.sortedGraph);
  }
  result = "YES";
  graph = [];
  visited = [];
  sortedGraph = [];
}

const myGraph = new graph(inputData, vertex);

let result;

if (myGraph.result == "-1") {
  result = "-1";
} else result = myGraph.sortedGraph.join(" ");

console.log(myGraph.sortedGraph.reverse().join(" "));

//fs.writeFileSync("output.txt", result.toString() + "\n");

console.log(myGraph.result);
//console.log(result.join("\n"));
console.timeEnd("timetaken");
//process.stdout.write(result.toString() + "\n");
