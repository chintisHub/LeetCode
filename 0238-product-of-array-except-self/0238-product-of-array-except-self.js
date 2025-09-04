var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);

    // Calculate prefix products
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }



    let prevSuffix = 1;
    // Calculate suffix products and update ans array
    for (let i = n - 2; i >= 0; i--) {
        prevSuffix *= nums[i + 1];
        ans[i] *= prevSuffix;
    }

    return ans;
};