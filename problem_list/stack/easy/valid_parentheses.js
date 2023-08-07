/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

const isValidAlt = function (s) {
    const stack = []
    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let index = 0; index < s.length; index++) {
        const currentChar = s[index];
        if (pairs[currentChar]) {
            stack.push(currentChar);
            continue;
        }

        if (stack.length === 0 || currentChar !== pairs[stack.pop()]) {
            return false;
        }
    }

    return stack.length === 0
}

const isValid = function (s) {
    const stack = []
    const bracket = {
        "]": '[',
        '}': '{',
        ')': '('
    }

    for (const c of s) {
        if (c in bracket) {
            if (stack.length && stack[stack.length - 1] === bracket[c]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(c)
        }
    }
    return stack.length === 0
}

console.log(isValid("()[{]{}"));
console.log(isValid("()"));