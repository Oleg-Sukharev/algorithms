// You are given a 0 - indexed integer array nums.You have to partition the array into one or more contiguous subarrays.

// We call a partition of the array valid if each of the obtained subarrays satisfies one of the following conditions:

// The subarray consists of exactly 2 equal elements.For example, the subarray[2, 2] is good.
// The subarray consists of exactly 3 equal elements.For example, the subarray[4, 4, 4] is good.
// The subarray consists of exactly 3 consecutive increasing elements, that is, the difference between adjacent elements is 1. For example, the subarray[3, 4, 5] is good, but the subarray[1, 3, 5] is not.
// Return true if the array has at least one valid partition.Otherwise, return false.

// Example 1:

// Input: nums = [4, 4, 4, 5, 6]
// Output: true
// Explanation: The array can be partitioned into the subarrays[4, 4] and[4, 5, 6].
// This partition is valid, so we return true.

const validPartition = (nums) => {
  // edge case only 2 elements
  if (nums.length == 2) {
    return nums[0] == nums[1]
  }

  // initialize valid with same length as nums all false
  // valid[n] tells us if the array up to index n is valid
  const valid = []
  for (let i = 0; i < nums.length; i++) {
    valid.push(false)
  }

  // now initialize the first three elements of valid manually
  // to avoid out of bounds errors in the loop
  if (nums[0] == nums[1]) {
    // first two are [n, n]
    valid[1] = true
  }
  if (nums[2] == nums[1] && nums[1] == nums[0]) {
    // first three are [n, n, n]
    valid[2] = true
  }
  if (nums[2] == nums[1] + 1 && nums[1] == nums[0] + 1) {
    // first three are [n, n + 1, n + 2]
    valid[2] = true
  }

  for (let i = 3; i < nums.length; i++) {
    // check previous elements if they are a valid combination, then use
    // previous results stored in valid array to see if current index is valid
    if (nums[i] == nums[i - 1]) {
      // [n, n] case for the last two elements
      valid[i] = valid[i - 2] // if 2 indexes ago it was valid then now it is valid
      // because we can add [n, n] on top of the previous valid array
    }
    if ((nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2])
      || (nums[i] == nums[i - 1] + 1 && nums[i - 1] == nums[i - 2] + 1)) {
      // [n, n, n] case or [n, n + 1, n + 2] case for previous three elements
      valid[i] = valid[i] || valid[i - 3] // if 3 indexes ago it was valid then now it is valid
    }
  }

  return valid[nums.length - 1] // last entry in valid is if the whole array is valid
};