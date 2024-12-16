//JavaScript Code
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while(k--){
        let ans = nums[0], idx = 0;
        for(let i = 0; i < nums.length; i++)
            if(nums[i] < ans){
                ans = nums[i];
                idx = i;
            }
        nums[idx] *= multiplier;
    }
    return nums
};