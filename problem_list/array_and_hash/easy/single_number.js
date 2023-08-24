
// Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2, 2, 1]
// Output: 1

// Example 2:
// Input: nums = [4, 1, 2, 1, 2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

const singleNumber = (nums) => {
  let uniq = new Set();
  let uniqSum = 0;
  let numSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];

    if (!uniq.has(cur)) {
      uniq.add(cur);
      uniqSum += cur;
    }
    numSum += cur;
  }

  return uniqSum * 2 - numSum;
};

const singleNumberAlt = (nums) => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && !(i % 2)) {
      return nums[i]
    }
  }
};

console.log(singleNumber([1, 2]));

