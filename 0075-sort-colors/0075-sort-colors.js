/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let white = 0;
    let blue = 0;
    for(let i in nums){
        if(nums[i]=== 0){
            red+=1;
        }
        else if(nums[i]===1){
            white+=1;
        }
        else{
            blue+=1;
        }
    }
    for(let i in nums){
        if(red!==0){
            nums[i] = 0;
            red--;
        }
        else if(white!==0){
            nums[i] = 1;
            white--;
        }
        else{
            nums[i] = 2;
            blue--;
        }
    }
    return nums
};