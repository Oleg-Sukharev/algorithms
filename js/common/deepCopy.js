function deepCopy(obj) {
  if ("object" === typeof obj) {
    if (obj instanceof Array) {
      let length = obj.length;
      let newObj = new Array(length);
      for (let i = 0; i < length; i++) {
        newObj[i] = deepCopy(obj[i]);
      }
      return newObj;
    } else {
      let newObj = {};
      if (obj.prototype) {
        newObj.prototype = obj.prototype;
      }
      for (let key in obj) {
        newObj[key] = deepCopy(obj[key]);
      }
      return newObj;
    }
  }
  return obj;
}

// const copyPerson = structuredClone({});
