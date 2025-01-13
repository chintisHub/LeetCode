/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let myMap = new Map()
    for(let i =0; i<s.length; i++){
        if(myMap.has(s[i])){
            myMap.set(s[i], myMap.get(s[i])+1)
        }else{
            myMap.set(s[i], 1);
        }
    }
    let count = 0
    for(let [key, value] of myMap){
        if(value %2 === 0 && value!==2){
            count = count+2
        }else if(value%2!==0 && value!==1){
            count = count + 1
        }
        else{
            count = count + value
        }
    }
    return count
};