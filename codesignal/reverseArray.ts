function reverseArray(arr:number[]):number[] {
  const result = new Array(arr.length); // Preallocate the array
  // for(const num of arr){
  //    result.unshift(num)
  // }

  for (let i = 0; i < arr.length; i++) {
    result[arr.length - 1 - i] = arr[i]
  }

  return result;
  // return [...arr].reverse();
}