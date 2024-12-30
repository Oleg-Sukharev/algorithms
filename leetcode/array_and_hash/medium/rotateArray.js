// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
//  Do not return anything, modify nums in - place instead.

// const rotateArray = (nums,k) =>{
//   const len = nums.length;
//   k = k % len;

//   nums.splice(0, 0, ...nums.splice(len - k, k));
// }

// function rotateArray(nums, k) {
//   const numsLength = nums.length;
//   for (let i = 2; i < k; i++) {
//     const num = nums[numsLength - 1];
//     nums.pop();
//     nums.unshift(num)
//   }

//   console.log(nums,'nums');
// };

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 8));
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
