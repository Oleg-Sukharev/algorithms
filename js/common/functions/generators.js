
const fibGenerator = function* () {
  let a = 0;
  let b = 1;

  yield a;
  yield b;

  while (true) {
    const c = a + b;
    a = b;
    b = c;
    yield b;
  }
};

let generator = fibGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
