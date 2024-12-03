/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let arr = s.split('');
    let final = []
    pointer = 0
    
    for(let i =0; i< arr.length; i++){
        if(spaces[pointer] === i){
            final.push(' ')
            final.push(arr[i])
            pointer++;
        }else{
            final.push(arr[i])
        }
    }
    let f;
    for(let i =0; i< final.length; i++){
        if(f === undefined){
            f = final[i]
        }
        else{
            f+=final[i]
        }
    }
    return f
};