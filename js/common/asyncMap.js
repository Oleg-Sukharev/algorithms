async function asyncMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(await callback(array[i], i, array));
  }
  return result;
}

// Simulate an async operation
const fetchData = async (item) => {
  return new Promise((resolve) => setTimeout(() => resolve(item * 2), 100));
};

// Array to process
const array = [1, 2, 3, 4, 5];

// Using asyncMap
asyncMap(array, fetchData).then((result) => {
  console.log(result); // Output: [2, 4, 6, 8, 10]
});