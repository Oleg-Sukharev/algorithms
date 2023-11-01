// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
    if (!strs[0][0] || !strs.length) return '';
    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        if (strs.every(str => str[i] == char)) {
            prefix += char;
        } else {
            break;
        };
    }

    return prefix;
};

const longestCommonPrefixAlt = (strs) => {
    if (!strs[0][0] || !strs.length) return '';
    let result = "";

    for (let i = 0; i < strs[0].length; i++) {
        const searchedChar = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== searchedChar) {
                return result;
            }
        }

        result += searchedChar;
    }

    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));