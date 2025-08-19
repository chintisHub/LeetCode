/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let length = nums.length
    for (let i = 0; i< length; i++){
        nums.push(nums[i])
    }
    return nums
};