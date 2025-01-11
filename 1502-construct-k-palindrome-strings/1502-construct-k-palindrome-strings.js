/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(s.length<k){
        return false;
    }
    let counter = 0;
    let myMap = new Map();
    for(let i =0; i< s.length; i++){
        if(myMap.has(s[i])){
            myMap.set(s[i], myMap.get(s[i])+1);
        }
        else{
            myMap.set(s[i],1);
        }
    }
    for(let [key, value] of myMap){
        if(value % 2 === 1){

            counter +=1;
        }
    }
    if(counter <=k){
        return true;
    }
        return false;
};