const asyncMapLimit = async (array, limit, asyncCallback) => {
  const results = [];
  const executing = new Set(); // Track executing tasks

  for (let i = 0; i < array.length; i++) {
    const promise = asyncCallback(array[i], i, array)
      .then((result) => {
        results[i] = result; // Store result at the correct index
      })
      .finally(() => {
        executing.delete(promise); // Remove finished task
      });

    executing.add(promise);

    if (executing.size >= limit) {
      await Promise.race(executing); // Wait for one task to complete
    }
  }

  await Promise.all(executing); // Wait for all remaining tasks to complete
  return results;
};

const fetchData = async (id) => {
  console.log(`Fetching ID ${id}...`);
  return new Promise((resolve) => setTimeout(() => resolve(`Data for ID ${id}`), 1000));
};

const ids = [1, 2, 3, 4, 5, 6];

asyncMapLimit(ids, 2, async (id) => {
  const data = await fetchData(id);
  console.log(`Fetched: ${data}`);
  return data;
}).then((results) => {
  console.log("All results:", results);
});