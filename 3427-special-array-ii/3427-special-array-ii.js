/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let arr= [0];
    let result =[]
    for(let i =1; i< nums.length; i++){
        console.log(arr[arr.length-1])
        if(nums[i-1]%2 === nums[i]%2){
            arr.push(arr[arr.length-1]+1)
        }
        else{
            arr.push(arr[arr.length-1])
        }
    }
    for(let i =0; i< queries.length; i++){
        if(arr[queries[i][1]]-arr[queries[i][0]]!==0){
            result.push(false)
        }else{
            result.push(true)
        }
    }
    return result
};