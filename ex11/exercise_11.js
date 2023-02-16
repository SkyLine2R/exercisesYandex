/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const stack = readline.createInterface({ input, output });

const stackArr = [];

function myStack(comm) {
  command = comm.split(" ")[0] ? comm.split(" ")[0] : "";
  item = comm.split(" ")[1] ? comm.split(" ")[1] : "";

  switch (command) {
    case "push":
      stackArr.push(item);
      return "ok";
    case "pop":
      return stackArr.pop();
    case "back":
      return stackArr[stackArr.length - 1];
    case "size":
      return stackArr.length;
    case "clear":
      stackArr = [];
      return "ok";
    case exit:
      stack.close("bye ");
  }

  //run(comm) {
  console.log(comm.split(" ")[0]);
  /*  return this[comm.split(" ")[0]](comm.split(" ")[1]);
  },

  pop: (item) => {
    this.stackArr.push(item);
    return "Ok";
  }, */
}

stack.on("line", (command) => {
  process.stdout.write((myStack(command) || error) + "\n");
});

/* process.stdin.on("readable", (chunk, text) => {
  const outPrint = text;
  //console.log(chunk);
  process.stdout.write(outPrint);
  //console.log(chunk);
});
 */
//process.stdout.write(dataToSave);

// let inputString = "";

/* const read = () =>
  process.stdin.on("readable", (chunk) => {
    //console.log(chunk);
    return chunk;
  }); */

//console.log(read());
// let chunk = process.stdin.read();

// inputString += inputSt;

/*   process.stdin.on("end", () => {
    console.log("There will be no more data.");
  }); */

// process.stdout.write("Получено" + inputString);
// }); */
/* process.stdin.on("readable", (chunk) => {
  console.log(chunk);
  process.stdin.on("read", (chunk1) => {
    console.log(chunk1);
  });
}); */
