// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

const containsDuplicate = (nums) => {
    return new Set(nums).size != nums.length;
};

const containsDuplicate = (nums) => {
    const numSet = new Set();

    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}
