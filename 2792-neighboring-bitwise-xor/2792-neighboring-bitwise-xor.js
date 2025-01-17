/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let original = [0]
    for(let i =0; i< derived.length-1; i++){
        original.push(derived[i]^original[i]);
    }
    for(let i =0; i<original.length; i++){
        if(i!== original.length-1){
            if(derived[i] !== original[i]^original[i+1]){
                return false;
            }
        }else{
            if(derived[i] !== original[i]^original[0]){
                return false;
            }
        }
    }
    return true
};