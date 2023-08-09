// Given a string s, find the length of the longest 
// substring without repeating characters.
// Sliding Window

const lengthOfLongestSubstring = (s) => {
    let charMap = new Map();
    let max = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right])) {
            left = Math.max(left, charMap.get(s[right]) + 1);
        }
        charMap.set(s[right], right);
        max = Math.max(max, right - left + 1);
    }

    return max;
};

const lengthOfLongestSubstringAlt = (s) => {
    // too long Runtime
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const substring = s.substring(i);
        console.log(substring);

        for (let j = 0; j < substring.length; j++) {
            const char = substring[j];
            if (substring.indexOf(char) === j) {
                if (maxLength <= j) {
                    maxLength = j + 1;
                }
            } else {
                break;
            }
        }
    }
    return maxLength;
};

