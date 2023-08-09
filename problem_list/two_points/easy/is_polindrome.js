// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (s) => {
    const str = String(s);
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

const isPalindromeAlt = (s) => {
    let str = String(s);
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
