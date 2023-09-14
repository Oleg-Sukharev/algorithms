function delay(ms, cd) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cd);
    }, ms);
  });
}

delay(3000, () => {
  console.log("log");
}).catch((err) => console.log(err.message));
