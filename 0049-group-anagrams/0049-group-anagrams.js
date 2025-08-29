/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arr = [];
    let myMap = new Map();
    if (strs.length < 2) {
        arr.push(strs);
        return arr;
    }

    for (let i = 0; i < strs.length; i++) {
        myMap.set(strs[i].split("").sort().join(""), []);
    }
    for (let i = 0; i < strs.length; i++) {
        let valueArr = myMap.get(strs[i].split("").sort().join(""));
        valueArr.push(strs[i]);
        myMap.set(strs[i].split("").sort().join(""), valueArr);
    }
    for (let [key, value] of myMap) {
        arr.push(value);
    }
    return arr
};