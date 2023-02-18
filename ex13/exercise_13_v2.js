/* eslint-disable no-unused-expressions */
/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */

process.stdin.on("data", (data) => {
  res = countPostfix(data);
  process.stdout.write(res + "");
  process.exit();
});

function countPostfix(postfix) {
  const stackArr = [];

  const postfixArr = postfix.trim().split(" ");

  postfixArr.forEach((item) => {
    if (/(^-?[\d.]+)/.test(item)) {
      stackArr.push(item);
    } else {
      let b = +stackArr.pop();
      let a = +stackArr.pop();
      let c = 0;
      switch (item) {
        case "*":
          c = a * b;
          break;
        case "/":
          c = a / b;
          break;
        case "+":
          c = a + b;
          break;
        case "-":
          c = a - b;
      }
      stackArr.push(c);
    }
  });
  return stackArr[0];
}
