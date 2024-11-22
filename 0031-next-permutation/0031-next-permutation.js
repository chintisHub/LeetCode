/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    breakpoint = -1
    for(let i = nums.length-1; i > 0; i--){
        if(nums[i]>nums[i-1]){
            breakpoint = i-1;
            break;
        }
    }
    if(breakpoint === -1){
        return nums.reverse();
    }
    for(let i = nums.length-1;i>breakpoint;i--){
        if(nums[i]>nums[breakpoint]){
            let temp = nums[i];
            nums[i]= nums[breakpoint];
            nums[breakpoint]= temp;
            break;
        }
    }
    let left = breakpoint+1;
    let right = nums.length-1;
    while(left<right){
        [nums[left],nums[right]] = [nums[right], nums[left]]
        left++;
        right--
    }
    return nums;
};