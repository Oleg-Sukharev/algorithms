function circularShift(arr, shift) {
  const n = arr.length;

  // Normalize the shift to handle larger or negative values
  shift = ((shift % n) + n) % n;

  // Create a new array to hold the result
  const result = new Array(n);

  // Place elements in the new positions
  for (let i = 0; i < n; i++) {
    const newIndex = (i + shift) % n;
    result[newIndex] = arr[i];
  }

  return result;
}