// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.You may assume that the majority element always exists in the array.

// better performance
const majorityElement = (nums) => {
    let count = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            res = nums[i];
        }
        if (res === nums[i]) {
            count++;
        }
        if (res !== nums[i]) {
            console.log(res);
            count--;
        }
    }
    return res;
}

const majorityElementAlt = (nums) => {
    const result = {};

    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        result[el] = result[el] ? result[el] + 1 : 1;
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
}
