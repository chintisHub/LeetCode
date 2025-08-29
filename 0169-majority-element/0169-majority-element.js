/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let myMap = new Map();
    const len = nums.length;
    for (let i in nums) {
        if (myMap.has(nums[i])) {
            myMap.set(nums[i], myMap.get(nums[i]) + 1)
        } else {
            myMap.set(nums[i], 1)
        }

    }

    for (let [key, value] of myMap) {
        if (value >= len / 2) {
            return key;
        }
    }
};