/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let mySet = new Set();
    let count = 1
    for(let i =0; i<s.length; i++){
        if(mySet.has(s[i])){
            count +=1
            mySet.clear();
            mySet.add(s[i]);
        }else{
            mySet.add(s[i])
        }
    }

    return count
};