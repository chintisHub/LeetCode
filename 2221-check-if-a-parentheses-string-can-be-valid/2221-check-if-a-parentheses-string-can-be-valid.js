/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    const stringLength = s.length;
    if (stringLength % 2 === 1) {
        return false;
    }

    const openIndices = [];
    const unlockedIndices = [];

    for (let i = 0; i < stringLength; i++) {
        if (locked[i] === '0') {
            unlockedIndices.push(i);
        } else if (s[i] === '(') {
            openIndices.push(i);
        } else if (s[i] === ')') {
            if (openIndices.length > 0) {
                openIndices.pop();
            } else if (unlockedIndices.length > 0) {
                unlockedIndices.pop();
            } else {
                return false;
            }
        }
    }

    while (openIndices.length > 0 && unlockedIndices.length > 0 &&
           openIndices[openIndices.length - 1] < unlockedIndices[unlockedIndices.length - 1]) {
        openIndices.pop();
        unlockedIndices.pop();
    }

    // If there are unmatched '(' and enough unlocked positions left,
    // ensure the total count is even for a valid match.
    return openIndices.length === 0 && unlockedIndices.length % 2 === 0;
};