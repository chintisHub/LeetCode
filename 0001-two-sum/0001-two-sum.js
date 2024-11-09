/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
        for(let i=0;i<nums.length;i++){
            const j = target - nums[i];
            if(map.has(j)){
                return [map.get(j),i];
            }
            map.set(nums[i],i)
        }
        return [];
};