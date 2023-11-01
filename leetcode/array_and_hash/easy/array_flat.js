// Creates a new array with all sub-array on the same level. 

const arr = [1, 2, [[[[[3, 4]]]]], [5, [6, 7]], 8];
const flatArr = arr.flat(Infinity);
const customFlatWithFlatMap = (array) => array.flatMap(element => Array.isArray(element) ? customFlat(element) : element);

const customFlat = (array) => {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element)) {
      // result = [...result, ...customFlat(element)];
      result.push(...customFlat(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

const flatArrSecond = customFlat(arr);
console.log(flatArrSecond);