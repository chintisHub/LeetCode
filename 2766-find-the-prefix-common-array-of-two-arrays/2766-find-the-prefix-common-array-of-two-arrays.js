/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let myMap = new Map();
    let count = 0;
    let arr = []
    for(let i =0; i< A.length; i++){
        
        if(myMap.has(A[i])){
            count = count+1
        }else{
            myMap.set(A[i],0)
        }

        if(myMap.has(B[i])){
            count = count+1
        }else{
            myMap.set(B[i],0)
        }
        arr.push(count)
    }
    return arr
};