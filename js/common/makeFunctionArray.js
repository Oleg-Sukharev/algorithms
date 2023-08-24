function makeFunctionArray() {
  const arr = [];
  const length = 3;
  for (let i = 0; i < length; i++) {
    arr.push(() => { return i });
  }

  return arr;
}

const functionArr = makeFunctionArray();

console.log(functionArr[0]()); // 0
console.log(functionArr[2]()); // 2
