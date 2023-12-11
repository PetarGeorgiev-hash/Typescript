type mathFunc = (a: number, b: number) => number;

const add: mathFunc = (a, b?) => {
  if (b) {
    return a + b;
  }
  return a;
};

const multiply: mathFunc = function (a = 2, b) {
  return a * b;
};
