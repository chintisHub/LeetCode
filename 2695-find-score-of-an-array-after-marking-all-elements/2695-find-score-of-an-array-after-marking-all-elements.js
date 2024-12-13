/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let max = 1;
    let min = Math.pow(10, 5);
    const numsMap = new Map();
    for (let i = 0;i < nums.length;i++) {
        const num = nums[i];
        max = Math.max(max, num);
        min = Math.min(min, num);
        if (numsMap.has(num)) numsMap.get(num).add(i);
        else numsMap.set(num, new Set([i]));
    }
    const removeNums = (index) => {
        const num = nums[index];
        if (num === undefined || !numsMap.has(num)) return;
        numsMap.get(num).delete(index);
        if (numsMap.get(num).size === 0) numsMap.delete(num);
    }
    let result = 0;
    for (let num = min;num <= max;num++) {
        if (!numsMap.has(num)) continue;
        for (const numI of numsMap.get(num)) {
            removeNums(numI - 1);
            removeNums(numI + 1);
            result += num;
        }
    }
    return result;
};