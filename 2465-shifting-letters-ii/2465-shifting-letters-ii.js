/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {

    const asciiMap = new Map();
    const numMap = new Map();
    for (let i = 97; i <= 122; i++) {
        asciiMap.set(i, String.fromCharCode(i));
        numMap.set(String.fromCharCode(i) , i);
    }

    let arr = [0]

    for (let i = 0; i < s.length; i++) {
        arr.push(0);
    }
    for (let i = 0; i < shifts.length; i++) {
        if (shifts[i][2] === 0) {
            arr[shifts[i][0]] = arr[shifts[i][0]] - 1;
            arr[shifts[i][1] + 1] = arr[shifts[i][1] + 1] + 1;
        }
        else {
            arr[shifts[i][0]] = arr[shifts[i][0]] + 1;
            arr[shifts[i][1] + 1] = arr[shifts[i][1] + 1] - 1;
        }
    }

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1]
    }
    let res = '';
    for(let i = 0 ; i< s.length; i++){
        let v = ((numMap.get(s[i])-97+arr[i])%26);
        if(v<0){
            v +=26
        }
        v += 97;
        res += asciiMap.get(v)
    }
    return res



};