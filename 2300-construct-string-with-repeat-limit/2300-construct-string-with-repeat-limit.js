/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const alphabet = Array(26).fill(0);
    console.log(alphabet)

    for (let i = 0; i < s.length; i++) {
        const charCode = s[i].charCodeAt(0) - 97;
        alphabet[charCode]++;
    }
    console.log(alphabet)

    let limit;
    let left = alphabet.length - 2;
    let right = alphabet.length - 1;
    let string = '';

    while (right > 0) {
        while (right > 0 && !alphabet[right]) right--;
        left = right - 1;
        while (left >= 0 && !alphabet[left]) left--;

        limit = repeatLimit;

        while (alphabet[right] && limit--) {
            string += String.fromCharCode(right + 97);
            alphabet[right]--;
        }

        if (alphabet[right] && left >= 0) {
            string += String.fromCharCode(left + 97);
            alphabet[left]--;
        } else if (alphabet[right] > 0) {
            break;
        }
    }

    return string;
};