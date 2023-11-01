// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4

const searchBinary = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid; // Target found
    }

    if (nums[mid] < target) {
      left = mid + 1; // Target might be in the right half
    } else {
      right = mid - 1; // Target might be in the left half
    }
  }
  return -1;
};

console.log(searchBinary([-1, 0, 3, 5, 9, 12], 9));


const search = function (nums, target) {
  return nums.indexOf(target);
};