/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let sum =0;
    for(let i = 0; i< nums.length; i++){
        sum = nums[i]+sum;
    }
    let count = 0;
    let val = 0;
    for(let i =0; i< nums.length-1; i++){
        val = val+ nums[i];
        if(val >= sum-val){
            count = count + 1
        }
    }
    return count

};