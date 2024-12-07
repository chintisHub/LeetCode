/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let element = 0;
    let counter = 0;
    
    for(let i =0;i<nums.length; i++){
        if(counter === 0){
            element = nums[i];
        }
        if(element=== nums[i]){
            counter++;
        }
        else{
            counter--;
        }
    }
    return element
};