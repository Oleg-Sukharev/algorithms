// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn - 1 + Xn - 2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

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

