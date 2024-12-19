const obj = new Proxy({}, {
  set(target, key, value) {
    if (typeof value !== "string") {
      target[key] = String(value);
      return true
    }
    target[key] = value;
    return true;
  }
});

obj.foo = 1;
console.log(obj);
console.log(typeof obj.foo);
